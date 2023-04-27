import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="bg-stone-300 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center"></div>
        </div>
      </div>
      <nav className="bg-stone-400 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
