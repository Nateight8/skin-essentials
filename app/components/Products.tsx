"use client";

import { H4 } from "@/components/ui/H4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/lib/redux/features/cartSlice";
import { useAppDispatch } from "@/lib/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface Props {
//   products: Prod[];
// }

type Props = {
  products: [
    {
      id: string;
      description: string;
      price: string;
      slug: string;
      images: string;
    }
  ];
};

function Products({ products }: any) {
  const dispatch = useAppDispatch();

  return (
    <section className="my-10  w-full px-4 ">
      <div className="py-6">
        <h1 className=" text-5xl md:text-7xl pb-6 font-customFont">
          SKIN ESSENTIALS.
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-[1.5em]">
        {products.map((product: any) => {
          const { id, description, price, slug, images, name } = product;

          const url = images[0].file.url;

          return (
            <div key={id} className="w-full ">
              <Link
                href={`/product/slug/${slug}`}
                className=" max-w-72 w-full  hover:cursor-pointer"
              >
                <AspectRatio ratio={2 / 2.4} className="overflow-hidden ">
                  <Image
                    src={url}
                    alt=""
                    className="object-cover object-center select-none hover:scale-110 transition-all duration-1000 ease-in-out"
                    fill
                  />
                </AspectRatio>
              </Link>

              <div className="py-3">
                <H4 className="text-center font-normal">{name}</H4>
                <Button variant="outline" className="w-full ">
                  Add to Bag - {price}
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
