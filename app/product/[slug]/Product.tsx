"use client";
import React, { useLayoutEffect, useRef, useTransition } from "react";
import { H2 } from "@/components/ui/H2";
import { H4 } from "@/components/ui/H4";
import { P } from "@/components/ui/P";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSWRConfig } from "swr";
import Image from "next/image";
import { addToCart } from "@/lib/swell/cart";
import { useRouter } from "next/navigation";
import { Product } from "swell-js";

type Props = {
  product: Product;
};

function Product({ product }: Props) {
  // const { description, name, images, price, id } = product;
  const url = (product?.images && product?.images[0]?.file?.url) ?? "";
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSubmit = async () => {
    await addToCart({
      product_id: product.id,
      quantity: 1,
    });

    mutate("cart");

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="">
      <div className="grid md:grid-cols-2 ">
        <div className="flex items-center justify-center w-full   bg-stone-200/10">
          <div className=" w-full h-[75vh] md:h-[50vh] sm:w-96 relative">
            <Image
              src={url}
              alt=""
              className="object-cover object-bottom "
              fill
            />
          </div>
        </div>
        {/* right side start */}
        <div className="px-4 sm:px-6 py-6">
          <div className="">
            <H4 className="bg-2 p-0">N{product.price}</H4>
            <H2 className="font-inter pb-2">{product.name}</H2>
          </div>
          <div className="h-px bg-stone-500/20 w-full my-4" />
          <P className="text-lg uppercase">Details</P>
          <ScrollArea className=" h-[24ch] w-full max-w-xl mb-4 bg-inherit ">
            <div
              className="pb-4 font-inter text-slate-700 bg-inherit"
              dangerouslySetInnerHTML={{
                __html: product.description?.toString() as string,
              }}
            />
          </ScrollArea>

          <div className="h-[0.5px] bg-stone-500/20 w-full my-4" />
          <div className="w-full">
            <Button type="submit" onClick={handleSubmit} className="w-full ">
              Add to bag - {product.price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
