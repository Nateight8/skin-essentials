"use client";
import { H2 } from "@/components/ui/H2";
import { H4 } from "@/components/ui/H4";
import { P } from "@/components/ui/P";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const Details = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* grid-cols-2 */}
      <div className="">
        <div className="grid md:grid-cols-2 ">
          <div className="flex items-center justify-center w-full  bg-stone-200/10">
            <div className=" w-full sm:w-96">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/images/3.png"
                  alt=""
                  className="object-cover object-bottom "
                  fill
                />
              </AspectRatio>
            </div>
          </div>
          {/* right side start */}
          <div className="px-4 sm:px-6 py-6">
            <div className="">
              <H2 className="font-inter">Cucumber Glow Oil</H2>
              <H4 className="">N24,000</H4>
            </div>
            <div className="h-px bg-stone-500/20 w-full my-4" />
            <ScrollArea className=" h-[24ch] w-full max-w-xl mb-4">
              <div className="">
                <P>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ad sed, aut, ipsam esse nostrum tempora sequi
                  consequatur praesentium quibusdam deleniti, sunt obcaecati
                  non. Similique facilis itaque repellat sint totam.
                </P>
                <P>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ad sed, aut, ipsam esse nostrum tempora sequi
                  consequatur praesentium quibusdam deleniti, sunt obcaecati
                  non. Similique facilis itaque repellat sint totam.
                </P>
                <P>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ad sed, aut, ipsam esse nostrum tempora sequi
                  consequatur praesentium quibusdam deleniti, sunt obcaecati
                  non. Similique facilis itaque repellat sint totam.
                </P>
                <P>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ad sed, aut, ipsam esse nostrum tempora sequi
                  consequatur praesentium quibusdam deleniti, sunt obcaecati
                  non. Similique facilis itaque repellat sint totam.
                </P>
              </div>
            </ScrollArea>

            <div className="h-[0.5px] bg-stone-500/20 w-full my-4" />
            <div className="w-full">
              <Button className="w-full ">Add to bag</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
