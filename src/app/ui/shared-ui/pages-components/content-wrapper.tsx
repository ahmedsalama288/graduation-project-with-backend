export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-500 rounded-md p-3 sm:p-4 mt-4 flex flex-col gap-4">
      {children}
    </div>
  );
}
