import Image, { StaticImageData } from "next/image";

interface props {
  imageSrc: StaticImageData;
  alt: string;
}

export default function MemberPhoto({ imageSrc, alt }: props) {
  return (
    <div>
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
  );
}
