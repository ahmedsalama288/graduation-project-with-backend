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
    <div className=" w-full">
      <ContentContainer className=" w-fit">
        <div className="w-[700px] max-w-full overflow-hidden rounded sm:rounded-md cursor-pointer">
          <Image
            className="
                  rounded sm:rounded-md object-cover
                  drop-shadow-xl transition duration-[400ms]
                  hover:scale-105 hover:rotate-[0.15deg]
                  w-full h-auto
                "
            onClick={handleOpenImage}
            sizes="100vw"
            src={floorImage}
            alt={floorName}
            placeholder="blur"
            quality={60}
            priority={false}
          />
        </div>
        {isImageOpen && (
          <Lightbox
            isImageOpen={isImageOpen}
            imageSrc={floorImage}
            onImageClose={handleCloseImage}
          />
        )}
      </ContentContainer>
    </div>
  );
}
