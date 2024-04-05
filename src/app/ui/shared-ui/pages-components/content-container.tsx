import { cn } from "@/app/lib/utils";

interface props {
  className?: string;
  children: React.ReactNode;
}

export default function ContentContainer({ className, children }: props) {
  return (
    <div
      className={cn(
        "bg-slate-600 rounded-md p-[10px] sm:p-4 max-w-full",
        className
      )}
    >
      <div className=" w-full !leading-[2.2] text-base sm:text-xl ">
        {children}
      </div>
    </div>
  );
}
