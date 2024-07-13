import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../data/logos";
import { useState, useEffect } from "react";
import SmoothScroll from "../ScrollLink/ScrollLink";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("nav");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isDropdownEnabled, setIsDropdownEnabled] = useState(true);
  const [isMenyDropdownOpen, setIsMenyDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsContactDropdownOpen(false);
    setIsMenyDropdownOpen(false);
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleContactDropdown = () => {
    setIsDropdownOpen(false);
    setIsContactDropdownOpen((prevState) => !prevState);
  };

  const toggleMenyDropdown = () => {
    setIsDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsMenyDropdownOpen((prevState) => !prevState);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsMenyDropdownOpen(false);
  };

  const handleScroll = () => {
    closeDropdowns();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLinkClick = () => {
    closeDropdowns();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownEnabled(window.innerWidth <= 1024);
      closeDropdowns();
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-red-900 w-full fixed z-30 top-0 p-2 min-h-12 font-chowfun tracking-wider">
      <img
        src={logo.miyabitextblack}
        alt="Miyabi Logo"
        className="h-10 lg:h-16 m-auto float-left"
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 lg:m-1 p-auto float-right lg:hidden cursor-pointer rounded-md hover:bg-red-700`}
        onMouseEnter={(e) =>
          e.currentTarget
            .querySelectorAll("path")
            .forEach((path) => path.setAttribute("stroke", "#fff"))
        }
        onMouseLeave={(e) =>
          e.currentTarget
            .querySelectorAll("path")
            .forEach((path) => path.setAttribute("stroke", "#000"))
        }
        onClick={toggleDropdown}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>

      <div className="justify-center hidden lg:flex p-1">
        <ul className="flex items-center mx-4 text-black font-bold">
          <div
            className={`relative cursor-pointer transition duration-300 rounded-lg mx-2 flex justify-center ${
              isMenyDropdownOpen
                ? "bg-red-900 text-white"
                : "hover:bg-red-700 hover:text-white"
            }`}
            onClick={toggleMenyDropdown}
          >
            <li className="relative m-4">{t("menu")}</li>
          </div>
          <div className="hover:bg-red-700 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
            <li className="m-4">
              <SmoothScroll targetId={"contact"}>{t("contact")}</SmoothScroll>
            </li>
          </div>
          <div className="hover:bg-red-700 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
            <li className="m-4">
              <a
                href="https://app.fasterorder.se/menu/sv/37"
                target="_blank"
                rel="noreferrer"
              >
                {t("orderTakeaway")}
              </a>
            </li>
          </div>
          <div className="hover:bg-red-700 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
            <li className="m-4">
              <a
                href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
                target="_blank"
                rel="noreferrer"
              >
                {t("homeDelivery")}
              </a>
            </li>
          </div>
        </ul>
      </div>
      {isDropdownOpen && isDropdownEnabled && (
        <div className="w-full z-40 overflow-auto" onClick={handleLinkClick}>
          <ul className="flex flex-col justify-center items-center text-center text-black font-semibold gap-8 mt-8">
            <li className="shadow-black shadow-xl hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-lg p-4">
              <a
                href="https://app.fasterorder.se/menu/sv/37"
                target="_blank"
                rel="noreferrer"
              >
                {t("orderTakeaway")}
              </a>
            </li>
            <li className="shadow-black shadow-xl hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-lg p-4">
              <a
                href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
                target="_blank"
                rel="noreferrer"
              >
                {t("homeDelivery")}
              </a>
            </li>
            <li className="shadow-black shadow-xl hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-lg p-4">
              <a href="tel:+46763043985">{t("call")}</a>
            </li>
            <div>
              <li className="font-bold text-xl">{t("menu")}</li>
            </div>
            <br />
          </ul>
        </div>
      )}
      {isDropdownOpen && isDropdownEnabled && (
        <p
          className="my-2 hover:bg-red-700 font-semibold text-center hover:text-white transition duration-300 cursor-pointer"
          onClick={toggleContactDropdown}
        >
          {t("contact")}
        </p>
      )}
      {isContactDropdownOpen && isDropdownEnabled && (
        <div
          className="text-black font-bold w-full z-40 overflow-auto p-4"
          onClick={handleLinkClick}
        >
          <address className="bg-red-900 font-opensans text- lgfont-bold w-full lg:w-1/5 lg:p-4">
            <a className="flex flex-col items-center" href="tel:+46763043985">
              <BsTelephoneFill />
              <p className="top-4">{t("telNumber")}</p>
            </a>
            <a
              className="flex flex-col items-center mt-4"
              href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot />
              <p>{t("address")}</p>
            </a>
          </address>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
