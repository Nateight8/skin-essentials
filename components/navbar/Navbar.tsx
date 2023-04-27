"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import MobileNav from "./Mobilenav";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-stone-400  py-2 px-2  z-10">
        <div className="flex w-full justify-between items-center">
          <ul className="">
            <li className="uppercase px-2">
              <Link
                href="/"
                className="tet text-sm font-inter font-medium text-primary uppercase"
              >
                Home
              </Link>
            </li>
          </ul>

          <Button
            variant="ghost"
            className={`z-40 hover:bg-transparent delay-300 duration-1000 ease-in-out ${
              isOpen ? "border border-stone-100" : ""
            }`}
          >
            <Hamburger
              color={`${isOpen ? "rgb(245 245 244)" : "#32323D"} `}
              toggled={isOpen}
              toggle={setOpen}
              rounded
            />
          </Button>
        </div>
      </nav>
      <MobileNav toggleNav={toggleNav} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
