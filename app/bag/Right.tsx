import React from "react";
import List from "./List";
import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/P";
type Props = {};

function Right({}: Props) {
  return (
    <>
      <List>
        <P className="font-medium">Subtotal</P>
        <P className="font-medium">N25,000</P>
      </List>

      <List>
        <P className="font-medium">Estimated Delivery</P>
        <P className="font-medium">N25,000</P>
      </List>

      <List>
        <P className="font-medium">Total</P>
        <P className="font-medium">N25,000</P>
      </List>

      <List>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            className="w-full col-span-full sm:col-span-1 md:col-span-full lg:col-span-1"
            variant="outline"
          >
            Continue shopping
          </Button>
          <Button className="w-full col-span-full sm:col-span-1 md:col-span-full lg:col-span-1">
            Checkout
          </Button>
        </div>
      </List>
    </>
  );
}

export default Right;
