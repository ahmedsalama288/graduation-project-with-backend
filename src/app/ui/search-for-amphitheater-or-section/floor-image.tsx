"use client";

import Lightbox from "./lightbox";
import Image, { StaticImageData } from "next/image";
import useImageLightbox from "@/app/lib/hooks/use-image-lightbox";
import ContentContainer from "../shared-ui/pages-components/content-container";

interface Props {
  floorName: string;
  floorImage: string | StaticImageData;
}

export default function FloorImage({ floorName, floorImage }: Props) {
  const { isImageOpen, handleOpenImage, handleCloseImage } = useImageLightbox();

  return (
    <ContentContainer>
      <div className=" max-w-full overflow-hidden rounded sm:rounded-md cursor-pointer">
        <Image
          className="
                      rounded sm:rounded-md max-h-[500px] object-cover
                      drop-shadow-xl transition duration-[400ms]
                      hover:scale-105 hover:rotate-[0.15deg] 
                    "
          onClick={handleOpenImage}
          width={2000}
          height={500}
          src={floorImage}
          alt={floorName}
          quality={60}
          priority={false}
        />
      </div>
      <Lightbox
        isImageOpen={isImageOpen}
        imageSrc={floorImage}
        onImageClose={handleCloseImage}
      />
    </ContentContainer>
  );
}
