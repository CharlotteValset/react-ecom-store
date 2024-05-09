export const CheckoutSuccess = () => {
  return (
    <>
      <h1 className="text-4xl text-center text-purple-pink font-semibold mt-24 mb-5">Checkout Success!</h1>
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#575757"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <p className="text-2xl text-gray-600 text-center font-light my-8 w-5/6  mx-auto">
        Your order will be delivered in a few days
      </p>
    </>
  );
};