import { ReactNode } from "react";

import { carter_one } from "@/lib/font";

interface Props {
  children: ReactNode;
}

const SectionTag = ({ children }: Props) => {
  return (
    <div className="w-fit flex flex-col items-center justify-center animate-bounce lg:animate-none">
      <p className={`${carter_one.className} text-black text-2xl lg:text-lg`}>
        {children?.toString().toUpperCase()}
      </p>

      <span className="w-full h-1 rounded-full bg-primary-green"></span>
    </div>
  );
};

export default SectionTag;
