import { store } from "@/lib/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
