import { Hero, SearchBar, ProductCard, Loader } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { apiUrl } from "../../common/constants";
import { useState } from "react";

const search = (data, term) => {
  return data.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
};

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(apiUrl);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredResults = search(data, term);
    setSearchResults(filteredResults);
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <div>Error when trying to load the page</div>;
  } else {
    content = data.map((product) => <ProductCard data={product} key={product.id} />);
  }

  return (
    <main>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <div className="mt-10 flex flex-wrap gap-8 max-w-7xl mx-auto px-9">
        {" "}
        {searchTerm ? searchResults.map((product) => <ProductCard data={product} key={product.id} />) : content}
      </div>
    </main>
  );
};
