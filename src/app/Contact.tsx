"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactMe() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-900 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 bg-gray-600 p-8 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Contact</h1>
            <hr className="border-t-2 border-purple-400 mb-4" />
            <p className="mb-6">Do not hesitate to contact me at:</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-2">
                <FaEnvelope className="mt-1" />
                <div>
                  <div className="font-bold">Email:</div>
                  <div>yashwanthmallam345@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <FaPhoneAlt className="mt-1" />
                <div>
                  <div className="font-bold">Phone:</div>
                  <div>+91 93818 28271</div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1" />
                <div>
                  <div className="font-bold">Location:</div>
                  <div>Hyderabad, Telangana-508213, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Social Icons */}
        <div className="flex md:flex-col justify-center items-center px-4 space-x-6 md:space-x-0 md:space-y-6 bg-gray-500 text-white">
          <a
            href="https://github.com/Yashwanth-Mallam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-mallam-55551a261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/yashwanth_patel8?igsh=am1ia3Q2MnJya2d6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://wa.me/9381828271"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-gray-600 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Send a Message
          </h2>

          {formStatus && (
            <div className="mb-4 text-green-400 text-center">
              <p>{formStatus}</p>
            </div>
          )}

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Required Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="a022658f-006d-453e-9e10-2ce3fa043267"
            />

            {/* Honeypot for Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter the subject"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
                required
                minLength={10} // Prevents "hi" spam
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
