import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AppStoreBanner/>
    </div>
  );
};

export default App;
