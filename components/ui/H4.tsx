import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const h4Variants = cva("capitalize font-inter font-semibold text-base pb-2", {
  variants: {
    size: {
      default: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H4Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h4Variants> {}

const H4 = forwardRef<HTMLHeadingElement, H4Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h4 ref={ref} {...props} className={cn(h4Variants({ size, className }))}>
        {children}
      </h4>
    );
  }
);

H4.displayName = "H4";

export { H4, h4Variants };
