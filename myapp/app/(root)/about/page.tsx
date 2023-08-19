import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {MdWork} from 'react-icons/md'

const page = () => {
  return (
    <div>
      <h1 className="head-text mb-10">About</h1>
      <article className="flex w-full flex-col rounded-xl bg-gray-800 p-7">
        <h1 className="font-bold mb-6 text-orange-300 head-text">Threads Recreated: A Clone that Resembles Innovation</h1>
        <p className="text-white mb-4">
          Crafted with Innovation and Powered by Ingenuity, Our Threads Clone
          Brings Together the Best
        </p>
        <p className="text-white mb-2">
          🚀 NEXTJS 13.4: Seamlessly dynamic and efficient, driving the
          front-end experience.
        </p>
        <p className="text-white mb-2">
          📘 TypeScript: Elevating development with strong typing and enhanced
          collaboration.
        </p>
        <p className="text-white mb-2">
          📦 MongoDB & Mongoose: Empowering robust data storage and retrieval,
          shaping the core of our creation.
        </p>
        <p className="text-white mb-2">
          🎨 Tailwind CSS: Creating a visually appealing canvas thats as
          flexible as your imagination.
        </p>
        <p className="text-white mb-2">
          🖼️ UploadThing: Enabling smooth media uploads, letting your creativity
          flow effortlessly.
        </p>
        <p className="text-white mb-2">
          🌟 shadcn/ui: Adding that touch of magic, enhancing user interface
          interactions.
        </p>
        <p className="text-white mb-2">
          🔐 Zod: Keeping data validation airtight, because precision matters.
        </p>
        <p className="text-white mb-2">
          📝 React Hook Form: Simplifying form management for a seamless user
          experience.
        </p>

        <div className="flex justify-center items-center mt-10">
          <a
            href="https://github.com/BhargavaTejaN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-300"
          >
            <FaGithub style={{ fontSize: "3.0rem", cursor: "pointer" }} className="mr-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhargava-teja-narasani-753615217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-orange-300"
          >
            <FaLinkedin style={{ fontSize: "3.0rem", cursor: "pointer" }} className="mr-6" />
          </a>
          <a
            href="https://unrivaled-crumble-c11369.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-orange-300"
          >
            <MdWork style={{ fontSize: "3.0rem", cursor: "pointer" }} />
          </a>
        </div>
      </article>
    </div>
  );
};

export default page;
