interface props {
  statusName: string;
  statusNumber: number;
  icon: React.ReactNode;
  description: string;
}

export default function InfoCard({
  statusName,
  statusNumber,
  icon,
  description,
}: props) {
  return (
    <div
      className={`
        flex flex-col justify-center items-center
        w-[350px]  max-w-full bg-slate-400 text-white 
        rounded-[10px] sm:rounded-2xl p-6
      `}
    >
      <div>
        <h3 className=" px-2 pt-4 pb-2 text-2xl mb-4">{statusName}</h3>
      </div>
      <div
        className={`
          flex flex-col justify-center items-center 
          rounded-full mb-[6px] w-40 h-40 bg-slate-500 
      `}
      >
        {icon}
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center mb-4">
        <p className=" text-base">اكثر من</p>
        <p className=" text-3xl">{statusNumber}</p>
      </div>

      <div className="">
        <p className=" text-2xl mb-2">{description}</p>
      </div>
    </div>
  );
}
