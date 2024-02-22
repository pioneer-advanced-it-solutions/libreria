import { FaStar } from "react-icons/fa6";
import ServicesData from "../Services/ServiceData";
import useCartStore from "../../Store";

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ServicesData.map((service) => (
          <div
            data-aos="zoom-in"
            key={service.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
          >
            <div className="h-[100px]">
              <img
                src={service.img}
                alt=""
                className="max-w-[100px] block mx-auto transform -translate-y-14
                    group-hover:scale-105  duration-300 shadow-md"
              />
            </div>
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
