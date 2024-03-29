import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "El mejor trato, los mejores libros",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Exelente servicio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Todos los libros que quiero en un solo lugar",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div data-aos="zoom-in" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              La opinión de nuestros clientes
            </p>
            <h1 className="text-3xl font-bold">Testimonios</h1>
            <p className="text-xs text-gray-400">
             Acá te dejamos la opinión de nuestros queridos clientes
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[6000px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6" key={data.id}>
                    <div className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
