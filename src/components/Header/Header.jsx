import { IoMenu } from "react-icons/io5";
import logo from "../../assets/asaxiy-logo.svg";
import ModalWrapper from "../ModalWrapper";
import "./Header.scss";
import { useState } from "react";
import socials from "../../assets/modal-socials.png";
import { MdClose } from "react-icons/md";

function Header({ search, setSearch }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="header">
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
      <button onClick={() => setIsLoginModalOpen((p) => !p)} className="btn">
        Kirish
      </button>

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
            <button className="close" onClick={() => setIsLoginModalOpen(false)}>
              <MdClose size={20} />
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}

export default Header;
