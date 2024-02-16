import React, { useEffect } from "react";
import useCartStore from "../../Store";

const ShoppingCard = () => {
  const { cartItems } = useCartStore();

  return (
    <div>
      <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold dark:text-white">
        Carrito de Compras
      </h1>
      {cartItems.length > 0 ? (
        <ul className="p-4">
          {" "}
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>
                {item.title} - ${item.stock}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex justify-center border border-sky-500 py-2 my-10 mx-10 dark:text-white">
          El carrito de compras está vacío.
        </p>
      )}
    </div>
  );
};
export default ShoppingCard;
