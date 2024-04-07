"use client";

import PageContentContainer from "../shared-ui/pages-components/page-content-container";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import ContentHeader from "../shared-ui/pages-components/content-header";
import { instituteFloorsStructure } from "@/app/lib/constants";
import { InstituteFloorsStructure } from "@/app/lib/definitions";
import FloorImage from "./floor-image";
import AmphitheaterImages from "./amphitheater-images";

interface Props {
  search: string;
  checkInvalidInputValue: (isInvalid: boolean) => void;
}

export default function SearchResult({
  search,
  checkInvalidInputValue,
}: Props) {
  checkInvalidInputValue(false);

  const searchResultInfo: InstituteFloorsStructure = instituteFloorsStructure
    .filter(
      ({ name, amphitheaterList, sections }) =>
        name.includes(search) ||
        amphitheaterList.some(({ name }) => name.includes(search)) ||
        sections.some((sectionNumber) => sectionNumber.toString() === search)
    )
    .map((instituteFloorInfo) => ({
      ...instituteFloorInfo,
      amphitheaterList: instituteFloorInfo.amphitheaterList.filter(({ name }) =>
        name.includes(search)
      ),
    }));

  if (!search || !searchResultInfo.length) {
    if (search.length >= 3 && !searchResultInfo.length) {
      checkInvalidInputValue(true);
    }
    return (
      <div className=" container mx-auto mt-[18px] h-[108px] sm:h-[160px]"></div>
    );
  }

  return (
    <div className=" px-2 sm:px-0">
      <PageContentContainer>
        <div className=" flex flex-col gap-4">
          {searchResultInfo.map(({ name, floorImage, amphitheaterList }) => (
            <div className="flex flex-col gap-4" key={name}>
              <ContentWrapper>
                <ContentHeader text={`في ${name}`} />
                {amphitheaterList.length === 0 && (
                  <FloorImage floorImage={floorImage} floorName={name} />
                )}

                {amphitheaterList.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {amphitheaterList.map((amphitheater) => (
                      <AmphitheaterImages
                        key={amphitheater.name}
                        amphitheaterName={amphitheater.name}
                        amphitheaterMainImage={amphitheater.mainImage}
                        amphitheaterDoorImage={amphitheater.doorImage}
                      />
                    ))}
                  </div>
                )}
              </ContentWrapper>
            </div>
          ))}
        </div>
      </PageContentContainer>
    </div>
  );
}
