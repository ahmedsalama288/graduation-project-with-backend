export default function MemberName({ memberName }: { memberName: string }) {
  return (
    <div className=" p-3 sm:p-4 bg-slate-500 w-fit mt-5 rounded-lg">
      <h2 className=" text-lg sm:text-xl font-semibold">{memberName}</h2>
    </div>
  );
}
