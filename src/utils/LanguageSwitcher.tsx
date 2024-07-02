//utils/LanguageSwitcher.tsx

import Select from "react-select";
import { useLanguageContext } from "./LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();

  const options = Object.keys(languages).map((lng) => ({
    value: lng,
    label: languages[lng].nativeName,
  }));

  const handleChange = (selectedOption: { value: string; label: string }) => {
    onClickLanguageChange({ target: { value: selectedOption.value } });
  };

  return (
    <div className="flex gap-4 justify-center pt-24">
      <Select
        options={options}
        defaultValue={options.find((option) => option.value === "sv")}
        onChange={handleChange}
        className="w-36"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "darkred",
            color: "white",
            fontFamily: '"Cormorant Upright", serif',
            fontWeight: "bold",
            fontSize: "20px",
            borderColor: "darkred",
            "&:hover": { borderColor: "red" },
          }),
          singleValue: (base) => ({
            ...base,
            color: "white",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "darkred",
            fontFamily: '"Cormorant Upright", serif',
            fontWeight: "bold",
            fontSize: "20px",
          }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? "red" : "darkred",
            color: isFocused ? "white" : "white",
            "&:hover": { backgroundColor: "red", color: "white" },
          }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
