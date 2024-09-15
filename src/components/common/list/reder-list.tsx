import Link from "next/link";

import List, { LinkType } from "./list";

type RenderListProps = {
  data: LinkType[];
  title?: string;
  className?: string;
};

const RenderList = ({ title, data, className }: RenderListProps) => {
  return (
    <ul className={className}>
      {title && (
        <li className="text-lg font-semibold lg:text-xl lg:font-bold ">
          {title}
        </li>
      )}

      <List
        arr={data}
        format={(link: LinkType) => (
          <li className="mx-2 my-2">
            <Link href={link.link}>{link.text}</Link>
          </li>
        )}
      />
    </ul>
  );
};

export default RenderList;
