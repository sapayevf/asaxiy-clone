import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState(() => {
    const savedLikes = localStorage.getItem("likedCards");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  const toggleLike = (product) => {
    setLikedCards((prev) => {
      const isLiked = prev.some((item) => item.id === product.id);
      const updatedLikes = isLiked
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];

      localStorage.setItem("likedCards", JSON.stringify(updatedLikes));
      return updatedLikes;
    });
  };

  return (
    <LikeContext.Provider value={{ likedCards, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike must be used within a LikeProvider");
  }
  return context;
};
