import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation("cta");
  const takeawayClick = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked TakeAway Link",
      label: "TakeAway Click",
    });
  };

  const hemleveransClick = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked Home Delivery Link",
      label: "Hemleverans Click",
    });
  };
  return (
    <div className="flex flex-row text-xs gap-10 my-20 md:text-lg justify-center font-chowfun font-semibold tracking-wider">
      <a
        href="https://app.fasterorder.se/menu/sv/37"
        target="_blank"
        rel="noreferrer"
        onClick={takeawayClick}
        className="from-red-950 via-red-800 to-red-950 bg-gradient-to-b shadow-inner shadow-black hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-lg p-4"
      >
        {t("takeaway")}
      </a>

      <a
        href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
        target="_blank"
        rel="noreferrer"
        onClick={hemleveransClick}
        className="from-red-950 via-red-800 to-red-950 bg-gradient-to-b shadow-inner shadow-black hover:bg-red-600 hover:text-white duration-300 hover:scale-105 cursor-pointer rounded-lg p-4"
      >
        {t("homeDelivery")}
      </a>
    </div>
  );
};
export default CTA;
