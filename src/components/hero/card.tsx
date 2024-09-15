import Image from "next/image";

import Arrow from "./arrow";

import AnimatorWrapper, {
  AnimatorWrapperProps,
} from "../common/animate-in-view";

type BgColor = "purple" | "green";

interface Props extends AnimatorWrapperProps {
  image?: string;
  bgColor?: BgColor;
  hasFullWidth?: boolean;
}

const getColor = (color: BgColor): string => {
  if (color === "green") {
    return "bg-primary-green";
  }

  return "bg-primary-purple";
};

const Card = ({
  type,
  delay,
  image,
  bgColor,
  children,
  hasFullWidth,
}: Props) => {
  return hasFullWidth ? (
    <AnimatorWrapper
      type={type}
      delay={delay}
      classStyle="w-full h-[400px] lg:w-1/3 lg:h-[400px]"
    >
      <div className="w-full h-full group overflow-hidden shadow-md relative rounded-3xl bg-primary-white">
        <Image
          alt=""
          width={400}
          height={400}
          src={image as string}
          className="w-full h-full object-fill transition group-hover:scale-125"
        />
        <div className="w-full h-full p-5 flex hero-gradient-card flex-col justify-end">
          <Arrow position="fixed right-3 top-3" />
          {children}
        </div>
      </div>
    </AnimatorWrapper>
  ) : (
    <AnimatorWrapper classStyle="w-full lg:h-1/2" type={type} delay={delay}>
      <div
        className={`${getColor(
          bgColor as BgColor
        )} group h-full relative p-5 rounded-3xl lg:w-full`}
      >
        <Arrow position="absolute right-3 bottom-3" />
        {children}
      </div>
    </AnimatorWrapper>
  );
};

export default Card;
