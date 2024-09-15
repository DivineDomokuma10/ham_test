import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  position: string;
}

const Arrow = ({ position }: Props) => {
  return (
    <div
      className={`w-12 h-12 flex z-30 ${position} items-center justify-center rounded-full bg-primary-white`}
    >
      <FaArrowRight className="transition ease-in-out -rotate-[45deg] group-hover:rotate-0" />
    </div>
  );
};

export default Arrow;
