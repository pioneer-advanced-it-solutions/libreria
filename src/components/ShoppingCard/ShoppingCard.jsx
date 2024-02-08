const ShoppingCard = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white">
        Carrito de Compras
      </h1>
      <div className="flex justify-center border border-sky-500 py-2 my-10 mx-10 dark:text-white">
        El carrito de compras está vacío.
      </div>
    </div>
  );
};

export default ShoppingCard;
