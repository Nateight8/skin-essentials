import React, { Fragment, useEffect, useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

function Header({}: Props) {
  // navlinks here
  const navlinks = [
    { id: "1", url: "/", label: "home" },
    { id: "2", url: "/bag", label: "bag" },
    { id: "3", url: "/about", label: "about" },
  ];

  // fetching data using SWR
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const cartItems = cart?.items;

  // const router = useRouter();
  const path = usePathname();

  // set bag MenuBar to inactive on "/bag" route handled by useEffect
  const disable = path === "/bag" ? true : false;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    path === "/bag" ? setOpen(false) : setOpen(true);
  }, [path]);

  // useMenu
  const [openMenu, setopenMenu] = useState(false);
  // const menuOpenHandler = () => {
  //   setopenMenu(!openMenu);
  // };

  return (
    <nav className="flex item-center border-b border-stone-400/70 bg-stone-300 w-full justify-between sticky top-0 left-0 right-0 z-50">
      <Sheet open={openMenu} onOpenChange={setopenMenu}>
        <SheetTrigger className="flex md:hidden cursor-pointer select-none items-center font-inter text-slate-600 font-semibold hover:text-slate-700 uppercase  px-3 py-1.5 text-sm  outline-none   focus:text-accent-foreground  data-[state=open]:text-accent-foreground">
          menu
        </SheetTrigger>

        <SheetContent
          forceMount
          className="transition-transform duration-700 ease-in-out"
          position={"top"}
          size={"full"}
        >
          <SheetHeader>
            <SheetTitle className="font-custom text-left mb-4">
              Elegance
            </SheetTitle>
          </SheetHeader>
          <ul className="space-y-2 w-72">
            {navlinks.map(({ id, url, label }) => (
              <li key={id} className="uppercase">
                <Link
                  href={url}
                  onClick={() => setopenMenu(false)}
                  className="text-base font-inter font-medium text-primary uppercase"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <div className=""></div>
      <Menubar>
        <div className=" hidden md:inline-block">
          <MenubarMenu>
            <MenubarTrigger>help</MenubarTrigger>
            <MenubarContent forceMount>
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
          <MenubarTrigger>
            Bag ({cartItems?.length === 0 ? 0 : cartItems?.length})
          </MenubarTrigger>

          {open && (
            <MenubarContent forceMount>
              {cartItems?.length === 0 ? (
                <div className="min- min-h-[8rem] w-[18rem] flex items-center justify-center">
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
                  <Link
                    href="/bag"
                    onClick={() => setOpen(false)}
                    className={`${buttonVariants()} w-full`}
                  >
                    view your bag
                  </Link>
                </ScrollArea>
              )}
            </MenubarContent>
          )}
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}

export default Header;
