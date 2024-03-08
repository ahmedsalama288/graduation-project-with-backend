export default function ContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} bg-slate-500 rounded-md p-3 sm:p-4 mt-4 flex flex-col gap-4`}
    >
      {children}
    </div>
  );
}
