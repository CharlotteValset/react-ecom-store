import { Header } from "./Header";
import { Footer } from "./Footer";
import { CheckoutSuccess } from "../../components/Pages/CheckoutSuccessPage";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CheckoutSuccess />
      <Footer />
    </div>
  );
};
