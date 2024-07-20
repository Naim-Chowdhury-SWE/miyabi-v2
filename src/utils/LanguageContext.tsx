import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
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
  currentLanguage: string;
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
    es: { nativeName: "Español" },
  };

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const onClickLanguageChange = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    },
    [i18n]
  );

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages, currentLanguage }}
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
