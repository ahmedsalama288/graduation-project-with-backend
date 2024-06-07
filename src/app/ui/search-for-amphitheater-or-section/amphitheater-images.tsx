"use client";

import useImageLightbox from "@/app/lib/hooks/use-image-lightbox";
import ContentContainer from "../shared-ui/pages-components/content-container";
import Image, { StaticImageData } from "next/image";
import Lightbox from "./lightbox";

interface Props {
  amphitheaterName: string;
  amphitheaterMainImage: string | StaticImageData;
  amphitheaterDoorImage: string | StaticImageData;
}

export default function AmphitheaterImages({
  amphitheaterName,
  amphitheaterMainImage,
  amphitheaterDoorImage,
}: Props) {
  const {
    isImageOpen,
    handleOpenImage,
    handleCloseImage,
    imageSrcValue,
    handleImageSrcValue,
  } = useImageLightbox();

  return (
    <ContentContainer>
      <div>
        <h3 className=" mb-2">{amphitheaterName}</h3>
        <div>
          <div>
            <div className=" flex flex-col gap-4 lg:flex-row">
              <div className="basis-1/2">
                <h4 className=" mb-1">المدرج من الداخل</h4>
                <div className=" max-w-full overflow-hidden rounded sm:rounded-md cursor-pointer">
                  <Image
                    onClick={() => {
                      handleOpenImage();
                      handleImageSrcValue(amphitheaterMainImage);
                    }}
                    className="
                      rounded sm:rounded-md max-h-[500px] object-cover
                      drop-shadow-xl transition duration-[400ms]
                      hover:scale-105 hover:rotate-[0.15deg] 
                    "
                    width={2000}
                    height={500}
                    src={amphitheaterMainImage}
                    alt={amphitheaterName}
                    quality={40}
                    priority={false}
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <h4 className=" mb-1">باب المدرج الرئيسي</h4>
                <div className=" max-w-full overflow-hidden rounded sm:rounded-md cursor-pointer">
                  <Image
                    onClick={() => {
                      handleOpenImage();
                      handleImageSrcValue(amphitheaterDoorImage);
                    }}
                    className="
                      rounded sm:rounded-md max-h-[500px] object-cover
                      drop-shadow-xl transition duration-[400ms]
                      hover:scale-105 hover:rotate-[0.15deg]
                    "
                    width={2000}
                    height={400}
                    src={amphitheaterDoorImage}
                    alt={amphitheaterName}
                    quality={40}
                    placeholder="blur"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        isImageOpen={isImageOpen}
        imageSrc={imageSrcValue}
        onImageClose={handleCloseImage}
      />
    </ContentContainer>
  );
}
