import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const pVariants = cva("pb-4 font-inter text-[#32323D]", {
  variants: {
    size: {
      default: "text-sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PHeading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pVariants> {}

const P = forwardRef<HTMLHeadingElement, PHeading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

P.displayName = "H4";

export { P, pVariants };
