interface props {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: props) {
  return (
    <div className="bg-slate-600 rounded-md p-[10px] sm:p-4 max-w-full">
      <div className=" w-full  sm:w-[97%] !leading-[2.2] text-base sm:text-xl ">
        {children}
      </div>
    </div>
  );
}
