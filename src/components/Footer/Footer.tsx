import logo from "../../data/logos";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import SmoothScroll from "../ScrollLink/ScrollLink";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");
  /* eslint-disable no-unused-vars */
  const currentYear = new Date().getFullYear();
  /* eslint-enable no-unused-vars */
  return (
    <footer className="text-white font-opensans font-semibold lg:text-lg flex flex-col items-center">
      <div className="container">
        <img src={logo.logo3} alt="Miyabi Logo" className="mx-8 lg:scale-50" />

        <address
          id="contact"
          className="flex flex-col-reverse md:justify-between md:flex-row m-8 lg:mx-12 xl:mx-40 lg:px-10 xl:px-24"
        >
          <section className="container">
            <a
              href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot style={{ marginRight: "0.5em" }} />
              {t("address")}
            </a>
            <a href="tel:+46763043985">
              <BsTelephoneFill
                style={{
                  marginTop: "2em",
                  marginRight: "0.5em",
                }}
              />
              {t("telNumber")}
            </a>
          </section>

          <section className="min-w-fit">
            <p className="pb-4 text-2xl lg:text-4xl text-center font-opensans">
              {t("openingHours")}
            </p>
            <div className="flex flex-row justify-around md:gap-4 lg:gap-12">
              <div>
                <p>{t("weekDays")}</p>
                <p>
                  <time>11:00 - 21:00</time>
                </p>
              </div>
              <div>
                <p>{t("weekEnd")}</p>
                <p>
                  <time>12:00 - 21:00</time>
                </p>
              </div>
            </div>
          </section>
        </address>
      </div>

      <section className=" bg-red-900 w-full text-black font-bold flex flex-col items-center">
        <p className="mt-2">
          {t("lastOrder")} <time>20:30</time>
        </p>
        <SmoothScroll targetId="Hem" offset="10">
          <div>
            <p className="mt-2 p-2 rounded-lg font-chowfun tracking-widest underline underline-offset-8 hover:bg-red-700 hover:text-white transition duration-300 cursor-pointer">
              {t("top")}
            </p>
          </div>
        </SmoothScroll>
        <p className="mt-2">{currentYear} &copy; Miabi AB</p>
      </section>
    </footer>
  );
};

export default Footer;
