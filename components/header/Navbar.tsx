import React, { Fragment, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import CartItem from "./CartItem";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname } from "next/navigation";
import { getCart } from "@/lib/swell/cart";
import useSWR from "swr";
import { buttonVariants } from "../ui/button";
import { P } from "../ui/P";

export default function HeaderNav() {
  const [openNav, setOpenNav] = React.useState(false);
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

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
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
      <div className="hidden md:inline-block">
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
      </div>
    </Menubar>
  );

  return (
    <>
      <Navbar
        blurred={false}
        className="sticky bg-[#d6d3d1] shadow-none border-b border-[#32323d42] inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            href="/"

            // className={`${buttonVariants()} w-full`}
          >
            Disconnect
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <div className=" md:hidden">
            <Menubar>
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
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
