// // import React from 'react'
// import Image from "next/image";
// import { assets } from '@/assets/assets';
// import React, {useState} from 'react';

// const Contact = () => {
//     const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "af9a01f8-b1d7-4ea6-9957-f5fed7d7b908");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   return (
//     <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-center bg-no-repeat bg-[length:90%_auto]">
//       <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</h4>
//       <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         I'm always open to discussing new projects and ideas. If you'd like to get in touch, please feel free to reach out!
//       </p>
//       <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
//         <div>
//             <input type="text" placeholder="Your Name" className="border p-2 rounded-md w-full mb-4" required name='name'/>
//             <input type="email" placeholder="Your Email" className="border p-2 rounded-md w-full mb-4" required name='email'/>
//         </div>
//         <textarea placeholder="Your Message" className="border p-2 rounded-md w-full mb-4" rows="6" required name='message'></textarea>
//         <button type="submit" className="py-3 px-8 w-wax flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">Send Message <Image src={assets.right_arrow_white} alt="Right Arrow" /></button>

//         <p className='mt-4'>
//            {result}
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Contact


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { safeImageSrc } from "@/utils/imageHelpers"; // add this file if you haven't

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "af9a01f8-b1d7-4ea6-9957-f5fed7d7b908");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult("❌ " + (data.message || "Submission failed"));
      }
    } catch (err) {
      console.error("Network error:", err);
      setResult("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const arrowSrc = safeImageSrc(assets.right_arrow_white);

  return (
    <div
      id="contact"
      className="relative w-full px-[12%] py-10 scroll-mt-20 bg-center bg-no-repeat bg-[length:90%_auto] transition-colors"
      style={{ backgroundImage: "url('/footer-bg-color.png')" }}
    >
      {isDarkMode && <div className="absolute inset-0 bg-black/70 pointer-events-none" />}

      <div className="relative z-10">
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I'm always open to discussing new projects and ideas. If you'd like to
          get in touch, please reach out!
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className={`border p-3 rounded-md w-full mb-4 outline-none transition ${
                isDarkMode
                  ? "bg-[#232323] border-gray-600 text-white focus:ring-2 focus:ring-lime-400"
                  : "bg-white border-gray-300 text-black focus:ring-2 focus:ring-black"
              }`}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className={`border p-3 rounded-md w-full mb-4 outline-none transition ${
                isDarkMode
                  ? "bg-[#232323] border-gray-600 text-white focus:ring-2 focus:ring-lime-400"
                  : "bg-white border-gray-300 text-black focus:ring-2 focus:ring-black"
              }`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className={`border p-3 rounded-md w-full mb-4 outline-none transition resize-none ${
              isDarkMode
                ? "bg-[#232323] border-gray-600 text-white focus:ring-2 focus:ring-lime-400"
                : "bg-white border-gray-300 text-black focus:ring-2 focus:ring-black"
            }`}
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto transition-all ${
              isDarkMode
                ? "bg-lime-400 text-black hover:bg-lime-500 disabled:bg-lime-700"
                : "bg-black text-white hover:bg-black/90 disabled:bg-gray-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && arrowSrc ? (
              <Image src={arrowSrc} alt="arrow" width={16} height={16} className="ml-2" />
            ) : null}
          </button>

          <p className="mt-4 text-center text-sm">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
