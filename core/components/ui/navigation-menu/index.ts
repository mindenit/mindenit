import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuIndicator } from './NavigationMenuIndicator.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'
export { default as NavigationMenuViewport } from './NavigationMenuViewport.vue'

export const navigationMenuTriggerStyle = cva(
	'text-muted-foreground hover:text-secondary-foreground hover:bg-royal-blue-50 dark:hover:bg-royal-blue-950/50 relative overflow-hidden rounded-xl px-4 py-2 font-medium transition-all duration-300 flex items-center hover:shadow-md focus-visible:ring-4 focus-visible:ring-royal-blue-500/20 focus-visible:outline-none'
)
