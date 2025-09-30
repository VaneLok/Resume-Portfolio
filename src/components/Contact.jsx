import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { phone, email, website, github_contact, linkedin } from "../assets";

const ContactItem = ({ icon, label, value, displayValue, isLink = false, onClick }) => (
  <div className="flex items-center gap-4 mb-6 p-4 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-white hover:border-opacity-20" onClick={isLink ? onClick : undefined}>
    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
      <img src={icon} alt={label} className="w-8 h-8 object-contain" />
    </div>
    <div className="flex-1">
      <p className="text-stone-300 text-sm font-medium uppercase tracking-wider">{label}</p>
      {isLink ? (
        <div className="group">
          <p className="text-white text-base font-semibold group-hover:text-stone-200 transition-colors duration-200">
            {displayValue || value}
          </p>
          <div className="w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 mt-1"></div>
        </div>
      ) : (
        <p className="text-white text-base font-semibold">{displayValue || value}</p>
      )}
    </div>
    {isLink && (
      <div className="text-stone-300 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    )}
  </div>
);

const Contact = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1E3A8A] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-stone-300`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        <div className="mt-12">
          <ContactItem
            icon={phone}
            label="Phone"
            value="tel:+12262248827"
            displayValue="+1 (226) 224-8827"
            isLink={true}
            onClick={() => handleLinkClick("tel:+12262248827")}
          />
          
          <ContactItem
            icon={email}
            label="Email"
            value="mailto:jenniferamayavanessa@protonmail.com"
            displayValue="jenniferamayavanessa@protonmail.com"
            isLink={true}
            onClick={() => handleLinkClick("mailto:jenniferamayavanessa@protonmail.com")}
          />
          
          <ContactItem
            icon={website}
            label="Portfolio"
            value="https://jennsec.com/"
            displayValue="jennsec.com"
            isLink={true}
            onClick={() => handleLinkClick("https://jennsec.com/")}
          />
          
          <ContactItem
            icon={github_contact}
            label="GitHub"
            value="https://github.com/VaneLok"
            displayValue="github.com/VaneLok"
            isLink={true}
            onClick={() => handleLinkClick("https://github.com/VaneLok")}
          />
          
          <ContactItem
            icon={linkedin}
            label="LinkedIn"
            value="https://www.linkedin.com/in/jennifer-amaya/"
            displayValue="linkedin.com/in/jennifer-amaya"
            isLink={true}
            onClick={() => handleLinkClick("https://www.linkedin.com/in/jennifer-amaya/")}
          />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
