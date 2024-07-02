import React from "react";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const { t } = useTranslation("main"); // Use 'main' namespace

  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
    </main>
  );
};

export default Main;
