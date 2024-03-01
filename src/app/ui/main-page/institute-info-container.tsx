import { InstituteStatusInfo } from "@/app/lib/definitions";
import InfoCard from "./info-card";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import SectionHeader from "../section-header";

const statusList: InstituteStatusInfo[] = [
  {
    statusName: "عدد الطلاب بالمعهد",
    statusNumber: 5769,
    icon: <UserGroupIcon className="h-24 w-24 text-white" />,
    description: "طالب",
  },
  {
    statusName: "عدد الطلاب الخريجين بالمعهد ",
    statusNumber: 10609,
    icon: <AcademicCapIcon className="h-24 w-24 text-white" />,
    description: "طالب",
  },
];

export default function InstituteInfoContainer() {
  return (
    <section
      className={`
        container mx-auto mt-10 mb-28 w-full flex flex-col justify-around items-center
        border-[1px] border-slate-400 border-solid bg-slate-100 flex-wrap
        rounded-xl md:rounded-2xl
        md:flex-row
        p-6 sm:p-8 md:p-8
        gap-8 lg:gap-0
    `}
    >
      {/* <div className=" w-full mb-4 sm:mb-8">
        <h2
          className={`
            w-fit mx-auto px-8 py-4 bg-slate-400 text-2xl sm:text-3xl rounded-[10px]
          `}
        >
          معهد الدلتا بالأرقام
        </h2>
      </div> */}
      <div className=" w-full mb-2 sm:mb-14">
      <SectionHeader text={"معهد الدلتا بالأرقام"} />
      </div>


      {statusList.map(({ statusName, statusNumber, icon, description }) => (
        <InfoCard
          key={statusName}
          statusName={statusName}
          statusNumber={statusNumber}
          icon={icon}
          description={description}
        />
      ))}
    </section>
  );
}
