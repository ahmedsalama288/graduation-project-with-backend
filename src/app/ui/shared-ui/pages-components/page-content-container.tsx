export default function PageContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} container mx-auto p-4 sm:p-8 bg-slate-400 mt-8 rounded-lg`}
    >
      {children}
    </div>
  );
}
