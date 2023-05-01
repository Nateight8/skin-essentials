import { H2 } from "@/components/ui/H2";
import { H4 } from "@/components/ui/H4";
import { P } from "@/components/ui/P";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Product } from "swell-js";

type Props = {
  product: Product | undefined;
  quantity: number | undefined;
};

function CartItem({ product, quantity }: Props) {
  const src = (product?.images && product?.images[0]?.file?.url) ?? "";
  return (
    <div className="w-full my-2  md:my-4 gap-2 md:gap-4 grid grid-cols-3 px-4 ">
      <div className="w-full flex items-center">
        <div className="w-full">
          <AspectRatio ratio={1 / 1}>
            <Image fill src={src} alt="" className="object-cover" />
          </AspectRatio>
        </div>
      </div>

      <div className="py-4 md:py-11 px-2 md:px-4 col-span-full col-start-2 flex flex-col justify-between">
        <div className="pb-3 ">
          <H4 className="pt-2 pb-1 max-w-prose truncate text-slate-700">
            {product?.name}
          </H4>
          <P className="py-0 font-semibold ">{product?.price}</P>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <button className=""> +</button>
            <P className="p-0 font-semibold text-slate-800">{quantity}</P>
            <button className="">-</button>
          </div>
          <div className="">
            <Button variant="ghost" size="sm" className="capitalize text-xs">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
