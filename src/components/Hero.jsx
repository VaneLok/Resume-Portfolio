import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-10 h-10 rounded-full bg-[#8B4A87]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#8B4A87] to-[#754073]" />
        </div>

        <div className="z-10">
          <h1 className={`text-hover-active ${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <TypeAnimation
              sequence={["Jennifer", 1000, "a Woman in tech", 1000, "a Designer", 1000, "Sec+ Certified", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8B4A87] inline-block"
            />
          </h1>
          <p
            className={`${styles.heroSubText} mt-5 text-hover-active rounded-xl max-w-2xl`}
          >
            I am an upcoming cybersecurity professional, Sec+ certified, focused on threat intelligence, risk management, and penetration testing, with growing interest in AI-driven security tools.
          </p>
          <a 
            href="Jennifer_Amaya_Resume.pdf.download" 
            download="Jennifer_Amaya_Cybersecurity_Resume.pdf"
            className="inline-block text-white h-10 w-auto bg-[#8B4A87] rounded-xl bg-opacity-90 text-[15px] font-bold mt-7 px-4 py-2 hover:bg-[#754073] hover:bg-opacity-100 transition-all duration-300 cursor-pointer"
          >
            Download My CV now!
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-hover-active flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-hover-active mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
