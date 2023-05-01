import React, { useTransition } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { P } from "../ui/P";
import { Button } from "../ui/button";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import { Product } from "swell-js";
import { removeFromCart } from "@/lib/swell/cart";
import { CartItemSnake } from "swell-js/types/cart/snake";

type Image = {
  file: {
    url: string;
  };
};

type productProps = {
  name: string;
  images: Image[];
  price: "String";
};

type Props = {
  product: Product | undefined;
  quantity: number | undefined;
  items: CartItemSnake;
};

function CartItem({ product, quantity, items }: Props) {
  const src = (product?.images && product?.images[0]?.file?.url) ?? "";

  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const removeItem = async () => {
    if (items.id) {
      await removeFromCart(items.id);
    }

    mutate("cart");

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="w-[18rem] gap-2 grid grid-cols-3">
      <div className="w-full flex items-center">
        <div className="w-full">
          <AspectRatio ratio={1 / 1}>
            <Image fill src={src} alt="" className="object-cover" />
          </AspectRatio>
        </div>
      </div>

      <div className=" col-span-full col-start-2 flex flex-col justify-between">
        <div className="pb-3 ">
          <P className="pt-2 pb-1 max-w-prose truncate ">{product?.name}</P>

          <P className="py-0">{product?.price}</P>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <button className=""> +</button>
            <P className="p-0">{quantity}</P>
            <button className="">-</button>
          </div>
          <div className="">
            <Button
              onClick={removeItem}
              variant="ghost"
              size="sm"
              className="capitalize text-xs"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
