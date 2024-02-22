import Logo from "../../assets/website/logo.png";
import { FaBars, FaCaretDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 1,
    name: "Los más vendidos",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Todos los libros",
    link: "/products",
  },
  {
    name: "Juegos didacticos",
    link: "/JuegosDidacticos",
  },
  {
    name: "Manga y Comics",
    link: "/MangaComics",
  },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const cartRef = useRef(null);
  const loginRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !cartRef.current.contains(event.target) &&
        !loginRef.current.contains(event.target)
      ) {
        setShowCart(false);
        setShowLogin(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleCart = () => {
    setShowLogin(false);
    setShowCart((prevShowCart) => !prevShowCart);
  };

  const toggleLogin = () => {
    setShowCart(false);
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  const handleLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white dark:bg-gray-900 dark:text-white ">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2x1 sm:text-3x1 flex gap-4">
              <img src={Logo} alt="" className="max-w-[50px]" />
              <h1 className="flex flex-col">
                Libreria <span>DeLaFe</span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4 justify-between font-semibold">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex items-center gap-4 ml-auto">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                    onClick={handleLinkClick}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <ul className="flex h-[72px] items-center gap-2">
                  Tienda
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </ul>
                <div className="absolute -left-9 z-10 hidden group-hover:block text-black bg-white p-2 shadow-md w-[200px]">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300 relative toggle-cart-button"
              onClick={toggleCart}
            >
              <span className="hidden sm:block">Comprar</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />

              <span className="bg-rgba text-white rounded-full px-2 py-1 text-xs absolute top-2 right-0 transform translate-x-1/2 -translate-y-1/2">
                0
              </span>
              {/*TO-DO : cambiar el 0 por un contador */}
            </button>
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300 toggle-login-button"
              onClick={toggleLogin}
            >
              <FaUser className="text-xl text-white drop-shadow-xl cursor-pointer" />
            </button>
            <div>
              <button
                className="block sm:hidden text-2xl focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="sm:hidden">
            <ul className="flex flex-col items-start gap-4 mt-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-2 px-4 hover:text-primary duration-200"
                    onClick={handleLinkClick}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block py-2 px-4 hover:text-primary duration-200"
                    onClick={handleLinkClick}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {showCart && (
        <div
          ref={cartRef}
          className="fixed top-19 right-0 h-[40rem] w-full md:w-1/2 bg-gray-200 text-gray-900 shadow-md rounded-lg p-4 dark:bg-gray-900 dark:text-white border border-primary dark:border-rgba"
        >
          <ShoppingCard />
        </div>
      )}
      {showLogin && (
        <div
          ref={loginRef}
          className="fixed top-19 right-0 h-[40rem] w-full md:w-1/2 bg-gray-200 text-gray-900 shadow-md rounded-lg p-4 dark:bg-gray-900 dark:text-white border border-primary dark:border-rgba"
        >
          <Login />
        </div>
      )}
    </div>
  );
};

export default Navbar;
