"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./header.scss";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { UserConnectionBtn } from "../buttons/userConnectionBtn/UserConnectionBtn";

interface HeaderProps {
  browser: string;
  setBrowser: Dispatch<SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ browser, setBrowser }) => {
  const [open, setOpen] = useState(false);

  //TODO: move to redux state
  const getBrowserName = (userAgent: string) => {
    if (userAgent.includes("Firefox")) {
      return "Mozilla";
    } else if (userAgent.includes("Chrome")) {
      return "Chrome";
    } else if (userAgent.includes("Safari")) {
      return "Safari";
    } else {
      return "unknow";
    }
  };

  useEffect(() => {
    setBrowser(getBrowserName(navigator.userAgent));
  }, [setBrowser]);

  return (
    <header>
      <div className="wrapper">
        <Logo />
        <div className="userSide">
          <Navigation open={open} browser={browser} />
          <div className="userButtons">
            <UserConnectionBtn href="/">Log In</UserConnectionBtn>
            <UserConnectionBtn isActive={true} href="/">
              Sign up
            </UserConnectionBtn>
          </div>
        </div>

        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};
