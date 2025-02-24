import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Details/ProductDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { LikeProvider } from "./context/LikeContext";
import LikedCards from "./components/LikedCard/LikedCard"; 

function App() {
  const [search, setSearch] = useState("");

  return (
    <StrictMode>
      <LikeProvider>
        <Router>
          <Header search={search} setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Products search={search} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/liked-cards" element={<LikedCards />} />
          </Routes>
          <Footer />
        </Router>
      </LikeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
