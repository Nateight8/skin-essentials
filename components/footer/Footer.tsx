import React from "react";
import { H2 } from "../ui/H2";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary shadow mt-4">
      <div className="w-full mx-auto py-4 md:py-8 ">
        <div className="px-4">
          <H2 className="text-center text-[#d6d3d1] py-0 text-xl">
            Disconnect
          </H2>
        </div>
        <div className="my-4 h-[1px] w-full text-[#d6d3d173] lg:my-8" />
        <span className="block text-sm text-[#d6d3d1] text-center font-inter ">
          © 2023
          <Link href="/" className="mx-1 font-inter">
            Dev By Nate™.
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
