import React from "react";
import userData from "../constants/data";

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          Contact
        </h1>
      </div>
    

      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Get in touch</h2>
            <div className="text-gray-700 mt-8">
              Got something to say? or perhaps something to ask? Fill in the details or send me an <span className="underline">email</span> instead. I&apos;ll get back ASAP.
            </div>
          </div>
          <div className="mt-8 text-center flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </div>
        </div>
              <form action="https://submit-form.com/N6nlOfcD">
                  <div className="">
                      <div>
                          <span className="uppercase text-sm text-gray-600 font-bold">Name</span>
                          <input name="name" className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                              type="text" placeholder="" required />
                      </div>
                      <div className="mt-8">
                          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                          <input name="mail" className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                              type="text" required />
                      </div>
                      <div className="mt-8">
                          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                          <textarea
                              name="message"
                              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                      </div>
                      <div className="mt-8">
                          <button type="submit"
                              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                              Send Message
                          </button>
                      </div>
                  </div>
              </form>
      </div>
    
    </section>
  );
}