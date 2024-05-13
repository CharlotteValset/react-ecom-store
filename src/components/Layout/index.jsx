import { Header } from "./Header";
import { Footer } from "./Footer";

import { Hero } from "../Hero";
import { ProductCard } from "../Card";
import { SearchBar } from "../../components/SearchBar";


export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <SearchBar />
      <ProductCard />
      <Footer />
    </div>
  );
};
