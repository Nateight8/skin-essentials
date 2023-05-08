"use client";

import { H4 } from "@/components/ui/H4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/lib/redux/features/cartSlice";
import { useAppDispatch } from "@/lib/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { Product } from "swell-js";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSWRConfig } from "swr";
import { addToCart } from "@/lib/swell/cart";
import { useRouter } from "next/navigation";
import { getCart } from "@/lib/swell/cart";
import useSWR from "swr";

type Props = {
  products: any;
};

function Products({ products }: Props) {
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // fetching cartItems using SWR
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const cartItems = cart?.items;
  // console.log(cart);

  const addItem = async (itemId: string | undefined) => {
    // const existingItem = cartItems?.find((item) => {
    //   console.log(item.id);
    //   // console.log(itemId);
    // });
    // console.log(existingItem);
    // console.log(itemId);

    // // item.id === itemId

    // if (existingItem) {
    //   console.log("This item is already in the cart.");
    // } else {
    //   console.log("Item added to the cart.");
    // }

    await addToCart({
      product_id: itemId,
      quantity: 1,
    });

    mutate("cart");

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <section className="my-10  w-full px-4 ">
      <div className="py-6">
        <h1 className=" text-5xl md:text-7xl pb-6 font-customFont">
          HOME ESSENTIALS.
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-[1.5em]">
        {products.map((product: Product) => {
          const { id, price, slug, images, name } = product;
          const url = (product?.images && product?.images[0]?.file?.url) ?? "";

          return (
            <div key={id} className="w-full ">
              <Link
                href={`/product/${slug}`}
                className=" max-w-72 w-full  hover:cursor-pointer"
              >
                <AspectRatio ratio={2 / 2.4} className="overflow-hidden ">
                  <Image
                    src={url}
                    alt=""
                    className="object-cover object-center select-none hover:scale-110 transition-all duration-1000 ease-in-out"
                    fill
                  />
                </AspectRatio>
              </Link>

              <div className="py-3">
                <H4 className="text-center font-normal max-w-prose truncate">
                  {name}
                </H4>
                <Button
                  type="submit"
                  onClick={() => {
                    addItem(id);
                  }}
                  variant="outline"
                  className="w-full "
                >
                  Add to Bag - {price}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10">
        <Button className="w-full">see more products</Button>
      </div>
    </section>
  );
}

export default Products;
