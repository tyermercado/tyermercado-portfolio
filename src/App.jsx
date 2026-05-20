import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/preloader/Preloader";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="min-h-screen bg-gray-100 dark:bg-[#0d0d0f]">
          <div className="max-w-page mx-auto px-8 sm:px-6 xs:px-4">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-5 mt-5 items-start pb-8">
              <main className="flex flex-col gap-5 min-w-0">
                <FadeIn><About /></FadeIn>
                <FadeIn delay={0.05}><Experience /></FadeIn>
                <FadeIn delay={0.1}><Portfolio /></FadeIn>
                <FadeIn delay={0.1}><Contact /></FadeIn>
              </main>
              <FadeIn delay={0.15}><Sidebar /></FadeIn>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
