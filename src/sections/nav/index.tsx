import Link from "next/link";
import { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import TempLogo from "@/components/common/logo";
import List, { LinkType } from "@/components/common/list/list";

import { links } from "@/lib/constants/links";
import { SideBarContext } from "@/lib/context/sidebar-context";

const NavBar = () => {
  const { showSideBar, toggleSideBarVisibility } = useContext(SideBarContext);

  return (
    <nav className="bg-primary-white p-5 flex justify-between items-center lg:px-20 lg:py-8">
      <TempLogo variant="black" />

      <div className="lg:hidden" onClick={toggleSideBarVisibility}>
        {showSideBar ? (
          <FaTimes className="text-2xl text-primary-black hover:text-primary-green" />
        ) : (
          <FaBars className="text-2xl text-primary-black hover:text-primary-green" />
        )}
      </div>

      <ul className="hidden space-x-12 lg:flex justify-between items-center">
        <List
          arr={links}
          format={(link: LinkType) => (
            <li className="font-medium text-black hover:text-primary-purple">
              <Link href={link.link} className="text-lg">
                {link.text}
              </Link>
            </li>
          )}
        />

        <li className="bg-primary-black text-sm font-bold text-white transition py-3 px-5 rounded-full hover:scale-105 hover:bg-primary-purple">
          <Link href={""}>Get Started</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
