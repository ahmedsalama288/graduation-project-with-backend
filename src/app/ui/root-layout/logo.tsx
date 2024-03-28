import Image from "next/image";
import logo from "@/../../public/logo.webp";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="drop-shadow-lg inline-block">
      <Image
        className="w-[70px] h-[70px] min-w-[70px] max-w-[70px] drop-shadow-md"
        src={logo}
        priority
        alt="delta logo"
        quality={80}
        height={1000}
        width={1000}
      />
    </Link>
  );
}
