import { useState } from "react";
import { FaSearchengin, FaStar } from "react-icons/fa6";
import ServicesData from "../Services/ServiceData";
import useCartStore from "../../Store.js";

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [filterCategory, setFilterCategory] = useState(ServicesData);

  // Función para manejar el cambio de filtro al presionar un botón
  const handleFilterChange = (category) => {
    if (category === "Todos") {
      setFilterCategory(ServicesData);
    } else {
      const filtered = ServicesData.filter(
        (service) => service.category === category
      );
      setFilterCategory(filtered);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8 ">
        <h1
          data-aos="zoom-out"
          data-aos-duration="300"
          className="text-2xl sm:text-6xl lg:text-2xl font-bold text-center pt-12"
        >
          TODOS LOS LIBROS
        </h1>
        <div className="grid grid-cols-1">
          <div className="my-5">
            <div className="flex flex-wrap justify-center sm:justify-between md:justify-center">
              <button
                onClick={() => handleFilterChange("Accion")}
                className="mx-2 p-2 rounded-md border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              >
                Accion
              </button>
              <button
                onClick={() => handleFilterChange("Literatura")}
                className="mx-2 p-2 rounded-md border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              >
                Literatura
              </button>
              <button
                onClick={() => handleFilterChange("Ficcion")}
                className="mx-2 p-2 rounded-md border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              >
                Ficcion
              </button>
              <button
                onClick={() => handleFilterChange("Auto Ayuda")}
                className="mx-2 p-2 rounded-md border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              >
                Auto Ayuda
              </button>
            </div>
          </div>
          <div className="flex justify-center  ">
            <div className="relative w-80">
              <input
                className="w-full pl-8 pr-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full border-gray-900 dark:border-gray-900 focus:ring-primary focus:border-primary"
                type="search"
                placeholder="Buscar por título o autor..."
              />
              <span className="absolute inset-y-0 left-3 flex items-center pr-3 text-gray-500">
                <FaSearchengin />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5 place-items-center pb-8 mx-5">
        {filterCategory.map((service) => (
          <div
            data-aos="zoom-in"
            key={service.id}
            className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
          >
            <img
              src={service.img}
              alt=""
              className="w-48 h-48 object-cover object-center group-hover:scale-105 duration-300 shadow-md mx-auto rounded-2xl p-2"
            />
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: service.stars }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <h1 className="text-xl font-bold">{service.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                {service.description}
              </p>
              {service.Stock > 0 ? (
                <button
                  onClick={() => addToCart(service)}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Compra ahora
                </button>
              ) : (
                <p className="bg-dark hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-grey group-hover:text-white">
                  Sin stock
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
