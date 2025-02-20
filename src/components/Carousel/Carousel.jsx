import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";
import { Navigation } from "swiper/modules";

function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=15")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        className="mySwiper"
      >
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img"
                />
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                <strong className="price">${product.price}</strong>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </div>
  );
}

export default Carousel;
