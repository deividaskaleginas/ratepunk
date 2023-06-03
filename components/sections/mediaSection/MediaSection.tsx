import { MediaData } from "@/types/dataTypes";
import React from "react";
import Image from "next/image";

import dailyNews from "../../../public/assets/images/logos/anchorage-daily-news.webp";
import alo from "../../../public/assets/images/logos/aol.webp";
import dailyMail from "../../../public/assets/images/logos/daily-mail.webp";
import washingtonPost from "../../../public/assets/images/logos/washington-post.webp";
import Link from "next/link";

import "./mediaSection.scss";

const LOGOS: MediaData[] = [
  { iconData: dailyMail, name: "Daily mail", href: "/" },
  { iconData: alo, name: "Alo", href: "/" },
  { iconData: washingtonPost, name: "Washington post", href: "/" },
  { iconData: dailyMail, name: "Daily mail", href: "/" },
  { iconData: alo, name: "Alo", href: "/" },
  { iconData: washingtonPost, name: "Washington post", href: "/" },
  { iconData: dailyMail, name: "Daily mail", href: "/" },
  { iconData: alo, name: "Alo", href: "/" },
  { iconData: washingtonPost, name: "Washington post", href: "/" },
  { iconData: dailyMail, name: "Daily mail", href: "/" },
  { iconData: alo, name: "Alo", href: "/" },
  { iconData: washingtonPost, name: "Washington post", href: "/" },
];

export const MediaSection: React.FC = () => {
  return (
    <section className="mediaSection">
      <div className="logos-slide">
        {LOGOS.map(({ iconData, name, href }, index) => {
          return (
            <Link href={href} key={index}>
              <Image src={iconData} alt={name} />
            </Link>
          );
        })}
      </div>
      <div className="logos-slide">
        {LOGOS.map(({ iconData, name, href }, index) => {
          return (
            <Link href={href} key={index}>
              <Image src={iconData} alt={name} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
