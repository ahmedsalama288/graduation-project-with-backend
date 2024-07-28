import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface Props {
  searchInputValue: string;
  onSearchInputChange: (searchInput: string) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
}

export default function SearchInput({
  searchInputValue,
  onSearchInputChange,
  onInputFocus,
  onInputBlur,
}: Props) {
  return (
    <div className=" w-full flex bg-slate-500 gap-1 rounded-md p-3">
      <button className=" p-2 rounded-md bg-slate-400" type="button">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
      <label htmlFor="بحث عن مدرج او سكشن"></label>
      <input
        onChange={(e) => onSearchInputChange(e.target.value)}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        className="
                transition-all ease-in-out duration-100
                w-full bg-slate-50 text-lg sm:text-xl
                outline-2 outline-transparent
                focus-visible:outline focus-visible:outline-slate-700
                rounded pr-3 text-slate-800
                placeholder:text-lg placeholder:text-slate-700 
              "
        type="text"
        name="search"
        placeholder="اسم المدرج او السكشن ..."
        value={searchInputValue}
        autoComplete="off"
      />
    </div>
  );
}
