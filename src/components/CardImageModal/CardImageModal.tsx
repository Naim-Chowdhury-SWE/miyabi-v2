import { Dish } from "../../types";

interface CardImageModalProps {
  dish: Dish;
  onClose: () => void;
}

const CardImageModal: React.FC<CardImageModalProps> = ({ dish, onClose }) => {
  const handleImageClick = () => {
    onClose();
  };
  return (
    <dialog
      open
      className="fixed inset-0 min-h-full min-w-fit bg-black bg-opacity-90 z-50"
      onClick={onClose}
    >
      <section className="mt-16 flex flex-col items-center">
        <div className="mt-24 lg:mt-24 xl:mt-12 flex flex-col">
          <img
            className="cursor-pointer lg:mx-52"
            onClick={handleImageClick}
            src={dish.image.toString()}
            alt={dish.dishName}
          />
        </div>
        <div className="bg-red-900 max-w-fit rounded-lg p-1 text-white font-cormorant font-bold text-center">
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {dish.dishName}
          </p>
        </div>
      </section>
    </dialog>
  );
};

export default CardImageModal;
