//utils/LanguageContext.tsx

import { createContext, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { i18n as I18nInstance } from "i18next";
interface Language {
  nativeName: string;
}

interface LanguageContextProps {
  t: (key: string) => string;
  i18n: I18nInstance;
  onClickLanguageChange: (language: string) => void;
  languages: Record<string, Language>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<
  LanguageContextProviderProps
> = ({ children }) => {
  const languages: Record<string, Language> = {
    sv: { nativeName: "Svenska" },
    en: { nativeName: "English" },
    es: { nativeName: "Spanish" },
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageContextProvider"
    );
  }
  return context;
};
