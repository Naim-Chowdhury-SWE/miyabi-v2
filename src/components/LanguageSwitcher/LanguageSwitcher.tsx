import Select, { SingleValue } from "react-select";
import { useLanguageContext } from "../../utils/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { languages, onClickLanguageChange, currentLanguage } =
    useLanguageContext();

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
    <aside className="flex justify-center -mt-8 mb-8">
      <div className="bg-gradient-to-b from-red-950 via-red-800 to-red-950 shadow-inner shadow-black rounded-lg w-fit">
        <Select
          options={options}
          defaultValue={options.find(
            (option) => option.value === currentLanguage
          )}
          hideSelectedOptions={true}
          isSearchable={false}
          onChange={handleChange}
          className="w-36"
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "",
              color: "white",
              fontFamily: '"Cormorant Upright", serif',
              fontWeight: "900",
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
              fontWeight: "900",
              fontSize: "20px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "10px",
            }),
            option: (base) => ({
              ...base,
              borderRadius: "10px",
              backgroundColor: "",
              color: "black",
              ":hover": { backgroundColor: "#540000", color: "white" },
            }),
          }}
        />
      </div>
    </aside>
  );
};

export default LanguageSwitcher;
