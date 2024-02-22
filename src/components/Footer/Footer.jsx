import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="bg-gray-100 dark:bg-gray-950">
        <section className="container">
          <div className=" grid md:grid-cols-3 py-5">
            {/* company Details */}
            <div className=" py-8 px-4 ">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                Books Store
              </h1>
              <p className="">La mejor libreria de la zona. </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Rio Negro, General Roca</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+5621515165</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links Importantes
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map((link) => (
                      <li
                        key={link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Ubicación
                  </h1>
                  {/* <ul className="list-disc list-inside"> */}
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
              @copyright 2024 todos los derechos reservados || Alexis Isla y
              Lucas Corbalan
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
