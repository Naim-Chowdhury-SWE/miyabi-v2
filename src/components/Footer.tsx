import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer"); // Use 'footer' namespace

  return (
    <footer>
      <p>{t("footerText")}</p>
    </footer>
  );
};

export default Footer;
