import { HowItWorksContentData } from "@/types/dataTypes";
import React from "react";

import Image from "next/image";

import "./howItWorks.scss";

import firsStepImg from "../../../public/assets/images/howItWorks/01.webp";
import secoundStepImg from "../../../public/assets/images/howItWorks/02.webp";
import thirdStepImg from "../../../public/assets/images/howItWorks/03.webp";
import { DownloadBtn } from "@/components/buttons/downloadBtn/DownloadBtn";

const HOW_IT_WORKS: HowItWorksContentData[] = [
  {
    image: firsStepImg,
    number: "01",
    title: "Get Ratepunk for Free",
    description:
      "It just takes a few clicks to add Ratepunk extension to your browser. It's 100% FREE!",
  },
  {
    image: secoundStepImg,
    number: "02",
    title: "Look for hotels as you normally do",
    description:
      "We’ll automatically scan for the best rates when you browse on Booking.com, Expedia, Hotels.com, Agoda or Priceline.",
  },
  {
    image: thirdStepImg,
    number: "03",
    title: "Save on every hotel online",
    description:
      "We'll show you a price comparison list of the same hotel for your selected dates. Ensure to get the best price possible at any time!",
  },
];

interface HowItWorksSectionProps {
  browser: string;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  browser,
}) => {
  return (
    <section className="howItWorks">
      <div className="howItWorksContainer">
        <div className="textBlock">
          <h2 className="providersTitle">Start saving in a few clicks</h2>
        </div>
        {HOW_IT_WORKS.map(({ image, number, title, description }, index) => {
          return (
            <div key={index} className="contentContainer">
              <div className="imageBlock">
                <Image src={image} alt="Desktop print screen animation" />
              </div>
              <div className="contentBlock">
                <div className="contentAndButton">
                  <div>
                    {" "}
                    <h2 className="howItWorksSectionNumbers">{number}</h2>
                    <h3 className="howItWorksTitle">{title}</h3>
                    <p className="howItWorksParagraph">{description}</p>
                  </div>

                  <div>
                    <DownloadBtn browser={browser} size="medium">
                      It&apos;s Free - Add to {browser}
                    </DownloadBtn>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
