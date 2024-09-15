"use client";
import TempLogo from "@/components/common/logo";
import Social from "@/components/common/social";
import RenderList from "@/components/common/list/reder-list";

import { company, contacts, explore, legal } from "@/lib/constants/links";
import { courtesy, footerWelcomeText } from "../../lib/constants/captions";

const Footer = () => {
  return (
    <footer className=" bg-primary-black text-white px-6 py-3 lg:px-20">
      <main className="flex flex-col lg:flex-row">
        <section className="w-full  flex flex-col items-center py-4 lg:w-1/2 lg:items-start">
          <TempLogo variant="green" />

          <p className="text-sm py-4 text-center lg:w-4/5 lg:text-start">
            {footerWelcomeText}
          </p>

          <Social />
        </section>

        <section className="w-full grid grid-cols-2 lg:flex lg:justify-between lg:w-1/2 lg:py-4">
          <RenderList data={explore} title="Explore" />
          <RenderList data={company} title="Company" />
          <RenderList data={contacts} title="Contact" className="my-5" />
        </section>
      </main>

      <hr />
      <div className="flex items-center flex-col my-1 lg:flex-row lg:justify-between">
        <p className="text-center lg:text-start">{courtesy}</p>
        <RenderList
          data={legal}
          className="mx-2 my-2 flex flex-col items-center lg:flex-row lg:items-baseline "
        />
      </div>
    </footer>
  );
};

export default Footer;
