import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-teal-900">
        <Navbar />
        <Carousel />
        <p className="font-bold text-5xl text-red-600 text-center">
          TESTING TAILWIND
        </p>
      </div>
    </>
  );
}

export default App;
