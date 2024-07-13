import Select, { SingleValue } from "react-select";
import { useLanguageContext } from "../../utils/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();

  const options = Object.keys(languages).map((lng) => ({
    value: lng,
    label: languages[lng].nativeName,
  }));

  const handleChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    if (selectedOption) {
      onClickLanguageChange(selectedOption.value);
    }
  };

  return (
    <div className="fixed right-12 lg:right-0 z-40 gap-4 justify-end top-2 lg:top-5 mx-8">
      <Select
        options={options}
        defaultValue={options.find((option) => option.value === "sv")}
        hideSelectedOptions={true}
        onChange={handleChange}
        className="w-36"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "",
            color: "white",
            fontFamily: '"Cormorant Upright", serif',
            fontWeight: "bold",
            fontSize: "20px",
            borderColor: "transparent",
            "&:hover": { borderColor: "#540000" },
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
            paddingLeft: "5px",
            paddingRight: "5px",
          }),
          option: (base, { isFocused }) => ({
            ...base,
            borderRadius: "5px",
            backgroundColor: "",
            color: isFocused ? "white" : "black",
            "&:hover": { backgroundColor: "#540000", color: "white" },
          }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
