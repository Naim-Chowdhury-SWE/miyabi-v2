import CardWrapper from "../../CardWrapper/CardWrapper";
import { useTranslation } from "react-i18next";
import { sashimiMenu } from "../../../data/MenuData/Sashimi";
import { MenuId } from "../../../types";

const Sashimi: React.FC<MenuId> = ({ id, heading, ns }) => {
  const { t } = useTranslation(ns);

  const dishes = sashimiMenu(t);

  return (
    <div id={id}>
      <h1 className="text-center text-golden font-cormorant text-5xl font-extrabold tracking-wide">
        {heading}
      </h1>
      <CardWrapper dishes={dishes} />
    </div>
  );
};

export default Sashimi;
