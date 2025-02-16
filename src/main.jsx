import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Products />
    <Footer></Footer>
  </StrictMode>
);
