import React from "react";
import Books from "./components/Bookslider/Books.jsx";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner.jsx";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Services/>
      <Banner/>
      <AppStoreBanner />
      <Books/>
      <Testimonial/>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
