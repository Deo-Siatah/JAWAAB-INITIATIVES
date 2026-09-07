import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] shadow-md shadow-emerald-900/10",
        accent:
          "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] shadow-md shadow-amber-900/10 font-bold",
        secondary:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-emerald-200/70",
        outline:
          "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white",
        ghost:
          "text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)]",
        link:
          "text-[var(--primary)] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-xs rounded-full",
        lg: "h-13 px-8 text-base tracking-wide rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };