// Carousel.tsx
import "./Carousel.css";
import imageData from "./CarouselData";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      {Object.keys(imageData).map((key, index) => (
        <div className={`box box${index + 1}`} key={key}>
          <figure>
            <img
              className="rounded-md"
              src={imageData[key].image}
              alt={imageData[key].description}
            />
            <figcaption className="text-center font-mono text-lg text-white">
              {imageData[key].description}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
