import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageLoadingSpinner from "../shared-ui/loading-spinner/image-loading-spinner";

interface Props {
  imageSrc: string | StaticImageData;
}

export default function LightBoxImage({ imageSrc }: Props) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className=" flex justify-center items-center w-full mx-auto h-screen">
      <div className="relative z-[111000]">
        <ImageLoadingSpinner isImageLoading={isImageLoading} />
        <Image
          className="object-contain w-full m-auto max-h-screen"
          src={imageSrc}
          alt="Image"
          quality={80}
          width={20000}
          height={700}
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
    </div>
  );
}
