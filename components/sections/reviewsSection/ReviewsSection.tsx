import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import "./reviewSection.scss";

import star from "../../../public/assets/svg/goldStar.svg";
import quotes from "../../../public/assets/svg/quotes.svg";
import { ReviewData } from "@/types/dataTypes";

const REVIEWS: ReviewData[] = [
  {
    user: "Kamile",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Elena",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Ieva",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Urte",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Nijole",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Jolanta",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Grazina",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
  {
    user: "Danguole",
    browser: "Chrome Review",
    rating: 5,
    review:
      "An awesome tool to have at hand - it saved me 50 euros the last time I booked a hotel. What not to like about it? Plus the interface is very user friendly.",
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="reviewSection">
      <div className="reviewSectionContainer">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {REVIEWS.map(({ user, browser, rating, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="reviewCard">
                  <div className="reviewContentBlock">
                    <div className="userData">
                      <span className="reviewUsername">{user}</span>
                      <p className="reviewUserBrowser">{browser}</p>
                      <div className="starsBlock">
                        {[...Array(rating)].map((el, index) => {
                          return (
                            <div key={index}>
                              <Image src={star} alt="Golden star vector" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="reviewData">
                      <p className="userReviewText">{review}</p>
                    </div>
                  </div>
                  <div className="svgBlock">
                    <Image src={quotes} alt="Quotes vector" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="reviewCard">
          <div className="reviewContentBlock">
            <div className="userData">
              <span className="reviewUsername">Ieva</span>
              <p className="reviewUserBrowser">Chrome Review</p>
              <div className="starsBlock">
                {[...Array(5)].map((el, index) => {
                  return (
                    <div key={index}>
                      <Image src={star} alt="Golden star vector" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="reviewData">
              <p className="userReviewText">
                An awesome tool to have at hand - it saved me 50 euros the last
                time I booked a hotel. What not to like about it? Plus the
                interface is very user friendly.
              </p>
            </div>
          </div>
          <div className="svgBlock">
            <Image src={quotes} alt="Quotes vector" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
