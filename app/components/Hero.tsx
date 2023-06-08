import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-[90vh] relative w-full  border-y border-[#32323d52]">
      <Image src="/images/hero.jpg" fill alt="" className="object-cover" />
    </div>
  );
}

export default Hero;
