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
    </header>
  );
};
export default Header;
