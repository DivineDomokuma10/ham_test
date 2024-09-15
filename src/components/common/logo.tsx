import Image from "next/image";

interface LogoProp {
  variant: "green" | "black";
}

const TempLogo = ({ variant }: LogoProp) => {
  return (
    <>
      {variant === "black" ? (
        <span>
          <Image
            alt="logo"
            height={0}
            width={130}
            src={"/logo_black.png"}
            className="hidden lg:block"
          />

          <Image
            alt="logo"
            height={0}
            width={100}
            className="lg:hidden"
            src={"/logo_black.png"}
          />
        </span>
      ) : (
        <span>
          <Image
            alt="logo"
            height={0}
            width={130}
            src={"/logo_green.png"}
            className="hidden lg:block"
          />

          <Image
            alt="logo"
            height={0}
            width={100}
            className="lg:hidden"
            src={"/logo_green.png"}
          />
        </span>
      )}
    </>
  );
};

export default TempLogo;
