import { SignUpForm } from "@/components/signUpForm/SignUpForm";
import { StarRating } from "@/components/starRatings/StarRating";
import React from "react";

import "./heroSection.scss";

export const HeroSection: React.FC = () => {
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
        <div>
          <SignUpForm />
        </div>
        <StarRating />
      </div>
    </section>
  );
};
