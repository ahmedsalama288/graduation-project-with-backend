import { cn } from "@/app/lib/utils";

export default function ImageLoadingSpinner({
  isImageLoading,
}: {
  isImageLoading: boolean;
}) {
  return (
    <div className={cn(!isImageLoading && "hidden")}>
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="
          m-12 inline-block h-12 w-12 animate-spin
          rounded-full border-4 border-solid border-current
          border-e-transparent align-[-0.125em] text-surface
          motion-reduce:animate-[spin_1.5s_linear_infinite]
          dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
