import React from "react";
import Books from "./components/Bookslider/Books.jsx";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <AppStoreBanner />
      <Books/>
      <Testimonial/>
    </div>
  );
};

export default App;
