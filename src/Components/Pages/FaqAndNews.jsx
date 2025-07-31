import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FaqAndNews = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);
  const newsRef = useRef(null);

  const faqInView = useInView(faqRef, { once: true });
  const newsInView = useInView(newsRef, { once: true });

  const faqItems = [
    {
      question: "What is AgriDoot?",
      answer:
        "AgriDoot is a smart farming solution powered by IoT, AI, and GIS to help farmers manage their crops efficiently.",
    },
    {
      question: "How does the mobile app help detect plant diseases?",
      answer:
        "The app uses AI to analyze images of crops and detect symptoms of diseases, offering solutions instantly.",
    },
    {
      question: "How does AgriDoot help in crop monitoring?",
      answer:
        "It provides real-time data using sensors and satellite imagery to help monitor crop health and growth.",
    },
    {
      question: "Is AgriDoot suitable for all types of crops?",
      answer:
        "Yes, AgriDoot is designed to support a wide range of crops by customizing recommendations.",
    },
    {
      question: "Can AgriDoot predict weather conditions?",
      answer:
        "Yes, it offers weather predictions to help farmers plan irrigation and harvesting.",
    },
    {
      question: "How does AgriDoot assist in resource management?",
      answer:
        "It helps optimize water, fertilizer, and pesticide usage to reduce cost and improve yield.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f9f7] py-16 px-4">
      {/* FAQs Section */}
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <p className="text-gray-600">FAQs</p>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">Common Questions</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-5 rounded-md shadow-md border transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-lg font-medium text-gray-700 focus:outline-none"
              >
                <span>{item.question}</span>
                <span
                  className={`transform transition-transform duration-300 text-xl font-bold ${
                    openIndex === index ? 'rotate-45 text-green-600' : 'rotate-0 text-gray-500'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* News Section */}
      <motion.div
        ref={newsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={newsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8">
          <p className="text-gray-600">News And Media</p>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">Latest News</h2>
        </div>

        <article className="max-w-6xl h-auto md:h-60 mx-auto bg-white rounded-l-4xl rounded-r-lg shadow-md flex flex-col md:flex-row overflow-hidden border">
          <img
            src="https://agridoot.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-21-at-10.08.16-2-862x1024-1.jpeg"
            alt="AgriDoot at Lucknow Agro Exhibition"
            loading="lazy"
            className="w-full md:w-[30%] object-cover"
          />
          <div className="p-6 text-left flex-1">
            <h3 className="text-3xl font-medium text-green-700 mb-2">
              AgriDoot Shines At Lucknow Agro Exhibition
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              At the Lucknow Agro Exhibition, AgriDoot grabbed everyone’s attention with its IoT,
              AI, and GIS-powered smart farming solutions. Through its mobile app and AI chatbot,
              farmers are receiving accurate information on crops, weather, and soil.
            </p>
            <p className="text-blue-600 font-medium cursor-pointer hover:underline">
              Click Here to Learn More
            </p>
            <p className="text-gray-700 mt-1">Join Us and Make Farming Smarter!</p>
          </div>
        </article>

        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-full transition">
            Read More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqAndNews;
