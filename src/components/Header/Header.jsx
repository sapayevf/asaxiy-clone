import { IoMenu } from "react-icons/io5";
import logo from "../../assets/asaxiy-logo.svg";
import ModalWrapper from "../ModalWrapper";
import { useLike } from "../../context/LikeContext";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
import socials from "../../assets/modal-socials.png";
import { MdClose } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { SlBasketLoaded } from "react-icons/sl";

function Header({ search, setSearch }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { likedCards } = useLike();
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="header container">
      <img src={logo} alt="Asaxiy Logo" />
      <button className="btn btn3">
        <IoMenu size={20} color="white" /> Bo'limlar
      </button>
      <div className="input-header">
        <input
          type="text"
          placeholder="Qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">Qidirish</button>
      </div>

      <div className="header-btns">
        <Link to="/cart">
          <button className="like-counter-btn">
            <SlBasketLoaded size={25} color="gray" />
            {totalItems > 0 && <span className="like-count">{totalItems}</span>}
          </button>
        </Link>
        <Link to="/liked-cards">
          <button className="like-counter-btn">
            <FaRegHeart size={25} color="gray" />
            {likedCards.length > 0 && (
              <span className="like-count">{likedCards.length}</span>
            )}
          </button>
        </Link>
        <button onClick={() => setIsLoginModalOpen((p) => !p)} className="btn">
          Kirish
        </button>
      </div>

      {isLoginModalOpen && (
        <ModalWrapper
          open={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        >
          <div className="login">
            <h1 className="login-h1">Kirish yoki shaxsiy kabinet yaratish</h1>
            <p className="login-p">Telefon</p>
            <input type="text" placeholder="+998" />
            <button className="btn">Faollashtirish kodini oling</button>
            <p className="yoki">yoki</p>
            <img src={socials} className="socials" alt="" />
            <button
              className="close"
              onClick={() => setIsLoginModalOpen(false)}
            >
              <MdClose size={20} />
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}

export default Header;
