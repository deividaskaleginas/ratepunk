import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import "./featuresSection.scss";

import CASHBACK from "../../../public/assets/images/features/cashback.webp";
import PRICE_COMPARISON from "../../../public/assets/images/features/price-comparison.webp";
import PRICE_MONITORING from "../../../public/assets/images/features/price-monitoring.webp";
import RATINGS from "../../../public/assets/images/features/ratings.webp";
import REBOOKING from "../../../public/assets/images/features/rebooking.webp";
import RP_ICON from "../../../public/assets/svg/rp-coin.svg";
import { FeaturesContentData } from "@/types/dataTypes";
import { DownloadBtn } from "@/components/buttons/downloadBtn/DownloadBtn";
import { TriangleBackground } from "@/components/triangleBackground/TriangleBackground";

interface FeatureSectionProps {
  browser: string;
}

export enum FEATURE {
  CASHBACK = "cashback",
  REBOOKING = "rebooking",
  RATINGS = "ratings",
  PRICE_MONITORING = "priceMonitoring",
  PRICE_COMPARISON = "priceComparison",
}

const FEATURES_CONTENT: FeaturesContentData[] = [
  {
    title: "Price comparison",
    text: "Ratepunk will automatically run a price comparison and find you the best rate on the market.",
    icon: RP_ICON,
    className: FEATURE.PRICE_COMPARISON,
  },
  {
    title: "Cashback",
    text: "Every time you book with Cashback activated, we will award you RatePunk coins.",
    icon: RP_ICON,
    className: FEATURE.CASHBACK,
  },
  {
    title: "Rebooking",
    text: "We'll notify you if the price drops on your booking so you can rebook it cheaper and save more.",
    icon: RP_ICON,
    className: FEATURE.REBOOKING,
  },
  {
    title: "Ratings",
    text: "We'll help you to choose hotels easily according to their ratings and customer reviews.",
    icon: RP_ICON,
    className: FEATURE.RATINGS,
  },
  {
    title: "Price monitoring",
    text: "Ratepunk will run a price dynamics and let you track hotel price changes.",
    icon: RP_ICON,
    className: FEATURE.PRICE_MONITORING,
  },
];

export const FeaturesSection: React.FC<FeatureSectionProps> = ({ browser }) => {
  const [selected, setSelected] = useState<FEATURE>(FEATURE.PRICE_COMPARISON);

  const features: {
    [key in FEATURE]: { clasName: string; image: StaticImageData };
  } = {
    [FEATURE.CASHBACK]: {
      clasName: "features-content green",
      image: CASHBACK,
    },
    [FEATURE.REBOOKING]: {
      clasName: "features-content orangeRed",
      image: REBOOKING,
    },
    [FEATURE.RATINGS]: {
      clasName: "features-content yellow",
      image: RATINGS,
    },
    [FEATURE.PRICE_MONITORING]: {
      clasName: "features-content orange",
      image: PRICE_MONITORING,
    },
    [FEATURE.PRICE_COMPARISON]: {
      clasName: "features-content",
      image: PRICE_COMPARISON,
    },
  };

  return (
    <section className="features">
      <div className="features-container">
        <div className="titleBlock">
          {" "}
          <h2 className="featuresSextionTitle">
            <span className="sextionTextBlue">#1 Travel hack</span> to meet all
            your travel needs
          </h2>
        </div>

        <div className={features[selected].clasName}>
          <div className="image-block">
            <Image src={features[selected].image} alt="test" />
          </div>
          <div className="content-block">
            {FEATURES_CONTENT.map(({ title, text, icon, className }, index) => {
              return (
                <div
                  className={
                    className === selected
                      ? `${className} block active`
                      : `${className} block`
                  }
                  key={index}
                  onClick={() => setSelected(className)}
                >
                  <div className="iconBlock">
                    <Image
                      src={icon}
                      alt="Ratepunk coin icon"
                      height={31}
                      width={26}
                    />
                  </div>
                  <div className="textBlock">
                    <h4 className="featureTitle">{title}</h4>
                    <p className="featureText">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="titleBlock smallText sectionBottom">
          <p>
            Ratepunk is designed to help travelers not only save on hotels but
            also help them find the information they&apos;re looking for easily
            without a hassle.
            <b>It is a FREE tool and a MUST-HAVE for every traveler!</b>
          </p>
          <DownloadBtn size="mediumOrange" browser={browser}>
            Get Ratepunk - It&apos;s Free
          </DownloadBtn>
        </div>
      </div>
    </section>
  );
};
