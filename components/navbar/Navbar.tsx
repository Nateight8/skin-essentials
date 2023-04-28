"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "../ui/button";
import MobileNav from "./Mobilenav";
import { usePathname } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setOpen] = useState(false);

  const pathname = usePathname();
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-stone-400  py-2 px-2  z-50">
        <div className="flex w-full justify-between items-center">
          {/* <ul className="">
            <li className="uppercase px-2">
              <Link
                href="/"
                className="tet text-sm font-inter font-medium text-primary uppercase"
              >
                Home
              </Link>
            </li>
          </ul> */}
          <Hamburger
            color={`${isOpen ? "rgb(245 245 244)" : "#32323D"} `}
            toggled={isOpen}
            toggle={setOpen}
            rounded
            size={24}
          />
          <div className="flex items-center z-50">
            {isOpen ? (
              <div className="">
                <Hamburger
                  color={`${isOpen ? "rgb(245 245 244)" : "#32323D"} `}
                  toggled={isOpen}
                  toggle={toggleNav}
                  rounded
                  size={24}
                  duration={1.2}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                className={`hover:bg-transparent  p-0  duration-1000 ease-in-out `}
              >
                <ShoppingBag size={24} color="#32323D" />
                <span className="text-xl text-primary font-inter font-bold">
                  1
                </span>
              </Button>
            )}
          </div>
        </div>
      </nav>
      <MobileNav toggleNav={toggleNav} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
