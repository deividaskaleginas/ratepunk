"use client";

import React, { useState } from "react";
import "./header.scss";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Logo />
      <Navigation open={open} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </header>
  );
};
