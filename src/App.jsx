import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Bookslider/Books.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Books/>
     
    </div>
  );
};

export default App;
