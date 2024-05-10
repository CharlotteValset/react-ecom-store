import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductDetails } from "../Pages/ProductPage"

export const Layout = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};
