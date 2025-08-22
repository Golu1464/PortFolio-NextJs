// import Image from "next/image";   // ✅ required
// import { assets, infoList, toolsData } from '@/assets/assets'
// import React from 'react'


// const About = () => {
//   return (
//     <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
//       <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
//       <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

//       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//         <div className="w-64 sm:w-80 rounded-3xl max-w-none">
//             <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
//         </div>
//         <div className='flex-1'>
//             <p className='mb-10 max-w-2xl font-Ovo'>
//                 Software Engineer specializing in elegant system architecture with Python & C++. I bridge AI/ML intelligence and high-performance web development to craft scalable, impactful solutions
//             </p>

//             <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
//                 {infoList.map(({icon, iconDark, title, description }, index) => (
//                     <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] bg-white"  key={index}>
//                         <Image src={icon} alt={title} className="w-7 mt-3" />
//                         <h3 className="my-4 font-semibold text-grey-700">{title}</h3>
//                         <p className="text-grey-600 text-sm">
//                             {description}
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//             <h4 className="my-6 text-grey-700 font-Ovo">
//                 Tools I Use
//             </h4>
//             <ul className="flex items-center gap-3 sm:gap-5">
//                 {toolsData.map((tool, index) => (
//                     <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500" 
//                     key={index}>
//                         <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default About

import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import { safeImageSrc } from "@/utils/imageHelpers";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Introduction</h4>
      <h2 className={`text-center text-5xl font-Ovo ${isDarkMode ? "text-white" : "text-black"}`}>About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden">
          {safeImageSrc(assets.user_image) ? (
            <Image
              src={safeImageSrc(assets.user_image)}
              alt="Profile picture of the developer"
              width={320}
              height={320}
              className="w-full rounded-3xl object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-3xl" />
          )}
        </div>

        <div className="flex-1">
          <p className={`mb-10 max-w-2xl font-Ovo leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
            Software Engineer specializing in elegant system architecture with Python & C++. I bridge AI/ML intelligence and high-performance web development to craft scalable, impactful solutions.
          </p>

          <section aria-label="Key Information" className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              const iconSrc = safeImageSrc(isDarkMode ? iconDark : icon);
              return (
                <article
                  key={index}
                  className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 transition-all duration-500 ${
                    isDarkMode ? "bg-[#232323] border-gray-600 hover:bg-[#2e2e2e] hover:shadow-[4px_4px_0_#555]" : "bg-white border-gray-400 hover:bg-lighthover hover:shadow-[4px_4px_0_#000]"
                  }`}
                >
                  {iconSrc ? <Image src={iconSrc} alt={`${title} icon`} width={28} height={28} className="w-7 mt-3" /> : null}
                  <h3 className={`my-4 font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
                </article>
              );
            })}
          </section>

          <h4 className={`my-6 font-Ovo ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => {
              const t = safeImageSrc(tool);
              return (
                <li
                  key={index}
                  className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-500 ${
                    isDarkMode ? "border-gray-600 bg-[#232323]" : "border-gray-400 bg-white"
                  }`}
                >
                  {t ? <Image src={t} alt={`Tool ${index + 1}`} width={28} height={28} className="w-5 sm:w-7" /> : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

