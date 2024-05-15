import { Header } from "./Header";
import { Footer } from "./Footer";

import { CheckoutPage } from "../Pages/CheckoutPage";
import { Hero } from "../Hero";
import { ProductCard } from "../Card";
import { SearchBar } from "../../components/SearchBar";
import { ProductDetails } from "../Pages/ProductPage";
import { CheckoutSuccess } from "../Pages/CheckoutSuccessPage";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CheckoutPage />
      <Hero />
      <SearchBar />
      <ProductCard />
      <ProductDetails />
      <CheckoutSuccess />
      <Footer />
    </div>
  );
};
