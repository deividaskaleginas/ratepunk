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
};

export type ProvidersContentData = {
  image: StaticImageData;
  svg: StaticImageData;
  rpIcon?: StaticImageData;
  offer?: string;
};

export type HowItWorksContentData = {
  image: StaticImageData;
  number: string;
  title: string;
  description: string;
};
