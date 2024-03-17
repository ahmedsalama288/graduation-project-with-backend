import {
  DevicePhoneMobileIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import FaceBookIcon from "./icons-components/face-book-icon";
import Link from "next/link";
import YoutubeIcon from "./icons-components/youtube-icon";

export default function FooterConnectUs() {
  return (
    <div>
      <div className="mb-8 font-semibold text-xl">
        <h4>تواصل معنا</h4>
      </div>
      <div>
        <ul className=" flex flex-col gap-4">
          <li className=" flex flex-col gap-1 rounded-lg p-4 bg-[#014e79]">
            <div className=" flex gap-1">
              <MapPinIcon className="h-5 w-5" />
              <h5>العنوان</h5>
            </div>
            <p className="pr-1">
              المنصورة - طلخا - أول طريق المنصورة دمياط السريع
            </p>
          </li>
          <li className=" flex flex-col gap-1 rounded-lg p-4 bg-[#014e79]">
            <div className=" flex gap-1">
              <DevicePhoneMobileIcon className="h-5 w-5" />
              <h5>تليفون</h5>
            </div>
            <p className="pr-1 ">
              <span>01013444530</span> - <span>0502529809</span>
            </p>
          </li>

          <li className="rounded-lg p-4 bg-[#014e79] max-h-[60.43px]">
            <ul className=" flex items-center gap-3 pr-2">
              <li>
                <Link href={"/"}>
                  <FaceBookIcon className=" w-6 h-fit fill-[#f2f2f2] rounded-sm" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <YoutubeIcon className="w-8 h-fit fill-[#f2f2f2] " />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
//
