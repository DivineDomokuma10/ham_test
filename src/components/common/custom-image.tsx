import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type TNextImage = {
  w: number | `${number}`;
  h: number | `${number}`;
};

interface Props {
  alt?: string;
  mobile: TNextImage;
  desktop: TNextImage;
  src: string | StaticImport;
}

const CustomImage = ({ alt, src, mobile, desktop }: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt || ""}
        width={mobile.w}
        height={mobile.h}
        className="lg:hidden"
      />

      <Image
        src={src}
        alt={alt || ""}
        width={desktop.w}
        height={desktop.h}
        className="hidden lg:block"
      />
    </>
  );
};

export default CustomImage;
