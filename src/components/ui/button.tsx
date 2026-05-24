import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

const buttonVariants = cva(
  'focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/85',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        outline:
          'border bg-background text-foreground hover:bg-muted hover:text-foreground',
        ghost: 'text-foreground hover:bg-muted',
      },
      size: {
        sm: 'min-h-9 px-3 text-xs',
        md: 'min-h-10 px-4',
        lg: 'min-h-12 px-5 text-base',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export function buttonClassName(
  props?: VariantProps<typeof buttonVariants> & { className?: string },
) {
  const { className, ...variantProps } = props ?? {}
  return cn(buttonVariants(variantProps), className)
}
