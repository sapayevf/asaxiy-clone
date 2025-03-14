import { useEffect, useState } from "react";
import api from "../API/api";
import Card from "../Card/Card";
import "./Products.scss";
import Skeleton from "@mui/material/Skeleton";
import { Grid, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [sortRating, setSortRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [dataLength, setDataLength] = useState(0);

  const limit = 20;

  useEffect(() => {
    setLoading(true);
    api
      .get("/products", {
        params: {
          limit: limit * count,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
        setDataLength(res.data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortPrice === "asc") return a.price - b.price;
      if (sortPrice === "desc") return b.price - a.price;
      return 0;
    })
    .sort((a, b) => {
      if (sortRating === "asc") return a.rating - b.rating;
      if (sortRating === "desc") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container">

    <Carousel />

      {loading ? (
        <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box>
                <Skeleton variant="rectangular" width="100%" height={150} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="product-cards">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}

      {products.length > 0 && dataLength > limit * count ? (
        <button
          onClick={() => setCount((p) => p + 1)}
          className="show-more-btn"
        >
          Show More
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Products;
