import React from "react";
import Image from "next/image";

import "./banner.scss";

import newsletter from "../../public/assets/svg/banner/newsletter.svg";
import savings from "../../public/assets/svg/banner/savings.svg";
import { SignUpForm } from "../signUpForm/SignUpForm";
import { StarRating } from "../starRatings/StarRating";
import { DownloadBtn } from "../buttons/downloadBtn/DownloadBtn";

interface BannerProps {
  type: string;
}

export const Banner: React.FC<BannerProps> = ({ type }) => {
  return (
    <div className="banner">
      <div className="bannerContainer">
        {type === "savings" ? (
          <div className="bannerContent">
            <div>
              <Image src={savings} alt="Animated Ratepunk coin jar" />
            </div>
            <div className="bannerContentContainer">
              <div>
                <span className="bannerSpan">New to Ratepunk?</span>
                <h1 className="bannerTitle">
                  Get $10.00 cashback when you sign up for rewards.
                </h1>
              </div>
              <div className="bannerBottomBlock">
                <SignUpForm textColor="black" />
                <div className="bannerButton">
                  <DownloadBtn type="coin" size="medium">
                    Join Ratepunk - It&apos;s Free
                  </DownloadBtn>
                </div>
                <StarRating color="black" />
              </div>
            </div>
          </div>
        ) : (
          <div className="bannerContainer">
            <div className="bannerContent newsletter">
              {" "}
              <div>
                <Image src={newsletter} alt="Animated Ratepunk envelope" />
              </div>
              <div>
                <div>
                  <span className="bannerSpan">Interested in travel?</span>
                  <h1 className="bannerTitle">
                    We&apos;ve got a free spot for you
                  </h1>
                  <p className="faqQuestionAnswerText">
                    Join thousands of travelers to be at the center of travel
                    news and deals.
                  </p>
                </div>
                <SignUpForm title={true} subscribe={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
