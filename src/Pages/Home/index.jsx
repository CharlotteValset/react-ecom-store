import { Hero } from "../../components/Hero";
import { SearchBar } from "../../components/SearchBar";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <ProductCard />
    </>
  );
};
