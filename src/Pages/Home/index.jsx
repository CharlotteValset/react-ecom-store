import { Helmet } from "react-helmet-async";
import { Hero, SearchBar, ProductCard, Loader } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { apiUrl } from "../../common/constants";
import { useState } from "react";

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(apiUrl);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = search(data, term);
      setSearchResults(filteredResults);
    }
  };

  const search = (data, term) => {
    return data.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
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
      <Helmet>
        <title>Home | Vivance</title>
        <meta name="description" content="Vivance E-commerce store - Shop the latest trends" />
      </Helmet>
      <Hero />
      <SearchBar onSearch={handleSearch} searchResults={searchResults} />
      <div className="mt-10 flex flex-wrap gap-8 max-w-7xl mx-auto px-9">{content}</div>
    </main>
  );
};
