"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { MenubarSeparator } from "@/components/ui/menubar";
import { getCart } from "@/lib/swell/cart";
import useSWR from "swr";
import CartItem from "./CartItem";
import SumTotals from "./SumTotals";

const Bag = () => {
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const cartItems = cart?.items;
  // const cartItems = cart?.items;

  // console.log(cartItems);

  return (
    <>
      <main className="min-h-screen">
        <div className=" ">
          <div className="grid md:grid-cols-2 w-full gap-x-px  bg-stone-500/20 my-8 ">
            <div className="h-full bg-background">
              <ScrollArea className="bg-background h-[70vh] py-2 ">
                {cartItems?.map((item) => {
                  const { product, quantity } = item;

                  return (
                    <div className="" key={item.id}>
                      <CartItem product={product} quantity={quantity} />
                      <MenubarSeparator className="bg-stone-500/20" />
                    </div>
                  );
                })}
              </ScrollArea>
            </div>
            <div className=" py-6 bg-background">
              <SumTotals />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
