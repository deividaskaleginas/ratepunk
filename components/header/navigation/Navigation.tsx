import { NavLinksData } from "@/types/dataTypes";
import Link from "next/link";
import { useState } from "react";

import "./navigation.scss";

interface NavigationProps {
  open: boolean;
  browser: string;
}

const NAV_LINKS: NavLinksData[] = [
  { name: "Price Comparison", link: "/" },
  { name: "Airbnb Match", link: "/" },
  { name: "Hotels", link: "/" },
  { name: "Coupons", link: "/" },
  { name: "Blog", link: "/" },
];

export const Navigation: React.FC<NavigationProps> = ({ open, browser }) => {
  return (
    <div className={open ? "header-menu active" : "header-menu"}>
      <nav>
        <Link id="browserExtension" href={"/"}>
          {browser} Extension
        </Link>
        {NAV_LINKS.map(({ name, link }, index) => {
          return (
            <Link href={link} key={index} className="nav-link">
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
