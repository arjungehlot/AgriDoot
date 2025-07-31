import About from "../Pages/About";
import DownloadApp from "../Pages/DownloadApp";
import FaqAndNews from "../Pages/FaqAndNews";
import FeatureShowcaseSection from "../Pages/FeatureShowcase";
import GatewaySection from "../Pages/GatewaySection";
import ServicesSection from "../Pages/ServicesSection";
import SmartIotSection from "../Pages/SmartIotSection";
import TransformAgriculture from "../Pages/TransformAgriculture";
import VideoCarousel from "../Pages/VideoCarosel";
import WeatherForecastingSection from "../Pages/Weatherforcasting";
import BlogSection from "../Pages/BlogSection"
import CTASection from "../Pages/CTASection";
import StatsSection from "../Pages/StatsSection";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="w-full">
      {/* Desktop Video - hidden on mobile */}
      <div className="hidden md:block md:mt-[-35px] lg:mt-[-55px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen"
        >
          <source src="https://agridoot.com/wp-content/uploads/2025/06/agridoot-carection-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile Video - hidden on desktop */}
      <div className="md:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-screen object-cover"
        >
          <source src="https://agridoot.com/wp-content/uploads/2025/06/agridoot-phone-size-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/*Remaning pages */}
      <About />
      <DownloadApp />
      <GatewaySection />
      <WeatherForecastingSection />
      <FeatureShowcaseSection />
      <TransformAgriculture />
      <ServicesSection />
      <SmartIotSection />
      <FaqAndNews />
      <VideoCarousel />
      <BlogSection />
      <CTASection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;
