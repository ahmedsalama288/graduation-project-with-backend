"use client";

import MapLoadingSpinner from "../shared-ui/loading-spinner/map-loading-spinner";
import { cn } from "@/app/lib/utils";
import { useState } from "react";

export default function InstituteMap() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className=" h-[450px] relative overflow-y-hidden">
      {isLoading && <MapLoadingSpinner />}
      <iframe
        className={cn(
          "w-full h-[450px] rounded",
          isLoading && "absolute top-0 left-0"
        )}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d854.3523513273756!2d31.388151!3d31.070537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f77769f3f3218d%3A0x24c4c292c3fa4a!2z2YXYudmH2K8g2KfZhNit2KfYs9io2KfYqiDZiNmG2LjZhSDYp9mE2YXYudmE2YjZhdin2Ko!5e0!3m2!1sen!2seg!4v1721492855358!5m2!1sen!2seg"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
