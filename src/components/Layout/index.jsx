import { Header } from "./Header";
import { Footer } from "./Footer";
import { CheckoutSuccess } from "../Pages/CheckoutSuccessPage"

export const Layout = () => {
  return (
    <div>
      <Header />
      <CheckoutSuccess />
      <Footer />
    </div>
  );
};
