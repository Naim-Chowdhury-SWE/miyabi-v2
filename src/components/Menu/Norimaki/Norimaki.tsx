import CardWrapper from "../../CardWrapper/CardWrapper";
import { useTranslation } from "react-i18next";
import { norimakiMenu } from "../../../data/MenuData/Norimaki";
import { MenuId } from "../../../types";

const Norimaki: React.FC<MenuId> = ({ id, heading, ns }) => {
  const { t } = useTranslation(ns);

  const dishes = norimakiMenu(t);

  return (
    <div id={id}>
      <h1 className="text-center text-white font-cormorant text-5xl font-extrabold tracking-wide">
        {heading}
      </h1>
      <CardWrapper dishes={dishes} />
    </div>
  );
};
export default Norimaki;
