// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import React from 'react';

// const Work = () => {
//   return (
//     <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className='text-center mb-2 text-lg font-Ovo'>Projects</h4>
//       <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         Showcasing projects in AI/ML and Python — from model deployment to intelligent automation — with web applications as integrated solutions.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
//         {workData.map((project, index) => (
//           <div key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}>
//             <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p className="text-sm text-gray-700">{project.description}</p>
//               </div>
//               <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
//                 <Image src={assets.send_icon} alt='send icon' className="w-5" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <a href="" className="w-max flex items-center gap-2 text-grey-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
//         Show More <Image src={assets.right_arrow} alt="Right Arrow" className="w-4" />
//       </a>
//     </div>
//   )
// }

// export default Work;


// components/Work.jsx
"use client";

import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { safeImageSrc } from "@/utils/imageHelpers";

const Work = ({ isDarkMode }) => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Projects</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Showcasing projects in AI/ML and Python — from model deployment to
        intelligent automation — with web applications as integrated solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
        {workData.map((project, index) => {
          // safeImageSrc handles both imported modules and public string paths
          const bgSrc = safeImageSrc(project.bgImage);
          const sendIcon = safeImageSrc(assets.send_icon);

          // external link — open in new tab
          const href = project.link || "#";

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="aspect-square relative rounded-lg overflow-hidden cursor-pointer group block"
            >
              {bgSrc ? (
                <Image
                  src={bgSrc}
                  alt={project.title || "project"}
                  fill
                  className="object-cover rounded-lg"
                  priority={index < 2}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
              )}

              <div
                className={`${
                  isDarkMode ? "bg-[#232323]" : "bg-white"
                } w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7`}
              >
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                {sendIcon ? (
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image src={sendIcon} alt="open" width={18} height={18} />
                  </div>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>

      <a
        href="#home"
        className="w-max flex items-center gap-2 text-grey-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show More{" "}
        {safeImageSrc(isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold) ? (
          <Image
            src={safeImageSrc(isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold)}
            alt="Right Arrow"
            width={16}
            height={16}
          />
        ) : null}
      </a>
    </div>
  );
};

export default Work;

