import Image from "next/image";
import Products from "./components/Products";
import Head from "next/head";
import MobileNav from "@/components/navbar/Mobilenav";
import { getProducts } from "@/lib/swell/products";

export default async function Home() {
  const { results: products } = await getProducts({ page: 1 });

  console.log(products);

  return (
    <>
      <main>
        <Products products={products} />
      </main>
    </>
  );
}
