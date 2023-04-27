"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Right from "./Right";
import Left from "./Left";

const Bag = () => {
  return (
    <>
      <main className="min-h-screen">
        <div className=" ">
          <div className="grid md:grid-cols-2 w-full gap-x-px  bg-stone-500/20 my-8 ">
            <ScrollArea className="bg-background h-[70vh] py-2 ">
              {[1, 2, 3, 4, 5, 6, 6, 7].map((item) => (
                <Left key={item} />
              ))}
            </ScrollArea>
            <div className=" py-6 bg-background">
              <Right />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
