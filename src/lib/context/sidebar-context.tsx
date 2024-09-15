"use client";
import React, { ReactNode, createContext } from "react";

type TSideBarContext = {
  showSideBar: boolean;
  toggleSideBarVisibility(): void;
};

interface Props {
  children: ReactNode;
  value: TSideBarContext;
}

export const SideBarContext = createContext<TSideBarContext>(
  {} as TSideBarContext
);

const SideBarContextProvider = ({ value, children }: Props) => {
  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
