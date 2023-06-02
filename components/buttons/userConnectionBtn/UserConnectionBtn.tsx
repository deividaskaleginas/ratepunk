import React, { ReactNode } from "react";
import Link from "next/link";

import "./userConnectionBtn.scss";

interface UserConnectionBtnProps {
  children: ReactNode | ReactNode[];
  href: string;
  isActive?: boolean;
}

export const UserConnectionBtn: React.FC<UserConnectionBtnProps> = ({
  children,
  href,
  isActive,
}) => (
  <button
    className={
      isActive ? "button isActive navButton" : "button notActive navButton"
    }
  >
    <Link href={href}>{children}</Link>
  </button>
);
