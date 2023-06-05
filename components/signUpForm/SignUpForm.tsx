import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";

import "./signUpForm.scss";
import "../../styles/globals/_typography.scss";

import emailIcon from "../../public/assets/svg/email-form.svg";
import { SignUpEmailBtn } from "../buttons/signUpEmail/SignUpEmailBtn";
import { useGetEmails } from "@/hooks/useGetEmails";

interface SignUpProps {
  textColor?: string;
  title?: boolean;
  subscribe?: boolean;
}

export const SignUpForm: React.FC<SignUpProps> = ({
  textColor,
  title,
  subscribe,
}) => {
  const { checkSubscribers, setMessage } = useGetEmails();
  const [email, setEmail] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.length > 0) {
      checkSubscribers(email);
      setEmail("");
    } else {
      setMessage("Please, provide correct email.");
    }
  };

  return (
    <div
      className={!subscribe ? "signUpEmailBlock" : "signUpEmailBlock subscribe"}
    >
      {!title ? (
        <span
          className={
            textColor === "black" ? "signUpEmailText black" : "signUpEmailText"
          }
        >
          Sign up to receive a desktop reminder.
        </span>
      ) : null}
      {/* <span
        className={
          textColor === "black" ? "signUpEmailText black" : "signUpEmailText"
        }
      >
        Sign up to receive a desktop reminder.
      </span> */}
      <form onSubmit={handleSubscribe}>
        <div className="input-block">
          <Image
            priority
            src={emailIcon}
            alt="Ratepunk logo"
            className="email-icon"
          />
          <input
            id="emailInput"
            // required
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="input"
            value={email}
            onChange={onChange}
          />
        </div>
        <SignUpEmailBtn>
          {!subscribe ? "Sign up. It&apos;s free" : "Subscribe"}
        </SignUpEmailBtn>
      </form>
    </div>
  );
};
