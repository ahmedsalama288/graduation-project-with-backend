import { InstituteStatusInfo } from "@/app/lib/definitions";
import InfoCard from "./info-card";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import PageContentContainer from "../../shared-ui/pages-components/page-content-container";
import ContentWrapper from "../../shared-ui/pages-components/content-wrapper";
import ContentHeader from "../../shared-ui/pages-components/content-header";
import AnimatedSection from "../../shared-ui/pages-components/animated-section";

const statusList: InstituteStatusInfo[] = [
  {
    statusName: "عدد الطلاب بالمعهد",
    statusNumber: 5769,
    icon: <UserGroupIcon className="h-16 w-16 sm:h-24 sm:w-24 text-white" />,
    description: "طالب",
  },
  {
    statusName: "عدد الطلاب الخريجين بالمعهد ",
    statusNumber: 10609,
    icon: <AcademicCapIcon className="h-16 w-16 sm:h-24 sm:w-24 text-white" />,
    description: "طالب",
  },
];

export default function InstituteInfoContainer() {
  return (
    <article>
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="معهد الدلتا بالأرقام" />
            <div className=" flex flex-col justify-around items-center lg:flex-row gap-6 ">
              {statusList.map(
                ({ statusName, statusNumber, icon, description }) => (
                  <InfoCard
                    key={statusName}
                    statusName={statusName}
                    statusNumber={statusNumber}
                    icon={icon}
                    description={description}
                  />
                )
              )}
            </div>
          </ContentWrapper>
        </PageContentContainer>
      </AnimatedSection>
    </article>
  );
}
