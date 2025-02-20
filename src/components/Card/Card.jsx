import { Link } from "react-router-dom";
import "./Card.scss";
import { Rating } from "@mui/material";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { memo, useMemo } from "react";

const Card = memo(({ product }) => {
  const formattedPrice = useMemo(() => {
    return Math.floor((product.price * 12800) / 1000) * 1000;
  }, [product.price]);

  return (
    <div className="product-card">
      <div className="card-imgs">
        <FaHeart className="like-btn" size={24} color="gray" />
        <Link to={`/product/${product.id}`}>
          <img className="product-image" src={product.thumbnail} alt="" />
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
        <button className="buy-btn">Hoziroq xarid qilish</button>
        <button className="buy-btn btn2">
          <BsFillBasket3Fill color="white" />
        </button>
      </div>
    </div>
  );
});

export default Card;
