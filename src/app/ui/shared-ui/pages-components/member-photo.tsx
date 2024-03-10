import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  imageSrc: StaticImageData;
  alt: string;
  href?: string;
}

export default function MemberPhoto({ imageSrc, alt, href = "" }: props) {
  return (
    <Link href={href} className=" w-fit block">
      <div className=" drop-shadow-xl w-fit">
        <Image
          className=" w-[200px] h-[247.321px] rounded-lg"
          src={imageSrc}
          quality={100}
          width={3000}
          height={3000}
          priority={true}
          alt={alt}
        />
      </div>
    </Link>
  );
}
