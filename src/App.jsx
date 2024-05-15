import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Layout } from "./components/Layout/index";
import { Home, ProductPage, Contact, ShoppingCart, CheckoutSuccessPage } from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<ProductPage id />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkoutSuccessPage" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
