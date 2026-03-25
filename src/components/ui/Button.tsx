import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5': variant === 'primary',
            'bg-card text-text-primary hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700': variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary/10': variant === 'outline',
            'hover:bg-zinc-800 text-text-secondary hover:text-text-primary': variant === 'ghost',
            'h-12 px-6 py-3': size === 'default',
            'h-9 rounded-md px-4 text-xs': size === 'sm',
            'h-14 rounded-xl px-10 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
