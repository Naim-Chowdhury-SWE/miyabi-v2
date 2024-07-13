import { useState } from "react";
import { Dish } from "../../types";
import CardImageModal from "../CardImageModal/CardImageModal";

const Card = (dish: Dish) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="rounded-xl max-w-80 border-2 border-red-900">
      <section className="">
        <div className="flex flex-col">
          <div className="from-red-800 to-red-900 bg-gradient-to-b h-16 flex flex-col justify-center rounded-t-lg">
            <h3 className="text-2xl text-center tracking-wider font-chowfun text-white">
              {dish.dishName}
            </h3>
          </div>

          <img
            className="mb-1 border-b-2 border-red-900"
            onClick={handleImageClick}
            src={dish.image}
            alt={dish.dishName || ""}
          />
          {isModalOpen && (
            <CardImageModal dish={dish} onClose={handleModalClose} />
          )}
        </div>
        <p className="text-white min-h-16 max-h-24 text-center font-opensans m-2">
          {dish.description}
        </p>
      </section>
      <hr className="mx-8 mb-4" />
      <section className="font-opensans text-white text-center">
        <div className="flex justify-center items-center gap-4 mx-4 mb-4">
          {dish.type.map((type, index) => (
            <p
              key={index}
              className="from-red-950 via-red-800 to-red-950 bg-gradient-to-b px-1 w-20 rounded-lg"
            >
              {type}
            </p>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mx-4 mb-4">
          {dish.price.map((price, index) => (
            <p
              key={index}
              className="from-red-950 via-red-800 to-red-950 bg-gradient-to-b px-1 w-20 rounded-lg"
            >
              {price} kr
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Card;
