import React from "react";
import Image from "next/image";

import "./providersSection.scss";

//Providers background
import bookingBack from "../../../public/assets/images/providersBackground/1.webp";
import expediaBack from "../../../public/assets/images/providersBackground/2.webp";
import hotelsBack from "../../../public/assets/images/providersBackground/3.webp";
import agodaBack from "../../../public/assets/images/providersBackground/4.webp";
import pricelineBack from "../../../public/assets/images/providersBackground/5.webp";
import wotifBack from "../../../public/assets/images/providersBackground/6.webp";
import lastminuteBack from "../../../public/assets/images/providersBackground/7.webp";
import tripBack from "../../../public/assets/images/providersBackground/8.webp";
import travelocityBack from "../../../public/assets/images/providersBackground/9.webp";
import rbtzBack from "../../../public/assets/images/providersBackground/10.webp";
import marriottBack from "../../../public/assets/images/providersBackground/11.webp";

//Providers SVGS

import agoda from "../../../public/assets/svg/providers/agoda.svg";
import booking from "../../../public/assets/svg/providers/booking.svg";
import expedia from "../../../public/assets/svg/providers/expedia.svg";
import hotels from "../../../public/assets/svg/providers/hotels.svg";
import lasminuteUA from "../../../public/assets/svg/providers/lastminuteAU.svg";
import marriott from "../../../public/assets/svg/providers/marriott.svg";
import orbitz from "../../../public/assets/svg/providers/orbitz.svg";
import priceline from "../../../public/assets/svg/providers/priceline.svg";
import travelocity from "../../../public/assets/svg/providers/travelocity.svg";
import trip from "../../../public/assets/svg/providers/trip.svg";
import wotif from "../../../public/assets/svg/providers/wotif.svg";

//Ratepunk icon

import ratepunk from "../../../public/assets/svg/rp-coin.svg";
import { ProvidersContentData } from "@/types/dataTypes";

//TODO: Add Alt text

const PROVIDERS: ProvidersContentData[] = [
  {
    image: expediaBack,
    svg: expedia,
    rpIcon: ratepunk,
    offer: "Up to 7% cashback",
  },
  {
    image: hotelsBack,
    svg: hotels,
    rpIcon: ratepunk,
    offer: "Up to 7% cashback",
  },
  {
    image: agodaBack,
    svg: agoda,
    rpIcon: ratepunk,
    offer: "Coming soon!",
  },
  {
    image: bookingBack,
    svg: booking,
  },
  {
    image: pricelineBack,
    svg: priceline,
  },
  {
    image: wotifBack,
    svg: wotif,
  },
  {
    image: lastminuteBack,
    svg: lasminuteUA,
  },
  {
    image: tripBack,
    svg: trip,
  },
  {
    image: travelocityBack,
    svg: travelocity,
  },
  {
    image: rbtzBack,
    svg: orbitz,
  },
  {
    image: marriottBack,
    svg: marriott,
  },
];

export const ProvidersSection: React.FC = () => {
  return (
    <section className="providers">
      <div className="providers-container">
        <div className="textBlock">
          <h2 className="providersTitle">
            Save more on your favorite booking sites
          </h2>
          <p className="providerTitleText">
            Book hotels as usual and get rewarded for your stays. Up to 7% goes
            back in Ratepunk coins.
          </p>
        </div>
        <div className="providers-block">
          {PROVIDERS.map(({ image, svg, rpIcon, offer }, index) => {
            return (
              <div className="provider-block" key={index}>
                <div className="provider-block-container">
                  <Image src={image} alt="test" className="providerBack" />
                  {rpIcon ? (
                    <>
                      <div className="offer">
                        <Image src={rpIcon} alt="test" />{" "}
                        <span className="providerOfferText">{offer}</span>
                      </div>{" "}
                      <div className="provider">
                        <Image src={svg} alt="test" />
                      </div>
                    </>
                  ) : (
                    <div className="provider">
                      <Image src={svg} alt="test" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="more-providers">
            <h2 className="providersTitle">+8 more</h2>
            <p className="providerTitleText">booking sites</p>
          </div>
        </div>
      </div>
    </section>
  );
};
