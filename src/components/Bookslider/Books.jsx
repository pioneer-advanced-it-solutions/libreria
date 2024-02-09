import { FaStar } from "react-icons/fa6";
import ServicesData from "../Services/ServiceData";

const Books = () => {
  const booksToShow = ServicesData.filter((book) => book.showInBooks);
  return (
    <div className="mt-14 mb-12 ">
      <div data-aos="slide-up" className="container">
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            El mejor ranking para eligir tu libro
          </p>
          <h1 className="text-3xl font-bold">TOP LIBROS</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Aca podes encontrar el top semanal de libros elegidos por la
            comunidad,
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card */}
            {booksToShow.map(({ id, img, title, rating, author }) => (
              <div key={id} className="div space-y-3">
                <img
                  src={img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md "
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {author}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
              Todos los Libros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
