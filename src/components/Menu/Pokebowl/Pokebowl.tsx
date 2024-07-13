import CardWrapper from "../../CardWrapper/CardWrapper";
import { useTranslation } from "react-i18next";
import { pokebowlMenu } from "../../../data/MenuData/Pokebowl";
import { MenuId } from "../../../types";

const Pokebowl: React.FC<MenuId> = ({ id, ns }) => {
  const { t } = useTranslation(ns);

  const dishes = pokebowlMenu(t);

  return (
    <div id={id}>
      <h1 className="text-center text-white font-cormorant text-5xl font-extrabold tracking-wide">
        {t("heading")}
      </h1>
      <CardWrapper dishes={dishes} />
    </div>
  );
};
export default Pokebowl;
