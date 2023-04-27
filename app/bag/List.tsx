import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function List({ children }: Props) {
  return (
    <>
      <div className="flex justify-between pl-4 py-4 pr-4 lg:pr-10">
        {children}
      </div>{" "}
      <div className="h-px bg-stone-500/20 w-full my-2" />
    </>
  );
}

export default List;
