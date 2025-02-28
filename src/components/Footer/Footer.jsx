import "./Footer.scss";
import tolov from "../../assets/banks.png";
import socials from "../../assets/socials.png";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="div1">
          <h3>{t("footer.Malumotlar")}</h3>
          <p>{t("footer.KopSoraladiganSavollar")}</p>
          <p>{t("footer.Yangiliklar")}</p>
          <p>{t("footer.Blog")}</p>
          <p>{t("footer.Brend")}</p>
          <p>{t("footer.Karyeramiz")}</p>
          <p>{t("footer.MuddatliTolov")}</p>
          <p>{t("footer.OmmaviyOferta")}</p>
          <p>{t("footer.BizHaqimizda")}</p>
          <p>{t("footer.SaytHaritasi")}</p>
        </div>
        <div className="div1">
          <h3>{t("footer.Bizbilanaloqa")}</h3>
          <p>+998 71 200 01 05</p>
          <p>info@asaxiy.uz</p>
          <p>Telegram bot</p>
          <p>Chilonzor ko'chasi, 45/2, Toshkent</p>
          <h3>Sodiqlik dasturlari</h3>
          <p>"El-yurt ishonchi" statusi </p>
          <p>Asaxiy Plus</p>
          <p>Asaxiy Plus ofertasi</p>
        </div>
        <div className="div1">
          <h3>{t("footer.Yetkazibberishvadokonlar")}</h3>
          <div className="dokon">
            <p>{t("footer.Dokonlar")}</p>
          </div>
          <div className="dokon">
            <p>{t("footer.Olibketishpunktlari")}</p>
          </div>
          <div className="dokon">
            <p>{t("footer.Yetkazibberish")}</p>
          </div>
        </div>
        <div>
          <h3>{t("footer.Tolovturlari")}</h3>
          <img src={tolov} alt="" />
          <h3>{t("footer.Ijtimoiytarmoqlar")}</h3>
          <img src={socials} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
