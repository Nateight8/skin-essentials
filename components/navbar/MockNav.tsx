import React, { useState } from "react";

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75"
        onClick={toggleNav}
      ></div> */}
      <div
        className={`relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none transform transition ease-in-out duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            onClick={toggleNav}
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close sidebar</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation content */}
        {/* <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <nav className="px-2 space-y-1"></nav>
        </div> */}
      </div>
      {/* <div className="flex-shrink-0 w-14" aria-hidden="true"></div> */}
    </>
  );
};

export default SideNav;
