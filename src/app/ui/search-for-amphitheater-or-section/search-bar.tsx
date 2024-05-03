"use client";
import { useState } from "react";
import InputAutocomplete from "./input-autocomplete";
import SearchInput from "./search-input";

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
  const [isInputInFocus, setIsInputInFocus] = useState(false);

  const handleInputFocus = () => {
    setIsInputInFocus(true);
  };
  const handleInputOutOfFocus = () => {
    setTimeout(() => setIsInputInFocus(false), 250);
  };

  return (
    <div className=" container mx-auto mt-6">
      <div>
        <form
          className=" w-full bg-slate-400 rounded-md p-2 relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <SearchInput
              onInputFocus={handleInputFocus}
              onInputBlur={handleInputOutOfFocus}
              searchInputValue={searchInputValue}
              onSearchInputChange={onSearchInputChange}
            />
            <InputAutocomplete
              isInputInFocus={isInputInFocus}
              changeInputValue={onSearchInputChange}
              searchValue={searchInputValue}
            />
          </div>
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
