import { IoMenu } from "react-icons/io5";
import logo from "../../assets/asaxiy-logo.svg";
import "./Header.scss";

function Header({ search, setSearch, setSortPrice, setSortRating }) {
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
      <select onChange={(e) => setSortPrice(e.target.value)}>
        <option value="">Narx bo'yicha saralash</option>
        <option value="asc">Arzondan Qimmatga</option>
        <option value="desc">Qimmatdan Arzonga</option>
      </select>
      <select onChange={(e) => setSortRating(e.target.value)}>
        <option value="">Reyting bo'yicha saralash</option>
        <option value="asc">Pastdan Tepaga</option>
        <option value="desc">Tepadan Pastga</option>
      </select>
    </div>
  );
}

export default Header;
