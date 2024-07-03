//App.tsx

import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import LanguageSwitcher from "./utils/LanguageSwitcher";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <>
      <div className="bg-stone-800">
        <LanguageSwitcher />
        <Navbar />
        <Carousel />
        <CTA />
        <p className="font-bold text-5xl text-red-900 text-center my-8">
          TESTING TAILWIND
        </p>
        <Footer />
      </div>
    </>
  );
}

export default App;
