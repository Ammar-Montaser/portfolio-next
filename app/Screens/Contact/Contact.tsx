"use client";
import React, { FormEvent } from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("Content-Type", "application/json");

    const response = await fetch(
      "https://portfolio-server-cztg.onrender.com/message",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="relative h-full bg-neutral-100 dark:bg-[#121212]">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          LET'S GET IN TOUCH
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-lg lg:mb-16">
          Scrolled until here? I would love to get to know you, leave me a
          message and I'll get back to you. If you're shy, you can leave an
          anonymous message.
        </p>
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-black dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="What's your name?"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Got a business proposal, an advice, or want to leave an anonymous note? Leave a message ... "
              required
            ></textarea>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            {" "}
            <button
              type="submit"
              className="text-md hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-BG px-5 py-3 text-center font-medium text-black focus:outline-none focus:ring-4 dark:text-white"
            >
              Send message
            </button>{" "}
            <span className="mx-auto mt-5 text-center text-black dark:text-white">
              {result}
            </span>
          </div>{" "}
          <h2 className="text-md mx-auto text-center font-light italic text-black dark:text-white">
            "Aim for the moon. If you miss you'll land among the stars"
          </h2>
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default Contact;
