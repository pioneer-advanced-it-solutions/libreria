import useCartStore from "../../Store";
import { FaTrash } from "react-icons/fa6";

const ShoppingCard = () => {
  const { cartItems } = useCartStore();
  const { removeFromCart } = useCartStore();

  const handleDelete = (index) => {
    removeFromCart(index);
  };

  // Calcular la suma del stock
  const total = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold dark:text-white">
        Carrito de Compras
      </h1>
      {cartItems.length > 0 ? (
        <ul className="p-4">
          {" "}
          {cartItems.map((item, index) => (
            <li className="grid grid-cols-5 gap-4" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-cover col-span-1"
              />
              <div className="col-span-2 p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <p>$ {item.price}</p>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <button onClick={() => handleDelete(index)}>
                  <FaTrash className="text-red-500 cursor-pointer" />
                </button>
              </div>
            </li>
          ))}
          <div className="grid grid-cols-4 gap-4">
            <p className="mt-4 text-center col-span-2">Total (sin costo de envio): $ {total}</p>
            <button className="bg-primary hover:scale-105 duration-300 text-white  rounded-full mt-4 group-hover:bg-grey group-hover:text-white">
              Iniciar la compra
            </button>
          </div>
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
