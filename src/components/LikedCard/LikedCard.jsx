import { useLike } from "../../context/LikeContext";
import Card from "../Card/Card"
import "./LikedCard.scss"
import { useNavigate } from "react-router-dom"; 

const LikedCards = () => {
  const { likedCards } = useLike();
  const navigate = useNavigate();

  return (
    <div className="liked-cards-page">
      <h2>Sevimli mahsulotlaringiz</h2>

      <button className="home-btn" onClick={() => navigate("/")}>
        Bosh sahifaga qaytish
      </button>

      {likedCards.length > 0 ? (
        <div className="liked-cards-container">
          {likedCards.map((product) => (
            <Card key={product.id} product={product} isLikedPage={true} />
          ))}
        </div>
      ) : (
        <p>Hali hech qanday mahsulot yoqtirilmagan.</p>
      )}
    </div>
  );
};

export default LikedCards;
