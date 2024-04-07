"use client";
import { useState } from "react";
import SearchBar from "./search-bar";
import SearchResult from "./search-result";

export default function SearchForAmphitheaterOrSection() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isInputHasInvalidValue, setIsInputHasInvalidValue] = useState(false);

  const handleSearchInputChange = (searchInput: string) => {
    setSearchInputValue(searchInput);
  };

  const handleInvalidInputValue = (isInvalid: boolean) => {
    setIsInputHasInvalidValue(isInvalid);
  };

  return (
    <>
      <div className=" px-2 sm:px-0">
        <SearchBar
          searchInputValue={searchInputValue}
          onSearchInputChange={handleSearchInputChange}
          isInputHasInvalidValue={isInputHasInvalidValue}
        />
      </div>
      <SearchResult
        checkInvalidInputValue={handleInvalidInputValue}
        search={searchInputValue.trim()}
      />
    </>
  );
}
