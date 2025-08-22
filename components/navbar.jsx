// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";

// const Navbar = () => {
//     const [isScroll, setIsScroll] = useState(false);
//     const sidemenuRef=useRef();
//     const openMenu=()=>{
//         sidemenuRef.current.style.transform  = "translateX(-16rem)";
//     }
//     const CloseMenu=()=>{
//         sidemenuRef.current.style.transform  = "translateX(-0rem)";
//     }
//     useEffect(() => {
//       window.addEventListener("scroll", () => {
//         if (scrollY > 50) {
//           setIsScroll(true);
//           // sidemenuRef.current.style.transform = "translateX(-16rem)";
//         } else {
//           setIsScroll(false);
//           // sidemenuRef.current.style.transform = "translateX(0rem)";
//         }
//       });
//     }, [])
//   return (
//     <>
//     <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
//         <Image src={assets.header_bg_color} alt="" className="w-full"/> 
//     </div>


//       <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
//         <a href="#top">
//           <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14"/>   
//         </a>
//         <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white shadow-sm bg-opacity-50"}`}>
//           <li><a className="font-semibold" href="#top">Home</a></li>
//           <li><a className="font-semibold" href="#about">About</a></li>
//           <li><a className="font-semibold" href="#services">Services</a></li>
//           <li><a className="font-semibold" href="#projects">Projects</a></li>
//           <li><a className="font-semibold" href="#contact">Contact me</a></li>
//         </ul>
//         <div className="flex items-center gap-4">
//             <button>
//                 <Image src={assets.moon_icon} alt="" className="w-6"/>
//             </button>

//           <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-ovo">Contact <Image src={assets.arrow_icon} alt="" className="w-3"/></a>

//           <button className="block md:hidden ml-3" onClick={openMenu}>
//             <Image src={assets.menu_black} alt="" className="w-6"/>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <ul ref={sidemenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

//             <div className="absolute top-6 right-6" onClick={CloseMenu}>
//                 <Image src={assets.close_black} alt="" className="w-5 cursor-pointer"/> 
//             </div>

//             <li><a className="font-semibold" onClick={CloseMenu} href="#top">Home</a></li>
//             <li><a className="font-semibold" onClick={CloseMenu} href="#about">About</a></li>
//             <li><a className="font-semibold" onClick={CloseMenu} href="#projects">Projects</a></li>
//             <li><a className="font-semibold" onClick={CloseMenu} href="#services">Services</a></li>
//             <li><a className="font-semibold" onClick={CloseMenu} href="#contact">Contact me</a></li>
//         </ul>


//       </nav>
//     </>
//   );
// };

// export default Navbar;


"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { safeImageSrc } from "@/utils/imageHelpers";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => setIsDarkMode(p => !p);

  const headerBgSrc = safeImageSrc(isDarkMode ? assets.header_bg_color_dark ?? assets.header_bg_color : assets.header_bg_color);
  const logoSrc = safeImageSrc(isDarkMode ? assets.logo_dark ?? assets.logo : assets.logo);
  const toggleIcon = safeImageSrc(isDarkMode ? assets.sun_icon : assets.moon_icon);
  const contactArrow = safeImageSrc(isDarkMode ? assets.arrow_icon_dark ?? assets.arrow_icon : assets.arrow_icon);
  const menuIcon = safeImageSrc(isDarkMode ? assets.menu_white ?? assets.menu_black : assets.menu_black);
  const closeIcon = safeImageSrc(isDarkMode ? assets.close_white : assets.close_black);

  return (
    <>
      {/* Full-width background behind the navbar — no translate hacks */}
      <div
        aria-hidden
        className="fixed top-0 left-0 w-full h-full max-h-[64px] -z-10 overflow-hidden" // 64px = ~h-16
        style={{ pointerEvents: "none" }}
      >

        {headerBgSrc ? (
          <div className="relative w-full h-full">
            <Image
              src={headerBgSrc}
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* dark overlay to remove white/light parts in dark mode */}
            {isDarkMode && <div className="absolute inset-0 bg-black/65 pointer-events-none" />}
          </div>
        ) : (
          // fallback solid background if no image
          <div className={`w-full h-full ${isDarkMode ? "bg-black" : "bg-white"} `} />
        )}
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-all
          ${isScroll ? "bg-white/50 backdrop-blur-lg dark:bg-black/50 shadow-sm" : "bg-transparent"}`}
        role="navigation"
      >
        <a href="#top" className="mr-6 flex items-center">
          {logoSrc ? (
            <Image src={logoSrc} alt="logo" width={112} height={32} priority />
          ) : (
            <div className="w-28 h-8 rounded bg-gray-200 dark:bg-gray-700" />
          )}
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : ""}`}>
          <li><a className="font-semibold" href="#home">Home</a></li>
          <li><a className="font-semibold" href="#about">About</a></li>
          <li><a className="font-semibold" href="#services">Services</a></li>
          <li><a className="font-semibold" href="#projects">Projects</a></li>
          <li><a className="font-semibold" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={handleThemeToggle} aria-label="Toggle theme" className="p-1">
            {toggleIcon ? <Image src={toggleIcon} alt="theme" width={24} height={24} /> : null}
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-ovo">
            Contact {contactArrow ? <Image src={contactArrow} alt="" width={12} height={12} /> : null}
          </a>

          <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            {menuIcon ? <Image src={menuIcon} alt="menu" width={24} height={24} /> : null}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-300 ${isMenuOpen ? "right-0" : "-right-64"} ${isDarkMode ? "bg-black text-white" : "bg-rose-50"}`}
        >
          <div className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
            {closeIcon ? <Image src={closeIcon} alt="close" width={20} height={20} /> : null}
          </div>

          <li><a onClick={() => setIsMenuOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#services">Services</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#projects">Projects</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

