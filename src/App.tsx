//App.tsx

import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import LanguageSwitcher from "./utils/LanguageSwitcher";
import Test from "./test";
import Nav from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useLanguageContext } from "./utils/LanguageContext";

function App() {
  const { t } = useLanguageContext();
  return (
    <>
      <div className="bg-teal-900">
        <LanguageSwitcher />
        <Navbar />
        <Nav />
        <Carousel />
        <p className="font-bold text-5xl text-red-900 text-center">
          TESTING TAILWIND
        </p>
        <div>
          <Main />
          <Footer />
          {/* <Test /> */}
        </div>
      </div>
    </>
  );
}

export default App;
