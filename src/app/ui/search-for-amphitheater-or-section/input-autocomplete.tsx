import { instituteFloorsStructure } from "@/app/lib/constants";

const floorSections = instituteFloorsStructure
  .flatMap(({ sections }) => sections)
  .concat([
    "مدرج 6أ",
    "مدرج 6ب",
    "مدرج 1",
    "مدرج 2",
    "مدرج 3",
    "مدرج 4",
    "مدرج 5",
  ]);

interface Props {
  changeInputValue: (searchInput: string) => void;
  searchValue: string;
  isInputInFocus: boolean;
}

export default function InputAutocomplete({
  changeInputValue,
  searchValue,
  isInputInFocus,
}: Props) {
  const autocompleteArr = floorSections.filter((floorSection) =>
    floorSection.toString().includes(searchValue)
  );

  if (!isInputInFocus || searchValue === "" || autocompleteArr.length === 0)
    return;

  return (
    <div
      className="
          text-base bg-slate-500 text-slate-800
          p-2 mt-2 rounded-md 
          absolute top-[97%] left-0 w-full
            z-50
        "
    >
      <div className=" flex flex-col gap-1 bg-slate-100 rounded">
        {autocompleteArr.slice(0, 10).map((searchFor) => (
          <div key={searchFor}>
            <span
              className="cursor-pointer bg-transparent transition-all duration-200 p-2 hover:bg-slate-200 hover:pr-3 rounded flex gap-4"
              onClick={() => changeInputValue(searchFor.toString())}
            >
              {searchFor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
