"use client";
import React, { useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";

interface Props {
  toggleNav: () => void;
  isOpen: boolean;
}

const MobileNav = ({ toggleNav, isOpen }: Props) => {
  const navlinks = [
    { id: "1", url: "/", label: "home" },
    { id: "2", url: "/shop", label: "shop" },
    { id: "3", url: "/about", label: "about" },
  ];

  return (
    <div className="" aria-modal="true" role="dialog">
      <div
        className={`absolute top-0 left-0 h-screen py-10 z-20 bg-stone-300 flex flex-col max-w-xs w-full focus:outline-none transform transition ease-in-out duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-10 mt-6">
          <ul className="spa space-y-6">
            {navlinks.map(({ id, url, label }) => (
              <li key={id} className="uppercase px-2">
                <Link
                  href={url}
                  className="tet text-3xl font-inter font-medium text-primary uppercase"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={` bg-slate-900 opacity-75 fixed overflow-y-hidden top-0 left-0 h-screen w-screen z-10 duration-500 delay-100 ease-in-out ${
          isOpen ? "translate-x-0 " : "-translate-x-full "
        }`}
      ></div>
    </div>
  );
};

export default MobileNav;
