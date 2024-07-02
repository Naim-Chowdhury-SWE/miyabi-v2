//utils/LanguageContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  nativeName: string;
}

interface LanguageContextProps {
  t: (key: string) => string;
  i18n: any;
  onClickLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  languages: Record<string, Language>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
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
    // Add more languages here
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language); // Change the language
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
