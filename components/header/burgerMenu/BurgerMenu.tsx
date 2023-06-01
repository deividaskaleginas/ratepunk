"use client";

import React, { useState } from "react";

import "./burgerMenu.scss";

export const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="burger-menu" role="button" onClick={() => setOpen(!open)}>
      {open}
      <div className={open ? "line active" : "line"}></div>
      <div className={open ? "line active" : "line"}></div>
      <div className={open ? "line active" : "line"}></div>
    </div>
  );
};
