import React, { useEffect } from "react";
import Image from "next/image";

import "./message.scss";
import closeIcon from "../../public/assets/svg/close.svg";
import { useGetEmails } from "@/hooks/useGetEmails";

export const Message: React.FC = () => {
  const { setMessage, message } = useGetEmails();

  return (
    <div></div>
    // <div className={message ? "message active" : "message"}>
    //   <div className="closingButtonIconBlock">
    //     <Image src={closeIcon} alt="Closing button svg" />
    //   </div>
    //   <div className="messageBlock">
    //     <span>{test}</span>
    //   </div>
    // </div>
  );
};
