import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const h4Variants = cva("capitalize font-inter font-normal text-center  pb-4", {
  variants: {
    size: {
      default: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H2Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h4Variants> {}

const H4 = forwardRef<HTMLHeadingElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h2 ref={ref} {...props} className={cn(h4Variants({ size, className }))}>
        {children}
      </h2>
    );
  }
);

H4.displayName = "H4";

export { H4, h4Variants };
