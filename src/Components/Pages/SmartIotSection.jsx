import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SmartIotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="py-12 px-4 bg-white"
    >
      <div className="text-center mb-8">
        <h2 className="text-sm text-gray-600 font-semibold">Solutions</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-green-700">
          Smart IoT Farming Solution
        </h3>
      </div>

      <div className="flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <img
            src="https://agridoot.com/wp-content/uploads/2025/06/agridoot1.jpg"
            alt="Smart IoT Farming"
            className="w-full h-auto rounded-3xl md:rounded-[60px] object-cover"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SmartIotSection;
