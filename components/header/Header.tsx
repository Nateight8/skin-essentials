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
import {} from "@radix-ui/react-menubar";

type Props = {};

function Header({}: Props) {
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const cartItems = cart?.items;

  const router = useRouter();
  const path = usePathname();
  const handleClick = () => {
    router.push("/bag");
  };

  // useMenu

  const disable = path === "/bag" ? true : false;

  return (
    <nav className="flex item-center bg-stone-300 w-full justify-between sticky top-0 left-0 right-0 z-50">
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
            Bag ({cartItems?.length === 0 ? 0 : cartItems?.length})
          </MenubarTrigger>

          <MenubarContent>
            {cartItems?.length === 0 ? (
              <div className="min- min-h-[8rem] w-full flex items-center justify-center">
                <P>Your bag is empty</P>
              </div>
            ) : (
              <ScrollArea className="h-fit w-full ">
                {cartItems?.map((items) => {
                  const { product, quantity } = items;

                  return (
                    <Fragment key={items.id}>
                      <MenubarItem onSelect={(e) => e.preventDefault()}>
                        <CartItem
                          product={product}
                          quantity={quantity}
                          items={items}
                        />
                      </MenubarItem>
                      <MenubarSeparator />
                    </Fragment>
                  );
                })}
                <Link href="/bag" className={`${buttonVariants()} w-full`}>
                  view your bag
                </Link>
              </ScrollArea>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}

export default Header;
