import { Link, useParams } from "react-router-dom";
import { Loader, ReviewCard } from "../../components/index";
import { useFetch } from "../../hooks/useFetch";
import { useStore } from "../../hooks/useStore";
import { apiUrl } from "../../common/constants";

export const ProductPage = () => {
  let { id } = useParams();

  const { data, isLoading, hasError } = useFetch(apiUrl);
  const addToCart = useStore((state) => state.addToCart);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <div>Error when trying to load the page</div>;
  } else {
    const product = data.find((item) => item.id === id);

    if (!product) {
      content = <div>Product not found</div>;
    } else {
      //Price handling
      const isDiscounted = product.price !== product.discountedPrice;
      const discountAmount = (product.price - product.discountedPrice).toFixed(0);

      content = (
        <>
          <div className="flex flex-col flex-grow mx-auto w-5/6 max-w-7xl">
            <Link to="/">
              <p className=" mt-20 ms-6 xl:ms-32 text-gray-950 hover:text-pink-500 hover:underline cursor-pointer">
                &lt; Back
              </p>
            </Link>
            <div className="">
              <section className="flex flex-col md:justify-center mt-6 md:flex-row">
                <div className="mx-auto md:mx-0">
                  <img className="h-96 w-96 object-cover" src={product.image.url} alt={product.image.alt} />
                </div>
                <div className="py-5 md:pt-0 md:ms-8 ">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-90">{product.title}</h5>
                  <div className="flex items-center my-3">
                    <span className="flex flex-row items-center bg-light-pink text-purple-pink text-xs font-semibold px-2 py-0.5 rounded">
                      {" "}
                      <svg
                        className="w-3 h-3 text-purple-pink me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      {product.rating}
                    </span>
                  </div>
                  <p className="pt-2 pb-4 max-w-96">{product.description}</p>

                  <div className="flex md:flex-col items-end md:items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span>
                        {isDiscounted && (
                          <span className="text-xl md:text-xl line-through text-gray-500 font-extralight dark:text-white">
                            {product.price},-
                          </span>
                        )}
                      </span>
                      <div className="flex flex-col md:flex-row">
                        <span className="text-xl md:text-xl font-bold text-gray-900 pe-4 dark:text-white">
                          {product.discountedPrice},-
                        </span>
                        <span className="text-xl md:text-xl text-purple-pink font-light">
                          {isDiscounted && <span>(You save {discountAmount},-)</span>}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      href="#"
                      className="md:w-52 md:mt-8 text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </section>
              <section className="mx-auto max-w-3xl">
                <div className="">
                  <h2 className="text-2xl font-medium tracking-tight text-gray-90 mt-4">Reviews</h2>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((item) => <ReviewCard data={item} key={item.id} />)
                  ) : (
                    <p>No reviews yet on this product</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <main>
      <section>{content}</section>
    </main>
  );
};
