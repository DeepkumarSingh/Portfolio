import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-44 h-1 bg-pink-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’m always open to professional opportunities, collaborations, or meaningful conversations. Feel free to reach out via email.
        </p>
      </div>

      {/* Email Icon Link with Hover Effect */}
<div className="flex flex-col items-center justify-center mt-6 space-y-2">
  <a
    href="mailto:deep01968@gmail.com"
    className="text-white text-4xl transform transition-transform duration-300 hover:scale-125 hover:text-pink-500"
    aria-label="Send Email"
  >
    <FaEnvelope />
  </a>
  <span className="text-sm text-gray-400">Click here to send an email</span>
</div>

    </section>
  );
};

export default Contact;
