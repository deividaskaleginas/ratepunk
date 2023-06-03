import React, { useState } from "react";
import Image from "next/image";

import "./featuresSection.scss";

import cashback from "../../../public/assets/images/features/cashback.webp";
import priceComparison from "../../../public/assets/images/features/price-comparison.webp";
import priceMonitoring from "../../../public/assets/images/features/price-monitoring.webp";
import ratings from "../../../public/assets/images/features/ratings.webp";
import rebooking from "../../../public/assets/images/features/rebooking.webp";
import rpIcon from "../../../public/assets/svg/rp-coin.svg";
import { FeaturesContentData } from "@/types/dataTypes";

const FEATURES_CONTENT: FeaturesContentData[] = [
  {
    title: "Price comparison",
    text: "Ratepunk will automatically run a price comparison and find you the best rate on the market.",
    icon: rpIcon,
    className: "priceComparison",
  },
  {
    title: "Cashback",
    text: "Every time you book with Cashback activated, we will award you RatePunk coins.",
    icon: rpIcon,
    className: "cashback",
  },
  {
    title: "Rebooking",
    text: "We'll notify you if the price drops on your booking so you can rebook it cheaper and save more.",
    icon: rpIcon,
    className: "rebooking",
  },
  {
    title: "Ratings",
    text: "We'll help you to choose hotels easily according to their ratings and customer reviews.",
    icon: rpIcon,
    className: "ratings",
  },
  {
    title: "Price monitoring",
    text: "Ratepunk will run a price dynamics and let you track hotel price changes.",
    icon: rpIcon,
    className: "priceMonitoring",
  },
];

export const FeaturesSection: React.FC = () => {
  const [selected, setSelected] = useState("priceComparison");
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

        <div
          className={
            selected === "cashback"
              ? "features-content green"
              : selected === "rebooking"
              ? "features-content orangeRed"
              : selected === "ratings"
              ? "features-content yellow"
              : selected === "priceMonitoring"
              ? "features-content orange"
              : "features-content"
          }
        >
          <div className="image-block">
            <Image
              src={
                selected === "cashback"
                  ? cashback
                  : selected === "rebooking"
                  ? rebooking
                  : selected === "ratings"
                  ? ratings
                  : selected === "priceMonitoring"
                  ? priceMonitoring
                  : priceComparison
              }
              alt="test"
            />
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
        <div className="titleBlock smallText">
          <p>
            Ratepunk is designed to help travelers not only save on hotels but
            also help them find the information they&apos;re looking for easily
            without a hassle.
            <b>It is a FREE tool and a MUST-HAVE for every traveler!</b>
          </p>
        </div>
      </div>
    </section>
  );
};
