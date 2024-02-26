import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Books from "./components/Bookslider/Books.jsx";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner.jsx";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/Services/Services.jsx";
import AOS from "aos";
import Products from "./components/Products/Products.jsx";
import GamesDidactic from "./components/GamesDidactic/GamesDidactic.jsx";
import MangaAndComics from "./components/MangaAndComics/MangaAndComics.jsx";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      Offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  const Home = () => (
    <div>
      <Hero />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Services />
        <Banner />
        <AppStoreBanner />
        <Books />
        <Testimonial />
      </div>
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/JuegosDidacticos" element={<GamesDidactic />} />
          <Route path="/MangaComics" element={<MangaAndComics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
