"use client";

import Image from "next/image";
import heroOne from "../../../../public/root-images/hero-one.jpg";
import heroTwo from "../../../../public/root-images/hero-two.jpg";
import heroThree from "../../../../public/root-images/hero-three.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AnimatedSection from "../shared-ui/pages-components/animated-section";

const heroImages = [heroOne, heroTwo, heroThree];

export default function LandingImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImageHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImageHandler = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <figure
      className={`
        relative
        overflow-hidden w-full hero-img-hight
    `}
    >
      <div className=" absolute inset-0 bg-black/20 z-20" />
      <div>
        <Image
          className={`
              w-full h-screen object-cover
              contrast-[90%] relative 
            `}
          src={heroImages[currentImageIndex]}
          alt="landing page image"
          width={10000}
          height={600}
          quality={50}
          priority
        />
        <ChevronLeftIcon
          className={`
            h-[45px] w-[45px]  md:h-14 md:w-14 
            text-white
            absolute top-1/2 -translate-y-1/2 left-1 z-50
            cursor-pointer
          `}
          onClick={goToPreviousImageHandler}
        />
        <ChevronRightIcon
          className={`
            h-[45px] w-[45px]  md:h-14 md:w-14 
            text-white

            block
            absolute top-1/2 -translate-y-1/2 right-1 z-50
            cursor-pointer
          `}
          onClick={goToNextImageHandler}
        />
      </div>

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <AnimatedSection>
          <figcaption
            className="
                  flex flex-col justify-center items-center
                  text-3xl md:text-5xl whitespace-nowrap !leading-[1.2]
                "
          >
            <span>معهد الدلتا العالي</span>
            <span>للنظم والمعلومات الإدارية</span>
          </figcaption>
        </AnimatedSection>
      </div>
    </figure>
  );
}
