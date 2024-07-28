import {
  DevicePhoneMobileIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import FaceBookIcon from "@/app/ui/root-layout/footer-section/icons-components/face-book-icon";
import Link from "next/link";
import YoutubeIcon from "@/app/ui/root-layout/footer-section/icons-components/youtube-icon";

export default function ContactUsSection() {
  return (
    <div className=" h-fit">
      <div className="mb-8 font-semibold text-xl">
        <h4>تواصل معنا</h4>
      </div>
      <>
        <ul className=" flex flex-col gap-4">
          <li className=" flex flex-col gap-1 rounded-lg p-4 bg-slate-600">
            <div className=" flex gap-1">
              <MapPinIcon className="h-5 w-5" />
              <h5>العنوان</h5>
            </div>
            <p className="pr-1">
              المنصورة - طلخا - أول طريق المنصورة دمياط السريع
            </p>
          </li>
          <li className=" flex flex-col gap-1 rounded-lg p-4 bg-slate-600">
            <div className=" flex gap-1">
              <DevicePhoneMobileIcon className="h-5 w-5" />
              <h5>تليفون</h5>
            </div>
            <p className="pr-1 ">
              <span>01013444530</span> - <span>0502529809</span>
            </p>
          </li>
          <li className="rounded-lg p-4 bg-slate-600">
            <div className=" flex items-center justify-start gap-3 pr-2">
              <div>
                <Link href={"/"}>
                  <FaceBookIcon className=" w-6 h-7 fill-[#f2f2f2] rounded-sm" />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <YoutubeIcon className="w-8 h-8 fill-[#f2f2f2] " />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </>
    </div>
  );
}
//
