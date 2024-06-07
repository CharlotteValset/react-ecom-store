import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InfoMessage } from "../../components/InfoMessage";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Full name should be at least 3 characters.").required(),
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    subject: yup.string().min(3, "Subject should be at least 3 characters.").required(),
    messageBody: yup.string().min(3, "Message should be at least 3 characters.").required(),
  })
  .required();

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [infoMessage, setInfoMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setInfoMessage("Message sent! We'll be in touch soon.");
    setTimeout(() => {
      setInfoMessage("");
    }, 4000);
  };

  return (
    <main>
      <Helmet>
        <title>Contact us | Vivance</title>
        <meta name="description" content="Contact page for Vivance E-commerce store" />
      </Helmet>
      <h1 className="text-4xl text-center text-purple-pink font-semibold mt-24 mb-5">Contact us</h1>
      <p className="text-2xl text-gray-600 text-center font-light my-4 w-5/6 max-w-sm mx-auto">
        Please let us know if theres is anything we can help you with!
      </p>
      <div className="py-6 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-5/6 max-w-xs">
          <div className="mb-5">
            <label htmlFor="fullName" className="block mb-1 text-lg text-gray-900 dark:text-white">
              Full name
            </label>
            <input
              {...register("fullName", {
                required: true,
                minLength: 3,
              })}
              id="fullName"
              type="text"
              className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <p className="text-sm text-purple-pink">{errors.fullName?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-1 text-lg text-gray-900 dark:text-white">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              id="email"
              type="email"
              className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <p className="text-sm text-purple-pink">{errors.email?.message}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="subject" className="block mb-1 text-lg text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              {...register("subject", {
                required: true,
                minLength: 3,
              })}
              id="subject"
              type="text"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <p className="text-sm text-purple-pink">{errors.subject?.message}</p>
          </div>
          <div className="">
            <label htmlFor="message" className="block mb-1 text-lg text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              {...register("messageBody", {
                required: true,
                minLength: 3,
              })}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            <p className="text-sm text-purple-pink">{errors.messageBody?.message}</p>
          </div>
          {infoMessage && <InfoMessage message={infoMessage} />}
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
    </main>
  );
};
