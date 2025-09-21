// 'use client'
// import About from "@/components/about";
// import Header from "@/components/header";
// import Navbar from "@/components/navbar";
// import Services from "@/components/services";
// import Work from "@/components/work";
// import Contact from "@/components/contact";
// import Image from "next/image";
// import Footer from "@/components/footer";

// export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);
//   return (
//     <main>
//       <Navbar /> 
//       <Header /> 
//       <About />
//       <Services />
//       <Work />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

'use client'
import { useState, useEffect } from "react";
import About from "@/components/about";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <main>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> 
      <Header isDarkMode={isDarkMode} /> 
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}
