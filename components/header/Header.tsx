import React, { Fragment } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import CartItem from "./CartItem";
import { getCart } from "@/lib/swell/cart";
import useSWR from "swr";
import { ScrollArea } from "../ui/scroll-area";
import { Button, buttonVariants } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { P } from "../ui/P";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const cartItems = cart?.items;

  const router = useRouter();
  const path = usePathname();
  const handleClick = () => {
    router.push("/bag");
  };

  // console.log(cart);

  const disable = path === "/bag" ? true : false;

  return (
    <div className="flex item-center w-full justify-between">
      <div className=""></div>
      <div className=""></div>
      <Menubar>
        <div className=" hidden md:inline-block">
          <MenubarMenu>
            <MenubarTrigger>help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>coming soon...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <div className=" hidden md:inline-block">
          <MenubarMenu>
            <MenubarTrigger>Account</MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>coming soon...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <MenubarMenu>
          <MenubarTrigger disabled={disable}>
            Bag ({0 && cartItems?.length})
          </MenubarTrigger>

          <MenubarContent>
            {cartItems ? (
              <ScrollArea className="h-72 w-full ">
                {cartItems?.map((items) => {
                  const { product, quantity } = items;
                  // console.table(items);

                  return (
                    <Fragment key={items.id}>
                      <MenubarItem>
                        <CartItem product={product} quantity={quantity} />
                      </MenubarItem>
                      <MenubarSeparator />
                    </Fragment>
                  );
                })}
                <Link href="/bag" className={`${buttonVariants()} w-full`}>
                  view your bag
                </Link>
              </ScrollArea>
            ) : (
              <div className="min- min-h-[8rem] w-full flex items-center justify-center">
                <P>Your bag is empty</P>
              </div>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default Header;
