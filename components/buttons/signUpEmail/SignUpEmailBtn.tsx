import React, { ReactNode } from "react";

import "./signUpEmailBtn.scss";

interface SignUpEmailBtnProps {
  children: String;
  onClick?: () => void;
}

export const SignUpEmailBtn: React.FC<SignUpEmailBtnProps> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="signUpBtn">
      {children.toUpperCase()}
    </button>
  );
};
