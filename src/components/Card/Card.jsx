import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { memo, useMemo } from "react";
import { useLike } from "../../context/LikeContext";
import { useCart } from "../../context/CartContext";
import "./Card.scss";
import { useTranslation } from "react-i18next";

const Card = memo(({ product, isLikedPage = false }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { t } = useTranslation();

  const formattedPrice = useMemo(() => {
    return Math.floor((product.price * 12800) / 1000) * 1000;
  }, [product.price]);

  const { likedCards, toggleLike } = useLike();
  const isLiked = likedCards.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="card-imgs">
        <div className="like-btn" onClick={() => toggleLike(product)}>
          {isLikedPage ? (
            <FaHeartBroken size={24} color="red" />
          ) : (
            <FaHeart size={24} color={isLiked ? "red" : "gray"} />
          )}
        </div>

        <Link to={`/product/${product.id}`}>
          <img
            className="product-image"
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>
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
        <p className="price-p">{formattedPrice} so'm</p>
      </div>
      <div className="card-btns">
        <button className="buy-btn">{t("sotibolish")}</button>
        <button onClick={() => addToCart(product)} className="buy-btn btn2">
          <BsFillBasket3Fill color="white" />
        </button>
      </div>
    </div>
  );
});

export default Card;
