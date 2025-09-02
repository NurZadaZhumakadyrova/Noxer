import IconTG from "../../assets/icon-TG.png";
import "./Footer.css";
import Hone from "../../assets/home.png";
import Catalog from "../../assets/catalog.png";
import Favorite from "../../assets/favorite.png";
import Trash from "../../assets/cart.png";
import Account from "../../assets/account.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="information">
        <p>Разработано на платформе Noxer</p>
        <span><img src={IconTG} alt="TG"/>noxerai_bot</span>
      </div>
      <div className="footer-contact">
        <div className="footer-icons">
          <img src={Hone} alt="Home"/>
          <img src={Catalog} alt="Catalog"/>
          <img src={Favorite} alt="Favorite"/>
          <img src={Trash} alt="Cart"/>
          <img src={Account} alt="Accaunt"/>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Footer;