import { Hero, SearchBar, ProductCard, Loader } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { apiUrl } from "../../common/constants";

export const Home = () => {
  const { data, isLoading, hasError } = useFetch(apiUrl);

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
      <SearchBar />
      <div className="mt-10 flex flex-wrap gap-8 max-w-7xl mx-auto px-9">{content}</div>
    </main>
  );
};
