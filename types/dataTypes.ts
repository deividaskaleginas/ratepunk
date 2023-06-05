import { FEATURE } from "@/components/sections/featuresSection/FeaturesSection";
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
  className: FEATURE;
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

export type FAQQuestionsData = {
  question: string;
  answer: string;
  icon: StaticImageData;
};

export type ReviewData = {
  user: string;
  browser: string;
  rating: number;
  review: string;
};
