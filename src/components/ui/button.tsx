import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button — the brand's primary interactive primitive.
 *
 * - Colour pairings follow Brand Guide §3.0 "Using the Logo on
 *   Coloured Backgrounds" (high contrast, no blue-on-green, etc.).
 * - `asChild` renders the component as whatever element is passed
 *   as its child (e.g. a Next.js <Link>), while keeping the styling.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-body-sm font-bold tracking-brand-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alphabyte-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary — Alphabyte Blue on white page
        default:
          "bg-alphabyte-blue text-white hover:bg-alphabyte-blue/90 active:bg-alphabyte-blue/80",
        // Inverse — white pill on brand surfaces
        inverse:
          "bg-white text-alphabyte-blue hover:bg-alphabyte-grey active:bg-alphabyte-grey/80",
        // Outline — for secondary CTAs beside a primary
        outline:
          "border border-alphabyte-blue bg-transparent text-alphabyte-blue hover:bg-alphabyte-blue hover:text-white",
        // Ghost — for tertiary actions in dense UI
        ghost:
          "bg-transparent text-brand-ink hover:bg-alphabyte-grey",
        // Link — inline link-style button (per §4.0 Links spec)
        link: "text-alphabyte-blue underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-body",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
