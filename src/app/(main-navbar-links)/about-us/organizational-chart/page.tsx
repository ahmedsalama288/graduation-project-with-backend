import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import Image from "next/image";
import { fetchOrganizationalChartImage } from "@/app/lib/data";

export default async function Page() {
  const imageSrc = await fetchOrganizationalChartImage();

  return (
    <section>
      <MainPageHeader text="الهيكل التنظيمي" />
      <PageContentContainer className=" flex justify-center items-center">
        <ContentWrapper className="flex justify-center items-center">
          <div className="w-full max-w-[900px] flex flex-col">
            <Image
              width={1000}
              height={1000}
              className="rounded-md"
              src={imageSrc}
              sizes="100vw"
              alt="الهيكل التنظيمي للمعهد"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
