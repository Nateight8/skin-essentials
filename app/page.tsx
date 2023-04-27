import Image from "next/image";
import { Montserrat, Poiret_One } from "next/font/google";
import Products from "./components/Products";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const customFont = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--customfont",
});

const montese = Montserrat({ subsets: ["latin"], variable: "--inter" });

export default function Home() {
  return (
    <>
      <main className={`${customFont.variable} ${montese.variable}`}>
        <Products />
      </main>
    </>
  );
}
