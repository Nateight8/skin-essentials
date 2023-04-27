import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import List from "./List";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/H2";
import { P } from "@/components/ui/P";

type Props = {};

const Left = (props: Props) => {
  return (
    <div className=" pl-4 lg:pl-10">
      <div className="grid grid-cols-5">
        <div className="w-full col-span-2  lg:col-span-1 flex items-center justify-center">
          <AspectRatio ratio={1 / 1} className="relative w-full">
            <Image
              src="/images/5.png"
              alt=""
              className="object-cover object-center"
              fill
            />
          </AspectRatio>
        </div>
        <div className=" col-start-3 lg:col-start-2 col-span-full p-4 flex flex-col justify-between">
          <div className="p-">
            <H2 className="text-lg font-semibold ">Cucumber Glow Oil</H2>
            <P className="font-medium">N25,000</P>
          </div>
          <div className="flex justify-between px-">
            <div className="">increase button</div>
            <div className="">
              <Button
                variant="ghost"
                className="capitalize transition-all delay-300 duration-500 ease-in-out"
                size="sm"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-stone-500/20 w-full my-2" />
    </div>
  );
};

export default Left;
