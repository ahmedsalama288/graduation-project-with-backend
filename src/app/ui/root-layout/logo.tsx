import Image from "next/image";
import logo from "@/../../public/logo.webp";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="drop-shadow-lg inline-flex justify-center items-center w-[73px] h-[70px]">
      <Image
        className=" w-full h-auto drop-shadow-md"
        src={logo}
        priority
        alt="delta logo"
        quality={80}
        height={1080}
        width={1013}
      />
    </Link>
  );
}
