import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sectionBg from '../../assets/Farmerbg.jpg';

const TransformAgriculture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative isolate" ref={ref}>
      {/* Section with scroll animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative bg-green-900 bg-opacity-70 text-white h-[20rem] flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Transforming Agriculture
          </h1>
          <p className="text-sm md:text-base mb-6">
            Let’s work together to make agriculture smarter, sustainable, and more profitable for everyone.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-300 transition">
              Book Demo
            </button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-300 transition">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-70 z-0" />
      </motion.section>
    </div>
  );
};

export default TransformAgriculture;
