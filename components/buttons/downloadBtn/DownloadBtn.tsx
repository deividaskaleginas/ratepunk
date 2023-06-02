import React from "react";
import Image from "next/image";

import "./downloadBtn.scss";

import chrome from "../../../public/assets/svg/chromeIcon.svg";
import safari from "../../../public/assets/svg/safariIcon.svg";
import mozilla from "../../../public/assets/svg/mozillaIcon.svg";

//TODO: describe props size

interface DownloadBtnProps {
  children: string;
  size: string;
  browser: string;
}

export const DownloadBtn: React.FC<DownloadBtnProps> = ({
  children,
  size,
  browser,
}) => {
  return (
    <button
      className={
        size === "big"
          ? "big"
          : size === "medium"
          ? "medium"
          : size === "small"
          ? "small"
          : "mediumOrange"
      }
    >
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
        alt="Ratepunk logo"
        className="browser"
      />
      {children}
    </button>
  );
};
