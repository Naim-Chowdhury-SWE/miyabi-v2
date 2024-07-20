import { Dish } from "../../types";

interface CardImageModalProps {
  dish: Dish;
  currentImageIndex: number;
  selectedDishName: string | undefined;
  handlePrevImage: () => void;
  handleNextImage: () => void;
  onClose: () => void;
}

const CardImageModal: React.FC<CardImageModalProps> = ({
  dish,
  currentImageIndex,
  selectedDishName,
  handlePrevImage,
  handleNextImage,
  onClose,
}) => {
  return (
    <dialog
      open
      className="fixed inset-0 min-h-full min-w-full max bg-black bg-opacity-90 z-40"
    >
      <section
        onClick={onClose}
        className="flex flex-col items-center justify-center h-screen"
      >
        <div className="flex flex-col">
          <img
            className="cursor-pointer lg:mx-52"
            src={
              dish.image.length > 1
                ? dish.image[currentImageIndex].toString()
                : dish.image[0].toString()
            }
            alt={selectedDishName}
          />
        </div>
        <div className="bg-red-900 max-w-fit rounded-lg p-1 text-white font-cormorant font-bold text-center">
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {selectedDishName}
          </p>
        </div>
      </section>
      {dish.image.length > 1 && (
        <div className="fixed inset-0 flex justify-between items-center pointer-events-none z-50">
          <button
            onClick={handlePrevImage}
            className="pointer-events-auto opacity-70 from-black from-80% to-transparent bg-gradient-to-r text-white text-5xl h-full w-20 lg:w-40"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextImage}
            className="pointer-events-auto opacity-70 from-black from-80% to-transparent bg-gradient-to-l text-white text-5xl h-full w-20 lg:w-40"
          >
            &#8594;
          </button>
        </div>
      )}
    </dialog>
  );
};

export default CardImageModal;
