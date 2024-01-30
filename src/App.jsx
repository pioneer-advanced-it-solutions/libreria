import AllBooks from "./components/AllBooks/AllBooks";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppStoreBanner />
      <AllBooks />
      <Testimonial/>
    </div>
  );
};

export default App;
