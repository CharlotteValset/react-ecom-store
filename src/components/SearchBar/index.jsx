export const SearchBar = () => {
  return (
    <>
      <form className="flex items-center max-w-sm mx-auto mt-24">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="flex flex-row w-80">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full ps-3 p-2.5 "
            placeholder="Search"
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
    </>
  );
};
