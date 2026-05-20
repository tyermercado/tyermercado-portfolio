import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Preloader from "./components/preloader/Preloader";

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
                <About />
                <Experience />
                <Portfolio />
                <Contact />
              </main>
              <Sidebar />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
