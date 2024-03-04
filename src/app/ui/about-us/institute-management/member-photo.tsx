import Image, { StaticImageData } from "next/image";

interface props {
  imageSrc: StaticImageData;
  alt: string;
}

export default function MemberPhoto({ imageSrc, alt }: props) {
  return (
    <div>
      <Image
        className=" w-[200px] rounded-lg"
        src={imageSrc}
        quality={100}
        width={10000}
        height={10000}
        alt={alt}
      />
    </div>
  );
}
