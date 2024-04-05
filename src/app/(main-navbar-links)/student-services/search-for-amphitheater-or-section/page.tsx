import SearchBar from "@/app/ui/search-for-amphitheater-or-section/search-bar";
import SearchResult from "@/app/ui/search-for-amphitheater-or-section/search-result";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import { Suspense } from "react";

interface props {
  searchParams?: {
    search?: string;
  };
}

export default function Page({ searchParams }: props) {
  const search = searchParams?.search;

  return (
    <section>
      <MainPageHeader text="الهيكل الداخلي للمبني" />
      <div className=" px-2 sm:px-0">
        <SearchBar />
      </div>
      <Suspense
        key={search}
        fallback={
          <div className=" bg-slate-600">
            <p>loading</p>
          </div>
        }
      >
        <SearchResult search={search} />
      </Suspense>
    </section>
  );
}
