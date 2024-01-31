import { useState } from "react";
import Book1 from "../../assets/books/book1.png";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    autor: "Anna Llauradó",
    title: "Sombras Sutiles De Bambú",
    description:
      "Este libro valiente demuestra el poder de la escritura para comprender y superar los dramas que comprometen la vida.",
  },
  {
    id: 2,
    img: Book2,
    autor: "Baek Sehee",
    title: "Quiero Morir, Pero También Quiero Comer Tteokbokki",
    description:
      "PSIQUIATRA: ¿En qué puedo ayudarte? YO: No sé cómo empezar; digamos que estoy un poco deprimida. ¿Tengo que entrar en detalle? Baek Sehee, una joven y exitosa directora de redes sociales de una editorial, decide acudir a sesiones de terapia por su ¿cómo llamarla? ¿Depresión? Todo el tiempo está decaída, ansiosa y con la autoestima baja.",
  },
  {
    id: 3,
    img: Book3,
    autor: "Alice Oseman",
    title: "Heartstopper Vol.5",
    description:
      "Verá a los protagonistas mirando hacia el futuro a medida que se acerca el verano. Charlie, el protagonista, ha estado trabajando en su salud.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState("Sombras Sutiles De Bambú");
  const [autor, setAutor] = useState("Anna Llauradó");
  const [description, setDescription] = useState(
    "Este libro valiente demuestra el poder de la escritura para comprender y superar los dramas que comprometen la vida."
  );
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    with: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                {autor}
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm "
            >
              {description}
            </p>
            <div>
              <button
                data-aos="zoom-in"
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
              >
                Comprar Ahora
              </button>
            </div>
          </div>
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            {/* MAIN IMAGE*/}
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={imageId}
                alt="biryani img"
                className="w-[300px] h-[300px] sm:[h-450] sm:w-[450px] sm:scale-125 object-contain mx-auto "
              />
            </div>
            {/* OTHER IMAGE LIST*/}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {ImageList.map((item) => (
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(
                      item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                    );
                    setTitle(item.title);
                    setDescription(item.description);
                    setAutor(item.autor);
                  }}
                  key={item}
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
