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

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-stone-400  py-2 ">
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
        </div>
        {/* Burger nav */}
        {/* <div className="">
          <div className=" w-[80%] bg-red-500 absolute z-40 top-0 left-0 bottom-0"></div>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
