import { DownloadBtn } from "@/components/buttons/downloadBtn/DownloadBtn";
import { SignUpForm } from "@/components/signUpForm/SignUpForm";
import { StarRating } from "@/components/starRatings/StarRating";
import React from "react";

import "./heroSection.scss";

interface HeroSectionProps {
  browser: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ browser }) => {
  const sentence = "Get lowest prices, cashback, rebooking hack & more";
  return (
    <section className="heroSection">
      <div className="content-container">
        <div>
          <h1 className="heroSectionTitle">
            Smarter Way To <span>Travel & Save</span> $$$
          </h1>
          <h2 className="heroSectionSentence">{sentence.toUpperCase()}</h2>
        </div>
        <SignUpForm />
        <StarRating color="white" />
        <div className="downloadBtn">
          <DownloadBtn browser={browser} size="big">
            Download Now - It&apos;s Free
          </DownloadBtn>
        </div>
      </div>
    </section>
  );
};
