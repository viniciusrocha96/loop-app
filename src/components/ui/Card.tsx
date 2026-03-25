import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border border-zinc-800 bg-card text-text-primary shadow-xl shadow-black/40 p-6 md:p-8", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
