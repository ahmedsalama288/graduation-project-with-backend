"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
import LightBoxImage from "./light-box-image";

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
    }
    return () =>
      document.documentElement.style.setProperty("--scroll-behavior", "auto");
  }, [isImageOpen]);

  return (
    <div className="fixed w-full inset-0 h-screen z-[110000] bg-black">
      <LightBoxImage imageSrc={imageSrc} />
      <button
        onClick={onImageClose}
        className=" fixed top-0 right-0 p-2 z-[111000]"
      >
        <XMarkIcon className="h-9 w-9" />
      </button>
    </div>
  );
}
