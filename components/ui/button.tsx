import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex tracking-wide font-inter font-normal  uppercase items-center justify-center text-xs sm:text-sm font-medium transition-color  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary  text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border md:hover:tracking-widest ease-in duration-300 border-input hover:bg-accent/20 hover:text-accent-foreground border-primary/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-transparent font-inter hover:text-slate-800 text-slate-500 data-[state=open]:bg-transparent data-[state=open]:bg-transparent",

        link: "underline-offset-4 hover:underline text-primary ",
      },
      size: {
        default: "h-10 py-2 px-1 sm:px-4",
        sm: "h-9 px-3 ",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
