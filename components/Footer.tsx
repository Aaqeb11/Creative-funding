import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logoImage from "../public/dollar1.png"; // Adjust path as needed

export const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className=" h-1  mb-10 bg-gray-400 shadow-blurred-white"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Contact Information */}
          <div className="flex flex-col items-center md:items-start gap-1 text-gray-400 mb-6 md:mb-0">
            <span className="text-sm md:text-base">+123456789</span>
            <span className="text-sm md:text-base">EMAIL@GMAIL.COM</span>
          </div>

          {/* Center Section - Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src={logoImage}
              alt="Logo"
              width={120} // Adjust size as needed
              height={40}
              priority
            />
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-6 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-green-600" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl hover:text-green-600" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-400 text-sm mt-6 lg:ml-20">
          ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
