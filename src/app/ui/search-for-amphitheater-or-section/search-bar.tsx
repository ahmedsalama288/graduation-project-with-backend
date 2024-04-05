"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    const newUrl = `${pathname}?${params.toString()}`;
    replace(newUrl);
  }, 400);

  return (
    <div className=" container mx-auto mt-6">
      <div>
        <form className=" w-full flex bg-slate-400 gap-1 rounded-md p-2">
          <button className=" p-2 rounded-md bg-slate-300">
            <MagnifyingGlassIcon className="h-6 w-6  text-slate-500" />
          </button>
          <label htmlFor="بحث عن مدرج او سكشن"></label>
          <input
            onChange={(e) => handleSearch(e.target.value.trim())}
            className="
                transition-all ease-in-out duration-100
                w-full bg-slate-400 text-lg sm:text-xl
                outline-2 outline-transparent
                focus-visible:outline focus-visible:outline-slate-500
                rounded-md pr-3 
                placeholder:text-lg placeholder:text-slate-100 
              "
            type="text"
            name="search"
            placeholder="اسم المدرج او السكشن ..."
            defaultValue={searchParams.get("search")?.toString()}
          />
        </form>
      </div>
    </div>
  );
}
