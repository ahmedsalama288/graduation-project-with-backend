import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const getFirstSegment = (url: string): string => {
  // Remove leading and trailing slashes
  url = url.replace(/^\/|\/$/g, "");

  // Split the URL by slashes
  const segments = url.split("/");

  // Return the first segment
  return "/" + segments[0];
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
