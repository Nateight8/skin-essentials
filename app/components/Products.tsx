"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

function Products({}: Props) {
  return (
    <section className="my-10  w-full px-4 ">
      <div className="py-6">
        <h1 className="text-7xl pb-6 font-customFont">SKIN ESSENTIALS.</h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-[1.5em]">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div key={item} className="w-full">
              <div className=" max-w-72 w-full  hover:cursor-pointer overflow-hidden ">
                <AspectRatio ratio={2 / 3}>
                  <Image
                    src="/images/3.png"
                    alt=""
                    className="object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
                    fill
                  />
                </AspectRatio>
              </div>

              <div className="py-3">
                <h4 className="capitalize text-center text-base pb-4">
                  Cucumber glow oil
                </h4>
                <Button variant="outline" className="w-full">
                  Add to Bag - N25000
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10">
        <Button className="w-full ">see more products</Button>
      </div>
    </section>
  );
}

export default Products;
