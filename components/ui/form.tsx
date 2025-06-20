
import React from "react";

const Form = () => {
  return (
    <div className="max-w-md w-full bg-gray-100 p-8 rounded-[2rem] text-black shadow-lg">
      <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
      <p className="text-sm text-gray-700 mb-6">
        Reach out with inquiries about tickets, partnerships, or event details.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-400 bg-transparent outline-none placeholder-gray-500 text-sm py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-400 bg-transparent outline-none placeholder-gray-500 text-sm py-2"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full border-b border-gray-400 bg-transparent outline-none placeholder-gray-500 text-sm py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full border-b border-gray-400 bg-transparent outline-none placeholder-gray-500 text-sm py-2 h-24 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-fit px-6 py-2 text-white text-sm font-medium rounded-full bg-[#0147FF] hover:brightness-110"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;

