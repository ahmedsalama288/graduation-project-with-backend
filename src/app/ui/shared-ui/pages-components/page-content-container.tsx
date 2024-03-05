export default function PageContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" container mx-auto p-4 sm:p-8 bg-slate-400 mt-8 rounded-lg">
      {children}
    </div>
  );
}
