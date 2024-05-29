import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../../hooks/useStore";

export const HeaderNav = () => {
  const cartItemCount = useStore((state) => state.cartItemCount);
  const loadCart = useStore((state) => state.loadCart);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <nav className="bg-background-white fixed w-full z-10 top-0 start-0 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl text-gray-950 jost-logo-text whitespace-nowrap dark:text-white">
            Vivance
          </span>
        </Link>
        <ul className="flex gap-4">
          <li className="nav-icon">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-icon">
            <Link to="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                />
              </svg>
            </Link>
          </li>
          <li className="relative nav-icon cart-icon">
            <Link to="/shoppingCart">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItemCount}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
