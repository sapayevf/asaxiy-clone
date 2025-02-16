import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detail.scss";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Yuklanmoqda...</p>;
  if (!product) return <p className="not-found">Mahsulot topilmadi</p>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">
          {Math.floor((product.price * 12800) / 1000) * 1000} so'm
        </p>
        <button className="buy-btn">Xarid qilish</button>
      </div>
    </div>
  );
}

export default ProductDetail;
