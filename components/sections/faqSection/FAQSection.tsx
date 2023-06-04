import React from "react";
import Image from "next/image";

import "./faqSection.scss";

import arrow from "../../../public/assets/svg/arrow.svg";
import { FAQQuestionsData } from "@/types/dataTypes";

const QUESTIONS: FAQQuestionsData[] = [
  {
    question: "What is a browser extension?",
    answer:
      "A browser extension is a small software program that enhances the browser’s functionality by supporting additional functions and features.",
    icon: arrow,
  },
  {
    question: "What is RatePunk Extension?",
    answer:
      "RatePunk is a browser extension offering travelers multiple solutions to make the most out of their travel budget. It allows users to quickly and easily compare prices of hotels across different providers, such as Booking.com, Expedia, Hotels.com, Priceline, and others. RatePunk also finds and suggests alternative providers for AirBnb apartment booking. Additionally, it sends rebooking alerts when price drops happen for an already booked hotel. And it pays cashback after the stay.",
    icon: arrow,
  },
  {
    question: "How does RatePunk Extension work?",
    answer:
      "RatePunk is a browser extension offering travelers multiple solutions to make the most out of their travel budget. It allows users to quickly and easily compare prices of hotels across different providers, such as Booking.com, Expedia, Hotels.com, Priceline, and others. RatePunk also finds and suggests alternative providers for AirBnb apartment booking. Additionally, it sends rebooking alerts when price drops happen for an already booked hotel. And it pays cashback after the stay.",
    icon: arrow,
  },
  {
    question: "How do I install the RatePunk browser extension?",
    answer:
      "To install Ratepunk, click the 'Add to Chrome' or 'Add to Safari' button. Follow the instructions to complete the installation. Once installed - pin it to your browser for easy access.",
    icon: arrow,
  },
  {
    question: "Is RatePunk extension free?",
    answer: "RatePunk is entirely free to install and use. ",
    icon: arrow,
  },
  {
    question: "Is it safe to use RatePunk Extension?",
    answer:
      "Yes, RatePunk Extension is safe to use. It does not collect any personal information from users and does not interfere with any sensitive data on the websites you visit.",
    icon: arrow,
  },
  {
    question: "Why does it need permissions to read/change data?",
    answer:
      "Access and change data on websites is a standard permission used by major extensions like Honey and Capital One. In the sake of transparency, we request this permission in order to expand to all travel websites. We plan on adding hotel comparison across all hotel websites. Requesting websites in use on every extension update would require users to accept new permissions on every update leading to a poor user experience and churn. We comply with all chrome web store policies and go through the standard 1-2 day code review process on every update. ",
    icon: arrow,
  },
  {
    question: "How do I book a hotel with RatePunk?",
    answer:
      "No bookings are made on RatePunk itself. RatePunk does not endorse any specific provider, we only show you the price comparison, and you choose the provider you’d like to book with.",
    icon: arrow,
  },
  {
    question: "Do I have to create an account?",
    answer:
      "You don’t need an account to use RatePunk’s price comparison or rebooking (we will need to take an email address for the later). ",
    icon: arrow,
  },
];

export const FAQSection: React.FC = () => {
  const handleClick = (e: any) => {
    e.currentTarget.classList.contains("open")
      ? e.currentTarget.classList.remove("open")
      : e.currentTarget.classList.add("open");
  };

  return (
    <section className="faqSection">
      <div className="faqSectionContainer">
        <div>
          <h1 className="faqSectionTitle">Frequently Asked Questions</h1>
        </div>
        <div className="questions">
          {QUESTIONS.map(({ question, answer, icon }, index) => {
            return (
              <div key={index} className="question" onClick={handleClick}>
                <div className="questionTop">
                  <h2 className="faqQuestionTitle">{question}</h2>
                  <div>
                    <Image src={icon} alt="Arrow svg" className="arrowIcon" />
                  </div>
                </div>
                <div className="answer">
                  <p className="faqQuestionAnswerText">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
