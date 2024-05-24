import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <div className="mt-62 mx-auto w-full sm:w-64 shadow-xl bg-white">
      <div className="flex flex-col">
        <div className="">
          <img className="w-full h-64 object-cover" src={data.image.url} alt={data.image.alt} />
        </div>
        <div className="py-3 px-2 m-2">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="flex flex-row items-center bg-light-pink text-purple-pink text-xs font-semibold px-2 py-0.5 rounded">
              <svg
                className="w-3 h-3 text-purple-pink me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              {data.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900 pe-4 dark:text-white">{data.discountedPrice},-</span>
              <span className="text-base line-through text-gray-500 font-extralight dark:text-white">
                {data.price},-
              </span>
            </div>
            <Link
              to={`/productPage/${data.id}`}
              className=" text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-3 py-2 text-center"
            >
              View product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
