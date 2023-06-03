import React from "react";
import Image from "next/image";

import "./savingsSection.scss";

import rpIcon from "../../../public/assets/svg/rp-coin.svg";

export const SavingSection: React.FC = () => {
  const title = "Total Dollars Ratepunk Helped Users to Save and counting";
  return (
    <section className="savings">
      <div className="savingsContainer">
        <div className="savingsAmount">
          <div className="coinIconBlock">
            <Image src={rpIcon} alt="Ratepunk logo coin" />
          </div>

          <h1 className="savingsAmountTitle">$19,930,834+</h1>
        </div>
        <div className="titleBlock">
          <h2 className="savingsAmountDetailsText">{title.toUpperCase()}</h2>
        </div>
      </div>
    </section>
  );
};
