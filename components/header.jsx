// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Header = () => {
//   return (
//     <div className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 mt-0">
  
//         <Image
//         src={assets.profile_img}
//         alt="Profile"
//         width={160}   // keep some base width
//         height={160}
//         className="rounded-full w-32 h-32 object-cover object-top mb-6 shadow-lg"
//         />
//         {/* Intro line */}
//         <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl font-light mb-2">
//             Hi! I'm Sonu Kumar Sharma 
//             <Image src={assets.hand_icon} alt="" className="w-6" />
//         </h3>

//         {/* Big Title */}
//         <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold leading-tight mb-4">
//             AI/ML Engineer 
//         </h1>

//         {/* Subtext */}
//         <p className="max-w-2xl mx-auto text-gray-600 italic text-base md:text-lg leading-relaxed mb-8">
//             Vision-driven engineer passionate about crafting intelligent, scalable, and transformative 
//             digital solutions. Known for turning complexity into clarity, driving innovation, and 
//             delivering software that redefines performance and impact.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center gap-4">
//             <a 
//             href="#contact"
//             className="px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
//             >
//             Contact me <Image src={assets.right_arrow_white} alt="" className=" w-4" />
//             </a>

//             <a 
//             href="/sample-resume.pdf" 
//             download 
//             className="px-8 py-3 rounded-full border border-gray-400 flex items-center gap-2 hover:bg-gray-100 transition"
//             >
//             My Resume <Image src={assets.download_icon} alt="" className=" w-4" />
//             </a>
//         </div>
//         </div>

//   );
// };

// export default Header;

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { safeImageSrc } from "@/utils/imageHelpers";

const Header = ({ isDarkMode }) => {
  const profile = safeImageSrc(assets.profile_img);
  const hand = safeImageSrc(assets.hand_icon);
  const contactArrow = safeImageSrc(isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold);
  const downloadIcon = safeImageSrc(assets.download_icon);

  return (
    <div id="home"
      className={`w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 mt-0 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {profile ? (
        <Image
          src={profile}
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full w-32 h-32 object-cover object-top mb-6 shadow-lg"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 mb-6" />
      )}

      <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl font-light mb-2">
        Hi! I'm Sonu Kumar Sharma
        {hand ? <Image src={hand} alt="waving hand" width={24} height={24} className="w-6" /> : null}
      </h3>

      <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold leading-tight mb-4">Software Engineer</h1>

      <p className={`max-w-2xl mx-auto italic text-base md:text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
        Vision-driven engineer passionate about crafting intelligent, scalable,
        and transformative digital solutions. Known for turning complexity into
        clarity, driving innovation, and delivering software that redefines
        performance and impact.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className={`px-8 py-3 rounded-full flex items-center gap-2 transition ${
            isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Contact me{" "}
          {contactArrow ? <Image src={contactArrow} alt="" width={16} height={16} /> : null}
        </a>

        <a
          href="/SonuResume.pdf"
          download
          className={`px-8 py-3 rounded-full border flex items-center gap-2 transition ${
            isDarkMode ? "border-gray-500 hover:bg-gray-800" : "border-gray-400 hover:bg-gray-100"
          }`}
        >
          My Resume {downloadIcon ? <Image src={downloadIcon} alt="download" width={16} height={16} /> : null}
        </a>
      </div>
    </div>
  );
};

export default Header;
