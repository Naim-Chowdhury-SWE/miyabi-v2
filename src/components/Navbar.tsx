import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation("nav"); // Use 'nav' namespace

  return (
    <nav>
      <ul>
        <li>{t("home")}</li>
        <li>{t("about")}</li>
        <li>{t("contact")}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
