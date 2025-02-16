import "./Footer.scss";
import tolov from "../../assets/banks.png";
import socials from "../../assets/socials.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="div1">
          <h3>Ma'lumotlar</h3>
          <p>Ko'p so'raladigan savollar</p>
          <p>Yangiliklar</p>
          <p>Blog</p>
          <p>Brend</p>
          <p>Karyeramiz</p>
          <p>Muddatli to'lov</p>
          <p>Ommaviy oferta</p>
          <p>Biz haqimizda</p>
          <p>Biz haqimizda</p>
          <p>Sayt haritasi</p>
        </div>
        <div className="div1">
          <h3>Biz bilan aloqa</h3>
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
          <h3>Yetkazib berish va do'konlar</h3>
          <div className="dokon">
            <p>Do'konlar</p>
          </div>
          <div className="dokon">
            <p>Olib ketish punktlari</p>
          </div>
          <div className="dokon">
            <p>Yetkazib berish</p>
          </div>
        </div>
        <div>
          <h3>To'lov turlari</h3>
          <img src={tolov} alt="" />
          <h3>Ijtimoiy tarmoqlar</h3>
          <img src={socials} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
