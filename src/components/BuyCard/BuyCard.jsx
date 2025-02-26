import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";

import "./BuyCard.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import ModalWrapper from "../ModalWrapper";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  return (
    <div className="container">
      <h2>Savatcha</h2>
      <br />
      {cart.length === 0 ? (
        <p>Savatcha bo‘sh</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li className="card-2" key={item.id}>
                <div className="card-2-title">
                  <img src={item.thumbnail} alt={item.title} width="50" />
                  <b>{item.title}</b>
                </div>
                <div className="quantity-controls">
                  <div className="counter">
                    <button
                      className="count"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <b>{item.quantity}</b>
                    <button
                      className="count"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <b>
                    {Math.floor((item.price * 12800) / 1000) *
                      1000 *
                      item.quantity}{" "}
                    so'm
                  </b>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaRegTrashAlt color="red" size={25} />
                  </button>
                </div>
              </li>
            ))}
          </ul>{" "}
          <br /> <br />
          <h3>
            Umumiy narx: {Math.floor((totalPrice * 12800) / 1000) * 1000} so'm
          </h3>
          <br />
          <button className="home-btn" onClick={() => setIsBuyModalOpen(true)}>
            Sotib olish
          </button>
        </>
      )}
      <br />
      <br />
      <button className="home-btn" onClick={() => navigate("/")}>
        Bosh sahifaga qaytish
      </button>

      {isBuyModalOpen && (
        <ModalWrapper
          open={isBuyModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        >
          <div className="login">
            <h1 className="login-h1">Hoziroq xarid qilish</h1>
            <h3>
              Umumiy narx: {Math.floor((totalPrice * 12800) / 1000) * 1000} so'm
            </h3>
            <p className="login-p">Telefon</p>
            <input type="text" placeholder="+998" />
            <p className="login-p">Ism</p>
            <input type="text" placeholder="Ismingiz..." />
            <button className="btn">Sotib olish</button>
            <button className="close" onClick={() => setIsBuyModalOpen(false)}>
              <MdClose size={20} />
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default Cart;
