export default function MemberWord({ memberWord }: { memberWord: string }) {
  return (
    <div>
      <div className="bg-slate-500 rounded-md p-3 sm:p-4 mt-4 flex flex-col gap-4">
        <div className=" bg-slate-600 w-fit rounded-md p-[10px] sm:p-4">
          <h3 className="text-lg font-semibold  ">أبنائي الطلاب:</h3>
        </div>

        <div className="bg-slate-600 rounded-md p-[10px] sm:p-4">
          <p className=" w-full  sm:w-[97%] !leading-[2.2] text-lg sm:text-xl ">
            {memberWord}
          </p>
        </div>
      </div>
    </div>
  );
}
