import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Layout } from "./components/Layout/index";
import { Homepage, ProductDetails, ContactForm, ShoppingCart, CheckoutSuccess } from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<ProductDetails id />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="checkoutPage" element={<ShoppingCart />} />
          <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
