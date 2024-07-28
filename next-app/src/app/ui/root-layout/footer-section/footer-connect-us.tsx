import {
  DevicePhoneMobileIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import FaceBookIcon from "./icons-components/face-book-icon";
import Link from "next/link";
import YoutubeIcon from "./icons-components/youtube-icon";
import AnimatedSection from "../../shared-ui/pages-components/animated-section";

export default function FooterConnectUs() {
  return (
    <div className=" h-fit">
      <AnimatedSection
        startPosition="translate-x-14 opacity-0"
        endPosition="translate-x-0 opacity-100"
      >
        <div className="mb-7 font-semibold text-xl">
          <h3>تواصل معنا</h3>
        </div>
        <>
          <ul className=" flex flex-col gap-4">
            <li className=" flex flex-col gap-1 rounded-lg p-4 bg-[#014e79]">
              <div className=" flex gap-1">
                <MapPinIcon className="h-5 w-5" />
                <h4>العنوان</h4>
              </div>
              <p className="pr-1">
                المنصورة - طلخا - أول طريق المنصورة دمياط السريع
              </p>
            </li>
            <li className=" flex flex-col gap-1 rounded-lg p-4 bg-[#014e79]">
              <div className=" flex gap-1">
                <DevicePhoneMobileIcon className="h-5 w-5" />
                <h4>تليفون</h4>
              </div>
              <p className="pr-1 ">
                <span>01013444530</span> - <span>0502529809</span>
              </p>
            </li>
            <li className="rounded-lg p-4 bg-[#014e79]">
              <div className=" flex items-center justify-start gap-3 pr-2">
                <div>
                  <Link
                    aria-label="لينك الي صفحة الفيسبوك"
                    href={"https://www.facebook.com/groups/689877418208090"}
                    target="blank"
                  >
                    <FaceBookIcon className=" w-6 h-7 fill-[#f2f2f2] rounded-sm" />
                  </Link>
                </div>
                <div>
                  <Link
                    aria-label="لينك الي قناة اليوتيوب"
                    href={"https://www.facebook.com/groups/689877418208090"}
                    target="blank"
                  >
                    <YoutubeIcon className="w-8 h-8 fill-[#f2f2f2] " />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </>
      </AnimatedSection>
    </div>
  );
}
//
