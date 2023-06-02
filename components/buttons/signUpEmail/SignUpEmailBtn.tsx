import React, { ReactNode } from "react";

import "./signUpEmailBtn.scss";

interface SignUpEmailBtnProps {
  children: String;
}

export const SignUpEmailBtn: React.FC<SignUpEmailBtnProps> = ({ children }) => {
  return <button className="signUpBtn">{children.toUpperCase()}</button>;
};
