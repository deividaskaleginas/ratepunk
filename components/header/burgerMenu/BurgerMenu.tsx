import React from "react";

import "./burgerMenu.scss";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <div className="burger-menu" role="button" onClick={() => setOpen(!open)}>
      {open}
      <div className={open ? "line active" : "line"}></div>
      <div className={open ? "line active" : "line"}></div>
      <div className={open ? "line active" : "line"}></div>
    </div>
  );
};
