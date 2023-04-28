"use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Twirl as Hamburger } from "hamburger-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import { Button } from "../ui/button";
// import MobileNav from "./Mobilenav";
import { ShoppingBag } from "lucide-react";
// import SideNav from "./MockNav";
// import { H2 } from "../ui/H2";

// type Props = {};

// function Navbar({}: Props) {
//   const [isOpen, setOpen] = useState(false);

//   const toggleNav = () => {
//     setOpen(!isOpen);
//   };
//   return (
//     <>
//       <nav className="bg-stone-400  py-2 px-2  z-10 relative">
//         <div className="flex relative z-40 w-full justify-between items-center">
//           <>
//             <ul className="">
//               <li className="uppercase px-2">
//                 <Link
//                   href="/"
//                   className="tet text-sm font-inter font-medium text-primary uppercase"
//                 >
//                   Home
//                 </Link>
//               </li>
//             </ul>
//           </>

//           <div className=" relative flex items-center">
//             <Button
//               variant="ghost"
//               className={`hover:bg-transparent delay-300 p-0  duration-1000 ease-in-out`}
//             >
//               <ShoppingBag size={36} color="#32323D" />
//               <span className="text-xl text-primary font-inter font-bold">
//                 1
//               </span>
//             </Button>
//           </div>
//           <Button
//             variant="ghost"
//             className={`z-40 hover:bg-transparent delay-300 duration-1000 ease-in-out ${
//               isOpen ? "border border-stone-100" : ""
//             }`}
//           >
//             <Hamburger
//               color={`${isOpen ? "rgb(245 245 244)" : "#32323D"} `}
//               toggled={isOpen}
//               toggle={setOpen}
//               rounded
//             />
//           </Button>
//         </div>
//       </nav>
//       <MobileNav toggleNav={toggleNav} isOpen={isOpen} />
//       {/* <SideNav /> */}
//     </>
//   );
// }

// export default Navbar;

import Link from "next/link";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import MobileNav from "./Mobilenav";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-stone-400  py-2 px-2  z-50">
        <div className="flex w-full justify-between items-center">
          {/* <ul className="">
            <li className="uppercase px-2">
              <Link
                href="/"
                className="tet text-sm font-inter font-medium text-primary uppercase"
              >
                Home
              </Link>
            </li>
          </ul> */}
          <Hamburger
            color={`${isOpen ? "rgb(245 245 244)" : "#32323D"} `}
            toggled={isOpen}
            toggle={setOpen}
            rounded
            size={24}
          />
          <div className="z-40 flex items-center">
            <Button
              variant="ghost"
              className={`hover:bg-transparent delay-300 p-0  duration-1000 ease-in-out `}
            >
              <ShoppingBag size={24} color="#32323D" />
              <span className="text-xl text-primary font-inter font-bold">
                1
              </span>
            </Button>
          </div>
        </div>
      </nav>
      <MobileNav toggleNav={toggleNav} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
