import React, { ReactNode } from "react";

interface UserConnectionBtnProps {
  children: ReactNode | ReactNode[];
}

export const UserConnectionBtn: React.FC<UserConnectionBtnProps> = ({
  children,
}) => <button className="userConnectionButton">{children}</button>;
