"use client";

import PageContentContainer from "../shared-ui/pages-components/page-content-container";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import ContentContainer from "../shared-ui/pages-components/content-container";
import Image from "next/image";
import { instituteFloorsStructure } from "@/app/lib/constants";
import ContentHeader from "../shared-ui/pages-components/content-header";
import { InstituteFloorsStructure } from "@/app/lib/definitions";

export default function SearchResult({ search = "" }: { search?: string }) {
  const searchResultInfo: InstituteFloorsStructure = instituteFloorsStructure
    .filter(
      ({ name, amphitheaterList }) =>
        name.includes(search) ||
        amphitheaterList.some(({ name }) => name.includes(search))
    )
    .map((instituteFloorInfo) => ({
      ...instituteFloorInfo,
      amphitheaterList: instituteFloorInfo.amphitheaterList.filter(({ name }) =>
        name.includes(search)
      ),
    }));

  if (!search || !searchResultInfo.length) {
    return (
      <div className=" container mx-auto mt-[18px] h-[108px] sm:h-[160px]">
        {search.length >= 3 && (
          <p className=" bg-slate-400 p-5 w-full text-2xl text-center rounded-md">
            not found
          </p>
        )}
      </div>
    );
  }

  return (
    <div className=" px-2 sm:px-0">
      <PageContentContainer>
        <div className=" flex flex-col gap-4">
          {searchResultInfo.map(({ name, amphitheaterList }) => (
            <div className="flex flex-col gap-4" key={name}>
              <ContentWrapper>
                <ContentHeader text={`${name}`} />
                <div className=" flex flex-col gap-4">
                  {amphitheaterList.map((amphitheater) => (
                    <div key={amphitheater.name}>
                      <ContentContainer>
                        <h3>{amphitheater.name}</h3>
                        <div>
                          <div>
                            <div className=" flex flex-col gap-4 sm:flex-row">
                              <div className="basis-1/2">
                                <h4>المدرج من الداخل</h4>
                                <Image
                                  className=" rounded-md max-h-[500px] object-cover"
                                  width={10000}
                                  height={400}
                                  src={amphitheater.mainImage}
                                  alt={amphitheater.name}
                                  quality={40}
                                  priority={false}
                                />
                              </div>
                              <div className="basis-1/2">
                                <h4>باب المدرج</h4>
                                <Image
                                  className=" rounded-md max-h-[500px] object-cover"
                                  width={10000}
                                  height={400}
                                  src={amphitheater.doorImage}
                                  alt={amphitheater.name}
                                  quality={40}
                                  priority={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </ContentContainer>
                    </div>
                  ))}
                </div>
              </ContentWrapper>
            </div>
          ))}
        </div>
      </PageContentContainer>
    </div>
  );
}
