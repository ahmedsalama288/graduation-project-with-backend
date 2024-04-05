import { cn } from "@/app/lib/utils";

interface props {
  text: string;
  className?: string;
}

export default function ContentHeader({ text, className }: props) {
  return (
    <div
      className={cn(
        "bg-slate-600 w-fit max-w-full rounded-md p-[10px] sm:p-4",
        className
      )}
    >
      <h3 className={`text-base sm:text-lg font-semibold`}>{text}</h3>
    </div>
  );
}
