import { Children } from "react";

export type LinkType = { text: string; link: string };

type ListCompProps = {
  arr: LinkType[];
  format: (children: LinkType) => any;
};

const List = ({ arr, format }: ListCompProps) => {
  return Children.toArray(arr.map((item) => format(item)));
};

export default List;
