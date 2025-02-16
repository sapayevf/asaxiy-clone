import { useState } from "react";
import "./Card.scss";
import { Rating } from "@mui/material";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function Card({ product }) {
  const [liked, setLiked] = useState(false); // Like bosilgan yoki yo'qligini saqlaydi

  const productPrice = Math.floor((product.price * 12800) / 1000) * 1000;
  const som = productPrice.toLocaleString("ru-RU").replace(",", " ");

  return (
    <div className="product-card">
      <div className="card-imgs">
        <FaHeart
          className="like-btn"
          size={24}
          color={liked ? "red" : "gray"} // Bosilganda qizil bo‘ladi
          onClick={() => setLiked(!liked)} // Bosilganda o'zgaradi
        />
        <img className="product-image" src={product.thumbnail} alt="" />
      </div>
      <div className="card-content">
        <h3>{product.title}</h3>

        <div className="product-rating">
          <Rating
            size="small"
            defaultValue={Math.round(product.rating)}
            precision={0.5}
          />
          <p>{product.minimumOrderQuantity} ta sharh</p>
        </div>
        <br />
        <div>
          <p className="price-p">{som} so'm</p>
        </div>
        <div className="card-credit">
          {Math.round(productPrice / 12)} so'm x 12 oy
        </div>
        <br />
      </div>
      <div className="card-btns">
        <button className="buy-btn">Hoziroq xarid qilish</button>
        <button className="buy-btn btn2">
          <BsFillBasket3Fill color="white" />
        </button>
      </div>
    </div>
  );
}

export default Card;
