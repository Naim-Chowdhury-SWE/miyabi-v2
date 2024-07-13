import Card from "../Card/Card";
import { Dish } from "../../types";

type Menu = {
  dishes: Dish[];
};

const CardWrapper = ({ dishes }: Menu) => {
  const containerClass =
    dishes.length < 4
      ? "flex flex-row justify-center gap-8"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8";
  return (
    <div className="flex flex-col justify-center items-center m-8 ">
      <div className={containerClass}>
        {dishes.map((dish, index) => (
          <Card key={index} {...dish} />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
