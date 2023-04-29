"use client";
import { H2 } from "@/components/ui/H2";
import { H4 } from "@/components/ui/H4";
import { P } from "@/components/ui/P";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { addProduct } from "@/lib/redux/features/cartSlice";
import { useAppDispatch } from "@/lib/redux/store";

import Image from "next/image";

const Details = ({}) => {
  const dispatch = useAppDispatch();
  // console.log(product);

  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* grid-cols-2 */}
      <div className="">
        <div className="grid md:grid-cols-2 ">
          <div className="flex items-center justify-center w-full   bg-stone-200/10">
            <div className=" w-full h-[75vh] md:h-[50vh] sm:w-96 relative">
              <Image
                src="/images/3.png"
                alt=""
                className="object-cover object-bottom "
                fill
              />
            </div>
          </div>
          {/* right side start */}
          <div className="px-4 sm:px-6 py-6">
            <div className="">
              <H4 className="bg-2 p-0">N24,000</H4>
              <H2 className="font-inter pb-2">Cucumber Glow Oil</H2>
            </div>
            <div className="h-px bg-stone-500/20 w-full my-4" />
            <P className="text-lg uppercase">Details</P>
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
              <Button
                onClick={() => {
                  dispatch(addProduct({ id: "", details: "" }));
                }}
                className="w-full "
              >
                Add to bag - N25,000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;

// export async function getStaticProps({ params }) {
//   const swellProduct = await Swell.products.get(params.slug);
//   return {
//     props: {
//       product: swellProduct,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const swellProducts = await Swell.products.list();
//   let fullPaths = [];
//   for (let product of swellProducts.results) {
//     fullPaths.push({ params: { slug: product.id } });
//   }

//   return {
//     paths: fullPaths,
//     fallback: "blocking",
//   };
// }
