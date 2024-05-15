import Watch from "../../assets/images/watch.jpg";
import { QuantityCounter } from "../QuantityCounter";

export const CartProduct = () => {
  return (
    <>
      <div className="my-4 mx-auto w-72 shadow-xl bg-white">
        <div className="flex items-center justify-start w-full">
          <img className="w-24 h-24 object-cover" src={Watch} alt="product image" />
          <div className="flex flex-col basis-3/4">
            <h5 className="text-xl font-medium tracking-tight py-1 ms-8 text-gray-900 dark:text-white">Watch</h5>
            <div className="flex flex-row gap-8 items-center">
              <QuantityCounter />
              <a className="py-1 delete-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
