import React from "react";

type Props = {
  children: String;
};

function H4({ children }: Props) {
  return (
    <h4 className="capitalize font-inter font-normal text-center text-base pb-4">
      {children}
    </h4>
  );
}

export default H4;
