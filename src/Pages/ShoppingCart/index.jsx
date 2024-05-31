import { Link, useNavigate } from "react-router-dom";
import { CartProduct } from "../../components/CartProduct";
import { useStore } from "../../hooks/useStore";
import { useState } from "react";
import { InfoMessage } from "../../components/InfoMessage";

export const ShoppingCart = () => {
  const cart = useStore((state) => state.cart);
  const totalPrice = cart.reduce((sum, product) => sum + product.discountedPrice * product.quantity, 0).toFixed(2);
  const clearCart = useStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [infoMessage, setInfoMessage] = useState("");

  const handleCheckout = (event) => {
    event.preventDefault();
    if (cart.length === 0) {
      setInfoMessage("Please add items to your cart!");
      setTimeout(() => {
        setInfoMessage("");
      }, 3000);
    } else {
      clearCart();
      navigate("/checkoutSuccessPage");
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <main className="flex flex-col flex-grow">
      <h1 className="text-4xl text-center text-purple-pink font-semibold mt-20 mb-8">Shopping cart</h1>
      {infoMessage && <InfoMessage message={infoMessage} />}
      <div className="flex flex-col flex-grow sm:flex-row sm:max-w-screen-lg sm:mx-auto sm:gap-20">
        <section className="flex flex-col mx-auto">
          {cart.length > 0 ? (
            cart.map((product) => <CartProduct key={product.id} product={product} />)
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center my-4 mx-auto w-72 h-28 shadow-xl bg-white">
              <p className="tex">Your cart is empty</p>
              <Link to="/" className="text-purple-pink hover:underline">
                Continue shopping
              </Link>
            </div>
          )}
          <CartProduct />
        </section>
        <section className="mt-1 mx-auto w-full max-w-72">
          <div className="flex flex-row justify-between w-48 mx-auto">
            <h5 className="text-xl font-medium tracking-tight py-1 my-3 text-gray-900 dark:text-white">Your total</h5>
            <p className="text-xl font-normal py-1 my-3">$ {totalPrice}</p>
          </div>
          <div className="text-center mt-4 flex flex-col gap-3">
            <button
              className=" text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-5 py-2.5 text-center"
              onClick={handleCheckout}
            >
              Proceed to checkout
            </button>
            {cart.length > 0 && (
              <button
                className=" text-gray-950 bg-white hover:bg-pink-500 hover:text-white border border-gray-950 hover:border-pink-500 font-medium text-sm px-5 py-2.5 text-center"
                onClick={handleClearCart}
              >
                Clear cart
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
