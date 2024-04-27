import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Preloader from "./components/preloader/Preloader"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
