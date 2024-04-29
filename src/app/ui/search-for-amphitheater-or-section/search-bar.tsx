"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface Props {
  searchInputValue: string;
  onSearchInputChange: (searchInput: string) => void;
  isInputHasInvalidValue: boolean;
}

export default function SearchBar({
  searchInputValue,
  onSearchInputChange,
  isInputHasInvalidValue,
}: Props) {
  return (
    <div className=" container mx-auto mt-6">
      <div>
        <form
          className=" w-full flex bg-slate-400 gap-1 rounded-md p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <button className=" p-2 rounded-md bg-slate-300" type="button">
            <MagnifyingGlassIcon className="h-6 w-6  text-slate-500" />
          </button>
          <label htmlFor="بحث عن مدرج او سكشن"></label>
          <input
            onChange={(e) => onSearchInputChange(e.target.value)}
            className="
                transition-all ease-in-out duration-100
                w-full bg-slate-400 text-lg sm:text-xl
                outline-2 outline-transparent
                focus-visible:outline focus-visible:outline-slate-500
                rounded pr-3 
                placeholder:text-lg placeholder:text-slate-100 
              "
            type="text"
            name="search"
            placeholder="اسم المدرج او السكشن ..."
            value={searchInputValue}
            autoComplete="off"
          />
        </form>
        {isInputHasInvalidValue && (
          <p className=" text-red-800 mt-1 text-center">
            لا توجد نتيجه تأكد من الاسم
          </p>
        )}
      </div>
    </div>
  );
}
