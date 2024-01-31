import Logo from "../../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
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
    link: "/#",
  },
  {
    name: "Juegos didacticos",
    link: "/#",
  },
  {
    name: "Manga y Comics",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration 200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2x1 sm:text-3x1 flex gap-4">
              <img src={Logo} alt="" className="w-10" />
              <h1 className="flex flex-col">
                Libreria <span>DeLaFe</span>
              </h1>
            </a>
          </div>
          <div className="flex items-center gap-4 justify-between font-semibold">
            <div>
              <DarkMode />
            </div>
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <a href="" className="flex h-[72px] items-center gap[2px]">
                  Tienda
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                {/* drop link section  */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[200px]">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
              Comprar{" "}
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
