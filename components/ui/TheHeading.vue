<script lang="ts" setup>
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { tv, type VariantProps } from 'tailwind-variants'

export const headingVariants = tv({
  base: 'text-black dark:text-white',
  variants: {
    size: {
      large: 'text-5xl font-extrabold leading-[3rem] tracking-[1.2%]',
      medium: 'text-3xl font-semibold tracking-[0.75%]',
      small: 'text-2xl font-semibold tracking-[0.8%]',
      tiny: 'text-xl font-semibold tracking-[0.5%]',
    },
  },
  defaultVariants: {
    size: 'large',
  },
})

type HeadingVariants = VariantProps<typeof headingVariants>

export interface HeadingProps {
  size: HeadingVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<HeadingProps>()

const sizes = {
  large: '1',
  medium: '2',
  small: '3',
  tiny: '4'
}

const tag = computed(() => {
  return `h${sizes[props.size!]}`
})
</script>

<template>
  <component :is="tag" :class="cn(headingVariants({ size }), props.class)"><slot /></component>
</template>