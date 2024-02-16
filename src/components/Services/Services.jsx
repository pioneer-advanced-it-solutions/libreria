// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import ServicesData from "./ServiceData";
import Products from "./ServiceProducts";

const Services = () => {
  
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Libros en tendencia
            </p>
            <h1 className="text-3xl font-bold">Los mejores libros</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Acá podés encontrar los libros preferidos por la crítica.
            </p>
          </div>
          <Products />
        </div>
      </div>
    </>
  );
};
export default Services;
