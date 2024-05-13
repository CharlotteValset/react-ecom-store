import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "../Hero";
import { ProductCard } from "../../components/Card";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ProductCard />
      <Footer />
    </div>
  );
};
