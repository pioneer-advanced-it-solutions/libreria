import AllBooks from "./components/AllBooks/AllBooks";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AppStoreBanner />
      <AllBooks />
    </div>
  );
};

export default App;
