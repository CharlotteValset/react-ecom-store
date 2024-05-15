import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://charlottevalset-portfolio.netlify.app/" className="hover:underline hover:text-pink-500">
          Designed and developed by Charlotte Valset
        </a>
      </span>
      <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
        <li>
          <Link to="/" className="hover:underline hover:text-pink-500 me-4 md:me-6">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shoppingCart" className="hover:underline hover:text-pink-500 me-4 md:me-6">
            Shopping cart
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline hover:text-pink-500">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
