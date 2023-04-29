"use client";

import { H4 } from "@/components/ui/H4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/lib/redux/features/cartSlice";
import { useAppDispatch } from "@/lib/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Products({}: Props) {
  const dispatch = useAppDispatch();

  // const handleBag = (payload) => {
  //   dispatch(addProduct({ payload }));
  // };
  const products = [
    { id: "1", detail: "number one" },
    { id: "2", detail: "number two" },
    { id: "3", detail: "number three" },
    { id: "4", detail: "number four" },
  ];

  return (
    <section className="my-10  w-full px-4 ">
      <div className="py-6">
        <h1 className=" text-5xl md:text-7xl pb-6 font-customFont">
          SKIN ESSENTIALS.
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-[1.5em]">
        {products.map((item) => {
          return (
            <div key={item.id} className="w-full ">
              <Link
                href={`/product/detail/${item.id}`}
                className=" max-w-72 w-full  hover:cursor-pointer"
              >
                <AspectRatio ratio={2 / 2.4} className="overflow-hidden ">
                  <Image
                    src="/images/5.png"
                    alt=""
                    className="object-cover select-none hover:scale-110 transition-all duration-1000 ease-in-out"
                    fill
                  />
                </AspectRatio>
              </Link>

              <div className="py-3">
                <H4 className="text-center font-normal">Cucumber glow oil</H4>
                <Button
                  onClick={() => {
                    dispatch(addProduct(item));
                  }}
                  variant="outline"
                  className="w-full "
                >
                  Add to Bag - N25000
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10">
        <Button className="w-full">see more products</Button>
      </div>
    </section>
  );
}

export default Products;
