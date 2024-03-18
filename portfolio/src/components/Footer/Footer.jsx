import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

const Footer = ({ footerRef }) => {
  return (
    <div
      className="h-96 bg-gray-900 border-t border-gray-700 flex flex-col items-center"
      id="footer"
      ref={footerRef}
    >
      <h4 className="text-white text-xl mt-6">Redes sociales y laborales</h4>
      <div className="flex h-32 w-full items-center justify-evenly">
        <a
          target="blank"
          href="https://www.linkedin.com/in/tomas-salvador-tissoni-91823a180/"
        >
          <FaLinkedin size={32} color="white" />
        </a>
        <a target="blank" href="https://github.com/TissoniTomas">
          <FaGithub size={32} color="white" />
        </a>
        <a
          target="blank
       "
          href="https://www.instagram.com/tissonitomas9?igsh=Y<l4MTYxNjQ5dW9o"
        >
          {" "}
          <FaInstagram size={32} color="white" />
        </a>
      </div>

      <h5 className="text-white text-xl">Curriculum</h5>
      <div className="my-10">
       <a target="blank" href="https://drive.google.com/file/d/1wqIjv07Dm1RvhpDZwmqwZQpo9PVumdC9/view?usp=sharing"> <FaRegFilePdf size={32} color="white"/> </a>
      </div>

      <h6 className="text-gray-700">Tomas Tissoni 2024 ©</h6>
    </div>
  );
};

export default Footer;
