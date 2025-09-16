import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      size: {
        default: "h-4",
        sm: "h-2",
        lg: "h-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const progressBarVariants = cva(
  "h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        destructive: "bg-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
  variant?: "default" | "success" | "warning" | "destructive"
  showValue?: boolean
  label?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100, 
    size, 
    variant, 
    showValue = false, 
    label,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div className="w-full">
        {(label || showValue) && (
          <div className="mb-2 flex items-center justify-between text-sm">
            {label && (
              <span className="text-muted-foreground">{label}</span>
            )}
            {showValue && (
              <span className="font-medium">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}
        <div
          ref={ref}
          className={cn(progressVariants({ size }), className)}
          {...props}
        >
          <div
            className={cn(progressBarVariants({ variant }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress, progressVariants, progressBarVariants }
