import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  const socials = [
    {
      icon: <FaX />,
      link: "",
    },
    {
      icon: <FaInstagram />,
      link: "",
    },
    {
      icon: <FaLinkedin />,
      link: "",
    },
    {
      icon: <FaFacebook />,
      link: "",
    },
  ];

  return (
    <>
      <ul className="flex lg:flex-start ">
        {socials.map(
          (
            item: { link: any; icon: any },
            index: React.Key | null | undefined
          ) => (
            <li key={index} className="mx-2 my-2 text-xl">
              <Link href={item.link}>{item.icon}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Social;
