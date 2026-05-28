import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");
  return (
    <header
      id="Hem"
      className="text-center font-cormorant text-white font-bold lg:text-3xl"
    >
      <h1 className=" text-3xl">{t("welcome")}</h1>
      <p>{t("message")}</p>
      <div className="border-2 border-yellow-400 p-4 text-yellow-400 text-2xl mt-4">
        <p>Restaurangen är stängd under Julafton och Juldagen</p>
        <p>God Jul önksar vi på alla på Miyabi!</p>
      </div>
    </header>
  );
};
export default Header;
