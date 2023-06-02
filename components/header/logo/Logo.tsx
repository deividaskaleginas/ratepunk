import Image from "next/image";
import Link from "next/link";
import ratepunkLogo from "../../../public/assets/svg/ratepunkLogo.svg";
import ratepunkLogoDesktop from "../../../public/assets/svg/ratePunkLogoDesktop.svg";

import "./logo.scss";

export const Logo: React.FC = () => {
  return (
    //TODO: change one logo to all desktop versions
    <Link href="/" className="test">
      <Image
        priority
        src={ratepunkLogo}
        alt="Ratepunk logo"
        className="mobile"
      />
      <Image
        priority
        src={ratepunkLogoDesktop}
        alt="Ratepunk logo"
        className="desktop"
      />
    </Link>
  );
};
