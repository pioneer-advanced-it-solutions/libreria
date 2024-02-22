import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "Quiero Morir, Pero ...",
    description:
      "PSIQUIATRA: ¿En qué puedo ayudarte? YO: No sé cómo empezar; digamos que estoy un poco deprimida...",
    author: "Baek Sehee",
    stars: 4,
    rating: 4.4,
    showInBooks: true,
    Stock: 1,
    price: 5000,
    category: "Auto Ayuda",
  },
  {
    id: 2,
    img: Img2,
    title: "Sombras Sutiles De Bambú",
    description:
      "Este libro valiente demuestra el poder de la escritura para comprender y superar los dramas que comprometen la vida.",
    author: "Anna Llauradó",
    stars: 5,
    rating: 5.0,
    showInBooks: true,
    Stock: 1,
    price: 3642,
    category: "Ficcion",
  },
  {
    id: 3,
    img: Img3,
    title: "Heartstopper Vol.5",
    description:
      "Verá a los protagonistas mirando hacia el futuro a medida que se acerca el verano. Charlie, el protagonista, ha estado trabajando en su salud.",
    author: "Alice Oseman",
    stars: 3,
    rating: 4.7,
    showInBooks: true,
    Stock: 0,
    price: 1930,
    category: "Accion",
  },
  {
    id: 4,
    img: Book4,
    title: "Las tinieblas y el alba",
    description: "lorem",
    stars: 4,
    rating: 4.6,
    author: "Ken Follett",
    showInBooks: true,
    Stock: 1,
    price: 2910,
    category: "Accion",
  },
  {
    id: 5,
    img: Book5,
    title: "El pozo de la ascensión",
    description: "lorem",
    author: "Brandon Sanderson",
    stars: 2,
    rating: 4.4,
    showInBooks: true,
    Stock: 1,
    price: 9000,
    category: "Literatura",
  },
];

export default ServicesData;
