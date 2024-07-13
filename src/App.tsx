//App.tsx

import Carousel from "./components/Carousel/Carousel";
import NavbarTop from "./components/Navbar/NavbarTop";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <div className="pt-28 lg:pt-40">
        <LanguageSwitcher />
        <NavbarTop />
        <Header />
        <Carousel />
        <CTA />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
