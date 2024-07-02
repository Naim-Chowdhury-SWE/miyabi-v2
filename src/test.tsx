//test.tsx
import { useTranslation } from "react-i18next";

const Test: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-pink-400 p-4 mt-8">
      <h1 className="text-center">{t("title")}</h1>
    </div>
  );
};

export default Test;
