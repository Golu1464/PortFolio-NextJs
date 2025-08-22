// import Image from "next/image";
// import { serviceData, assets } from "@/assets/assets";
// import React from 'react';

// const Services = () => {
//   return (
//     <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
//       <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         I provide AI/ML and Python-based solutions, including model deployment and automation, with web development as supportive integration service.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//         {serviceData.map(({ icon, title, description, link }, index) => (
//             <div key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] bg-white">
//             <Image src={icon} alt='' className="w-10" />
//             <h3 className="text-lg my-4 text-grey-700">{title}</h3>
//             <p className="text-sm text-gray-600 leading-5">{description}</p>
//             <a href={link} className="flex items-center gap-2 text-sm mt-5">Learn More <Image alt="" src={assets.right_arrow} className="w-4" /></a>
//             </div>
//         ))}
//         </div>


//     </div>
//   );
// };

// export default Services;

"use client";

import React from "react";
import Image from "next/image";
import { serviceData, assets } from "@/assets/assets";

const Services = ({ isDarkMode }) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I provide AI/ML and Python-based solutions, including model deployment and automation, with web development as supportive integration service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {serviceData.map(({ icon, title, description, link }, index) => {
          const href = link || "#"; // fallback if no link provided
          const shouldOpenInNewTab = Boolean(link); // only open new tab when link exists

          return (
            <div
              key={index}
              className={`flex flex-col justify-between border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] ${isDarkMode ? "bg-[#232323]" : "bg-white"} hover:bg-lighthover`}
            >
              <div>
                {/* using explicit width/height to avoid next/image warnings */}
                <Image src={icon} alt={`${title} icon`} width={40} height={40} />
                <h3 className="text-lg my-4 text-grey-700">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
              </div>

              <a
                href={href}
                target={shouldOpenInNewTab ? "_blank" : undefined}
                rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                aria-label={`Learn more about ${title}`}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Learn More
                <Image
                  alt=""
                  src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                  width={16}
                  height={16}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
