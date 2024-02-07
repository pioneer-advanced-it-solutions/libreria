const ShoppingCard = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Carrito de Compras
      </h1>
      <div className="flex justify-center border border-sky-500 py-2 my-10 mx-10">
        El carrito de compras está vacío.
      </div>
    </div>
  );
};

export default ShoppingCard;
