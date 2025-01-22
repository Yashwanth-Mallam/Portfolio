"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa"; // Import icons for social media links

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add logic here to send form data to an API or email service

    setFormStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center w-3/4 rounded-lg bg-gray-800 p-6">
      <div className="max-w-3xl w-full bg-gray-500 rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-900 mb-6">
          Contact Me
        </h1>
        <hr className="border-t-4" />
        {/* Social Media Links Section */}
        <div className="flex justify-center space-x-4 mt-4 mb-6">
          <a
            href="https://github.com/Yashwanth-Mallam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-mallam-55551a261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/yashwanth_patel8?igsh=am1ia3Q2MnJya2d6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="mailto:yashwanthmallam345@gmail.com"
            className="text-white hover:text-orange-600"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://wa.me/9381828271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-800"
          >
            <FaPhoneAlt size={30} />
          </a>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {formStatus && (
            <div className="mb-4 text-green-600 text-center">
              <p>{formStatus}</p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your message"
              required
              rows={5}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
