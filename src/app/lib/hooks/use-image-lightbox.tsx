import { StaticImageData } from "next/image";
import { useState } from "react";

export default function useImageLightbox() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageSrcValue, setImageSrcValue] = useState<string | StaticImageData>(
    ""
  );

  const handleOpenImage = () => setIsImageOpen(true);
  const handleCloseImage = () => setIsImageOpen(false);

  const handleImageSrcValue = (srcValue: string | StaticImageData) => {
    setImageSrcValue(srcValue);
  };

  

  return {
    isImageOpen,
    handleOpenImage,
    handleCloseImage,
    imageSrcValue,
    handleImageSrcValue,
  };
}
