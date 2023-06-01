import React from "react";
import "./header.scss";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { Logo } from "./logo/Logo";

export const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <BurgerMenu />
    </header>
  );
};
