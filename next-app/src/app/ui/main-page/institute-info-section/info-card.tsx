import dynamic from "next/dynamic";
const InteractiveInfoStatus = dynamic(
  () => import("./interactive-info-status"),
  {
    loading: () => (
      <div className=" flex flex-col gap-2 justify-center items-center mb-2 sm:mb-4">
        <p className=" text-base">اكثر من</p>
        <p className=" text-2xl sm:text-3xl">0</p>
      </div>
    ),
  }
);

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
        w-[350px] max-w-full bg-slate-600 rounded-lg
        p-6 drop-shadow-md
      `}
    >
      <div>
        <h3 className=" text-xl sm:text-2xl px-2 pt-4 pb-2 mb-4">
          {statusName}
        </h3>
      </div>
      <div
        className={`
          flex flex-col justify-center items-center 
          rounded-full mb-[6px] p-8 bg-slate-700 
      `}
      >
        {icon}
      </div>
      <InteractiveInfoStatus statusNumber={statusNumber} />
      <div>
        <p className=" text-xl sm:text-2xl mb-2">{description}</p>
      </div>
    </div>
  );
}
