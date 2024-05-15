import { CartProduct } from "../../CartProduct";

export const CheckoutPage = () => {
  return (
    <>
      <div className="mt-24 flex flex-col sm:flex-row sm:max-w-screen-lg sm:mx-auto sm:gap-20">
        <section className="flex flex-col mx-auto">
          <h1 className="text-2xl text-center">Shopping cart</h1>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </section>
        <section className="my-4 mx-auto w-1/2 max-w-72 h-32">
          <div className="flex flex-row justify-between w-48 mx-auto">
            <h5 className="text-xl font-medium tracking-tight py-1 my-3 text-gray-900 dark:text-white">Your total</h5>
            <p className="text-xl font-normal py-1 my-3">$ 599</p>
          </div>
          <div className="text-center mt-4">
            <a
              href="#"
              className=" text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-5 py-2.5 text-center"
            >
              Proceed to checkout
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
