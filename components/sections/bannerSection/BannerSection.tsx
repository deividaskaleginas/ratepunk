import { Banner } from "@/components/banner/Banner";
import React from "react";

import "./bannerSection.scss";

interface BannerSectionProps {
  type: string;
  bgColor: "blue" | "light";
}

export const BannerSection: React.FC<BannerSectionProps> = ({
  type,
  bgColor,
}) => {
  return (
    <section className={`bannerSection ${bgColor}`}>
      <Banner type={type} />
    </section>
  );
};
