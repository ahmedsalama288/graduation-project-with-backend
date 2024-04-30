import { cn } from "@/app/lib/utils";

export default function PageContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className=" p-2">
      <div
        className={cn(
          "container mx-auto p-4 sm:p-8 bg-slate-400 mt-8 rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
