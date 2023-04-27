import Image from "next/image";
import Products from "./components/Products";
import Head from "next/head";
import MobileNav from "@/components/navbar/Mobilenav";

export default function Home() {
  return (
    <>
      <main>
        <Products />
      </main>
    </>
  );
}
