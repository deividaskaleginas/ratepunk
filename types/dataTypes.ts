import { StaticImageData } from "next/image";

export type NavLinksData = {
  name: string;
  link: string;
};

export type MediaData = {
  iconData: StaticImageData;
  name: string;
  href: string;
};

export type FeaturesContentData = {
  title: string;
  text: string;
  icon: StaticImageData;
  className: string;
  // onClick: React.MouseEventHandler<HTMLDivElement>;
};
