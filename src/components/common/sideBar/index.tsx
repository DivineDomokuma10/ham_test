import Link from "next/link";
import { motion } from "framer-motion";
import React, { useContext } from "react";

import List, { LinkType } from "../list/list";
import { links } from "@/lib/constants/links";
import { SideBarContext } from "@/lib/context/sidebar-context";

export const getAnimationParam = () => ({
  initial: { x: -50 },
  animate: { x: 0 },
  exit: { x: -1000 },
  transition: { type: "spring", bounce: 0.7 },
});

const SideBar = () => {
  const animateParams = getAnimationParam();

  const { toggleSideBarVisibility } = useContext(SideBarContext);

  return (
    <motion.header
      {...animateParams}
      onClick={toggleSideBarVisibility}
      className="w-dvw h-dvh fixed z-[100] lg:hidden"
    >
      <nav className=" w-11/12 h-[72%] flex flex-col justify-between px-5 py-7 m-auto bg-white border-2 shadow-2xl rounded-2xl">
        <ul className="flex flex-col justify-between items-center space-y-5">
          <List
            arr={links}
            format={(link: LinkType) => (
              <li className="group w-full py-3 text-center rounded-3xl transition hover:scale-[1.02] hover:bg-primary-purple">
                <Link
                  href={link.link}
                  className="text-xl font-medium transition group-hover:text-primary-white"
                >
                  {link.text.toUpperCase()}
                </Link>
              </li>
            )}
            rounded-3xl
          />
        </ul>

        <button className="bg-primary-black font-bold text-white transition p-4 rounded-3xl hover:scale-[1.02] hover:text-black hover:bg-primary-green">
          <Link href={""}>Get Started</Link>
        </button>
      </nav>
    </motion.header>
  );
};

export default SideBar;
