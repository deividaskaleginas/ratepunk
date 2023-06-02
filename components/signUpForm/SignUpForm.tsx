import React, { useState } from "react";
import Image from "next/image";

import "./signUpForm.scss";
import "../../styles/globals/_typography.scss";

import emailIcon from "../../public/assets/svg/email-form.svg";
import { SignUpEmailBtn } from "../buttons/signUpEmail/SignUpEmailBtn";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState({ email: "" });
  return (
    <div className="signUpEmailBlock">
      <span className="signUpEmailText">
        Sign up to receive a desktop reminder.
      </span>
      <form>
        <div className="input-block">
          <Image
            priority
            src={emailIcon}
            alt="Ratepunk logo"
            className="email-icon"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="input"
          ></input>
        </div>
        <SignUpEmailBtn>Sign up. It&apos;s free</SignUpEmailBtn>
      </form>
    </div>
  );
};
