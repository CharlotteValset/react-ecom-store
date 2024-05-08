export const ContactForm = () => {
  return (
    <>
      <h1 className="text-4xl text-center text-purple-pink font-semibold mt-24 mb-5">Contact us</h1>
      <p className="text-2xl text-gray-600 text-center font-light my-8 w-5/6 max-w-sm mx-auto">
        Please let us know if theres is anything we can help you with!
      </p>
      <div className="m-auto max-w-2xl py-6">
        <form className="w-5/6 max-w-sm mx-auto">
          <div className="mb-5">
            <label for="fullName" className="block mb-2 text-lg text-gray-900 dark:text-white">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-lg text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label for="subject" className="block mb-2 text-lg text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div>
              <label for="message" class="block mb-2 text-lg text-gray-900 dark:text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
          </div>
          <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="text-white bg-gray-950 hover:bg-pink-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send message
          </button>
          </div>
        </form>
      </div>
    </>
  );
};
