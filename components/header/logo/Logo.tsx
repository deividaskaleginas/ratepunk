import Image from "next/image";
import Link from "next/link";
import ratepunkLogo from "../../../public/assets/svg/ratepunkLogo.svg";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image priority src={ratepunkLogo} alt="Ratepunk logo" />
    </Link>
  );
};
