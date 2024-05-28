import { useState } from "react";
import { DisplaySearchResult } from "../DisplaySearchResult";

export const SearchBar = ({ onSearch, searchResults }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setInputValue(term);
    onSearch(term);
  };

  return (
    <>
      <p className="text-xl text-center mt-10 text-dark-gray">Find what you are looking for</p>
      <form className="flex items-center justify-center max-w-sm mx-auto mt-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="flex flex-row w-72 xs:w-96">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full ps-3 p-2.5 "
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="p-2.5 text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-3 py-2 text-center"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      <div>
        {searchResults.length === 0 && inputValue.trim() !== "" ? (
          <p className="mx-auto w-72 xs:w-96 px-1 py-2 text-sm">No results matched</p>
        ) : (
          searchResults.map((product) => <DisplaySearchResult data={product} key={product.id} />)
        )}
      </div>
    </>
  );
};
