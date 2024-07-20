import { useState, useEffect } from "react";
import { Dish } from "../../types";
import CardImageModal from "../CardImageModal/CardImageModal";
import { useTranslation } from "react-i18next";

const Card = (dish: Dish) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(
    dish.type?.[0] || null
  );
  const [selectedPrice, setSelectedPrice] = useState<number | null>(
    dish.price.length > 0 ? dish.price[0] : null
  );
  const [selectedDishName, setSelectedDishName] = useState<string | undefined>(
    t(dish.dishName.length > 0 ? dish.dishName[0] : "")
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    (dish.description || []).length > 0 ? t(dish.description![0]) : null
  );
  const getDescription = (index: number) => {
    if (dish.description && dish.description.length > 0) {
      if (dish.description.length === 1) {
        return t(dish.description[0]);
      } else {
        return t(dish.description[index]) || null;
      }
    }
    return null;
  };

  const handleTypeClick = (type: string, index: number) => {
    if (dish.image) {
      setCurrentImageIndex(index);
      setSelectedType(type);
      setSelectedPrice(
        dish.price.length === 1 ? dish.price[0] : dish.price[index]
      );
      setSelectedDishName(
        dish.dishName.length === 1 ? dish.dishName[0] : dish.dishName[index]
      );
      setSelectedDescription(getDescription(index));
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlePrevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + dish.image.length) % dish.image.length;
    setCurrentImageIndex(newIndex);
    handleTypeClick(dish.type[newIndex], newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % dish.image.length;
    setCurrentImageIndex(newIndex);
    handleTypeClick(dish.type[newIndex], newIndex);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const uniquePrices = [...new Set(dish.price)];

  useEffect(() => {
    setSelectedDishName(
      dish.dishName.length > 0 ? t(dish.dishName[0]) : undefined
    );
    setSelectedDescription(
      (dish.description || []).length > 0 ? t(dish.description![0]) : null
    );
  }, [i18n.language, dish.dishName, dish.description, t]);
  return (
    <div className="rounded-xl md:max-w-80 max-w-90 border-2 border-red-900">
      <section className="">
        <div className="flex flex-col">
          <div className="bg-gradient-to-b from-red-800 to-red-900 h-16 flex flex-col justify-center rounded-t-lg">
            <h3 className="text-2xl text-center tracking-wider font-chowfun text-white">
              {selectedDishName}
            </h3>
          </div>
          <div className="relative">
            {dish.image && (
              <img
                className="max-h-fit cursor-pointer"
                onClick={handleImageClick}
                src={
                  dish.image.length > 1
                    ? dish.image[currentImageIndex].toString()
                    : dish.image[0].toString()
                }
                alt={selectedDishName || ""}
              />
            )}
            {dish.image.length > 1 && (
              <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <button
                  onClick={handlePrevImage}
                  className="pointer-events-auto h-full text-2xl p-4 opacity-60 from-black from-80% to-transparent bg-gradient-to-r text-white"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNextImage}
                  className="pointer-events-auto h-full text-2xl p-4 opacity-60 from-black from-80% to-transparent bg-gradient-to-l text-white"
                >
                  &#8594;
                </button>
              </div>
            )}
            {isModalOpen && (
              <CardImageModal
                dish={dish}
                currentImageIndex={currentImageIndex}
                selectedDishName={selectedDishName}
                onClose={handleModalClose}
                handlePrevImage={handlePrevImage}
                handleNextImage={handleNextImage}
              />
            )}
          </div>
        </div>
        <p className="text-white min-h-16 max-h-24 text-center font-opensans m-2">
          {selectedDescription}
        </p>
      </section>
      <hr className="mx-8 mb-4" />
      <section className="font-opensans text-white text-center">
        <div
          className={`${
            dish.type.length === 4
              ? "grid justify-center items-center grid-flow-col grid-rows-2 gap-4"
              : "flex flex-wrap justify-center items-center gap-4"
          } mb-4`}
        >
          {dish.type.map((type, index) => (
            <span
              key={type}
              onClick={() => handleTypeClick(type, index)}
              className={`${
                selectedType === type
                  ? "bg-gradient-to-b from-red-950 via-red-800 to-red-950"
                  : "transparent"
              } p-1 w-fit min-w-28 h-fit border border-red-900 rounded-lg cursor-pointer`}
            >
              {type}{" "}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mx-4 mb-4">
          {uniquePrices.map((price) => (
            <span
              key={price}
              className={`${
                selectedPrice === price
                  ? "bg-gradient-to-b from-red-950 via-red-800 to-red-950"
                  : "transparent"
              } p-1 w-20 rounded-lg text-lg md:text-base`}
            >
              {price}kr
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Card;
