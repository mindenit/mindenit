import { queryOptions, useQuery } from "@tanstack/vue-query";

interface Root {
	count: number;
	next: any;
	previous: any;
	objects: Object[];
	totalCount: number;
	pageNo: number;
	estimated_cycle_cost: EstimatedCycleCost;
	credit_and_invoicing_info: CreditAndInvoicingInfo;
	latest_data_from: string;
	available_services: AvailableService[];
}

interface Object {
	id: number;
	usage: Usage;
	service_display: string;
	price: string;
	updated_at: string;
	billing_start: string;
	billing_end: string;
	previous_history?: number;
	next_history?: number;
	start_date: string;
	end_date: string;
	client_currency: ClientCurrency;
	total_cycle_price: number;
	standard_cycle_price: number;
	price_override: boolean;
	price_override_model: string;
	start_display: string;
	end_display: string;
	standard_price_taxes: any[];
	price_taxes: any[];
}

interface Usage {
	project: string;
	usage_details: UsageDetail[];
	usage_end: string;
	metrics_details: any[];
	price: string;
	currency: Currency;
	metrics_details_summary: any[];
	metrics_total_price: string;
}

interface UsageDetail {
	resource_name: string;
	resource_type: string;
	usage: Usage2[];
	price: string;
}

interface Usage2 {
	resource_id: string;
	display_name: string;
	region: string;
	related_resource: any;
	history: History[];
	price: string;
}

interface History {
	rule: number;
	start: string;
	end: string;
	modifiers: any[];
	attribute_value: number;
	name: string;
	price: number;
	base_price: string;
	price_details: PriceDetails;
	modifiers_summary: any[];
}

interface PriceDetails {
	unit_display: string;
	attribute_unit_display?: string;
	units: number;
	unit_price: number;
	time_unit: string;
	timespan?: string;
	quantity?: number;
	display_quantity?: boolean;
}

interface Currency {
	code: string;
	rate: number;
}

interface ClientCurrency {
	code: string;
	rate: string;
	is_used: boolean;
	is_default: boolean;
}

interface EstimatedCycleCost {
	amount: number;
	usage_id: number;
}

interface CreditAndInvoicingInfo {
	has_billing_agreement: boolean;
	remaining_days: number;
	remaining_hours: number;
	reached_credit_limit: boolean;
	expiry_credit_info: any[];
}

interface AvailableService {
	display: string;
	related_dynamic_usage_id: number;
	price_override: boolean;
	price_override_display: any;
	price_override_model: string;
}

interface Balance {
	validate_credit_card: boolean;
	account_under_review: number;
	credits: any[];
	uptodate_credit: number;
	billing_currency: string;
	services_count: number;
	latest_data_from: string;
}

const priceOptions = () => {
	const config = useRuntimeConfig();

	const PROJECT_ID = "49a50d16d81d47a48cf08e6a805f4377";
	const RESOURCE_ID = "297c2d45-c280-4f7e-8fd8-180783d39c5d";

	const findResourcePrice = (data: Root): number => {
		const targetObject = data.objects.find((obj) => obj.usage.project === PROJECT_ID);

		if (!targetObject) {
			throw new Error(`Project with ID ${PROJECT_ID} not found`);
		}

		for (const detail of targetObject.usage.usage_details) {
			for (const usage of detail.usage) {
				if (usage.resource_id === RESOURCE_ID) {
					for (const history of usage.history) {
						const { unit_price, units } = history.price_details;
						return unit_price * units * 10;
					}
				}
			}
		}

		throw new Error(`Resource with ID ${RESOURCE_ID} not found`);
	};

	return queryOptions({
		queryKey: ["price", PROJECT_ID, RESOURCE_ID],
		queryFn: async () => {
			const { data, error } = await useFetch<Root>(
				`${config.public.server.api_url}/backend/api/openstack/billing`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${config.public.server.api_key}`,
					},
				}
			);

			if (error.value) throw error.value;
			if (!data.value) throw new Error("No data received");

			return findResourcePrice(data.value);
		},
	});
};

const balanceOptions = () => {
	const config = useRuntimeConfig();
	return queryOptions({
		queryKey: ["balance"],
		queryFn: async () => {
			const { data, error } = await useFetch<Balance>(
				`${config.public.server.api_url}/backend/api/billing/summary`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${config.public.server.api_key}`,
					},
				}
			);

			if (error.value) throw error.value;
			if (!data.value) throw new Error("No data received");

			return data.value.uptodate_credit;
		},
	});
};

export { priceOptions, balanceOptions };
