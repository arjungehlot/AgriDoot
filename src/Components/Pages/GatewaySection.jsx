import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPlayCircle,
  FaLightbulb,
  FaUsers,
  FaRegNewspaper,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const features = {
  left: [
    {
      icon: FaPlayCircle,
      title: "Watch How It Works",
      desc: "See our platform in action through a short video demo on mobile.",
    },
    {
      icon: FaLightbulb,
      title: "Gyaan Hub",
      desc: "Access practical guides, tips, and tutorials to make informed decisions.",
    },
    {
      icon: FaUsers,
      title: "Join Our Community",
      desc: "Connect with fellow farmers, experts, and agri-startups.",
    },
  ],
  right: [
    {
      icon: FaRegNewspaper,
      title: "Read Blogs & Insights",
      desc: "Stay updated with the latest trends, innovations, and success stories.",
    },
    {
      icon: FaBookOpen,
      title: "Real Use Cases",
      desc: "Discover how farmers and partners are benefiting in real life.",
    },
    {
      icon: FaArrowRight,
      title: "Sign Up for Early Access",
      desc: "Be the first to try new features and receive exclusive updates.",
    },
  ],
};

const FeatureCard = ({ Icon, title, desc, custom, direction }) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={custom}
      className="border border-green-600 p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition mb-4 w-full max-w-md"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-start py-2 gap-4">
        <motion.div whileHover={{ rotate: 10 }}>
          <Icon className="text-green-600 text-2xl mt-1" />
        </motion.div>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-gray-600 mt-3 text-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const GatewaySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleControls = useAnimation();

  useEffect(() => {
    if (inView) {
      titleControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 },
      });
    }
  }, [inView, titleControls]);

  return (
    <section ref={ref} className="py-16 px-4 md:px-12 md:mx-24 bg-white">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={titleControls}
        className="text-2xl md:text-4xl font-bold text-center text-green-700 mb-12"
      >
        Your Gateway To Smart Farming App : AgriDoot
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Features */}
        <div className="flex flex-col items-end">
          {features.left.map(({ icon, title, desc }, i) => (
            <FeatureCard
              key={`left-${i}`}
              Icon={icon}
              title={title}
              desc={desc}
              custom={i}
              direction="left"
            />
          ))}
        </div>

        {/* Center Video */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[320px] md:w-[420px] lg:w-[500px]"
        >
          <video
            src="https://agridoot.com/wp-content/uploads/2025/06/harshittt-2.mp4"
            className="w-full rounded-xl"
            autoPlay
            loop
            muted
            playsInline
            title="AgriDoot App Demo"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col items-start">
          {features.right.map(({ icon, title, desc }, i) => (
            <FeatureCard
              key={`right-${i}`}
              Icon={icon}
              title={title}
              desc={desc}
              custom={i}
              direction="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
