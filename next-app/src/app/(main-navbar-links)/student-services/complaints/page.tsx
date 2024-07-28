import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import StudentComplaintsForm from "@/app/ui/student-services/student-complaints/student-complaints-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "شكاوي الطلاب",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="شكاوي الطلاب" />
      <PageContentContainer>
        <StudentComplaintsForm />
      </PageContentContainer>
    </section>
  );
}
