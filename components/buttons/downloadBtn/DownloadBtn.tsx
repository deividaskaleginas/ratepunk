import React, { ReactNode } from "react";
import Image from "next/image";

import "./downloadBtn.scss";

import chrome from "../../../public/assets/svg/chromeIcon.svg";
import safari from "../../../public/assets/svg/safariIcon.svg";
import mozilla from "../../../public/assets/svg/mozillaIcon.svg";
import rpCoin from "../../../public/assets/svg/rp-coin.svg";

//TODO: describe props size

interface DownloadBtnProps {
  children: string | ReactNode;
  size: string;
  browser?: string;
  type?: string;
}

export const DownloadBtn: React.FC<DownloadBtnProps> = ({
  children,
  size,
  browser,
  type,
}) => {
  return (
    <button
      className={
        size === "big"
          ? "btn big"
          : size === "medium"
          ? "btn medium"
          : size === "small"
          ? "small"
          : "btn mediumOrange"
      }
    >
      {type ? (
        <Image
          priority
          src={rpCoin}
          height={30}
          width={30}
          alt="Ratepunk logo coin"
          className="browser"
        />
      ) : (
        <Image
          priority
          src={
            browser === "Chrome"
              ? chrome
              : browser === "Safari"
              ? safari
              : mozilla
          }
          height={40}
          width={40}
          alt="Browser logo"
          className="browser"
        />
      )}

      {children}
    </button>
  );
};
