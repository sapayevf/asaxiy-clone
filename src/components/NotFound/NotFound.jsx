import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Oops! Sahifa topilmadi.</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </div>
  );
}

export default NotFound;
