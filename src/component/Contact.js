import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500 pt-8">
            Contact
          </p>
          <p className="py-6">Submit the from below to get touch with me</p>
        </div>
        <div className="flex justify-center items-center pb-12">
          <form
            action="https://getform.io/f/67220b73-d502-4040-b3ba-a071f5c6dacb"
            method="post"
            className="flex flex-col w-full md:w1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              placeholder="Enter Your message"
              name="message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex  items-center rounded-md hover:scale-110 duration-300">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
