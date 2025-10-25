"use client";
import { useState } from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  // helper function to shorten long text
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo">What I offer</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo">My Services</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a fullstack developer and AI prompt engineer with over 2 years of experience.
      </motion.p>

      {/* --- Service Cards --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {truncateText(description, 120)}
            </p>

            <button
              onClick={() => openModal({ title, description, link })}
              className="flex items-center gap-2 text-sm mt-5 text-pink-600 hover:underline"
            >
              Read more
              <Image src={assets.right_arrow} alt="icon" className="w-4" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Modal --- */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white dark:bg-darkTheme rounded-2xl shadow-xl w-11/12 max-w-lg p-8 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-pink-600 text-xl dark:text-white font-bold"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-6 mb-6">
              {selectedService.description}
            </p>

            {selectedService.link && (
              <a
                href={selectedService.link}
                className="text-pink-600 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Services;
