"use client";
import { ReactNode, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavBar from "./nav";
import Footer from "./footer";

import SideBar from "@/components/common/sideBar";
import SideBarContextProvider from "@/lib/context/sidebar-context";
import { FaBedPulse } from "react-icons/fa6";

type CustomLayoutProps = {
  children: ReactNode;
};

const CustomLayout = ({ children }: CustomLayoutProps) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleSideBarVisibility = (): void => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <SideBarContextProvider value={{ showSideBar, toggleSideBarVisibility }}>
      <NavBar />
      <AnimatePresence>{showSideBar && <SideBar />}</AnimatePresence>
      {children}
      <Footer />
    </SideBarContextProvider>
  );
};

export default CustomLayout;
