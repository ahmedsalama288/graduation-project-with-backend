"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

interface Props {
  isImageOpen: boolean;
  imageSrc: string | StaticImageData;
  onImageClose: () => void;
}

export default function Lightbox({
  isImageOpen,
  imageSrc,
  onImageClose,
}: Props) {
  useEffect(() => {
    if (isImageOpen) {
      document.documentElement.style.setProperty("--scroll-behavior", "hidden");
    } else {
      document.documentElement.style.setProperty("--scroll-behavior", "auto");
    }
  }, [isImageOpen]);

  return (
    <div
      className={`${isImageOpen ? "" : " hidden"} 
      fixed w-full inset-0
      h-screen z-[110000] bg-black
    `}
    >
      <div className=" flex justify-center items-center w-full mx-auto h-screen">
        <div className="relative z-[111000]">
          <Image
            className=" object-contain w-full m-auto max-h-screen"
            src={imageSrc}
            alt="Image"
            quality={80}
            priority={false}
            width={20000}
            height={700}
          />
        </div>
      </div>
      <button
        onClick={onImageClose}
        className=" fixed top-0 right-0 p-2 z-[111000]"
      >
        <XMarkIcon className="h-9 w-9" />
      </button>
    </div>
  );
}
