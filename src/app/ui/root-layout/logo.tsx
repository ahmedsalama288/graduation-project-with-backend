import Image from "next/image";
import logo from "@/../../public/logo.png";
import Link from "next/link";

interface props {
  className?: string;
}

export default function Logo({ className }: props) {
  return (
    <Link href="/" className="drop-shadow-lg inline-block">
      <Image
        className={`${className} w-[70px] h-[70px] min-w-[70px] max-w-[70px]`}
        src={logo}
        priority
        sizes=""
        alt="delta logo"
        quality="100"
        height={1000}
        width={1000}
      />
    </Link>
  );
}
