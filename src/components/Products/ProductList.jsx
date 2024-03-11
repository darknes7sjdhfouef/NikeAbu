import React, { useState } from "react";
import { Box, IconButton } from "@mui/material"; // Для иконки корзины
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const navigate = useNavigate();
  const { productCount, product, currentPage } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBasketClick = () => {
    navigate("/basket");
  };

  const handleDetailClick = () => {
    navigate("/detail");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? product.filter((item) => item.type.toLowerCase().includes(selectedCategory.toLowerCase()))
    : currentPage();

  return (
    <Box
      style={{
        padding: "30px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >
      <div>
        <button
          style={{ padding: "8px 16px", borderRadius: "4px", background: selectedCategory === null ? "blue" : "gray", color: "white", border: "none", cursor: "pointer" }}
          onClick={() => handleCategorySelect(null)}
        >
          All
        </button>
        <button
          style={{ padding: "8px 16px", borderRadius: "4px", background: selectedCategory === "man" ? "blue" : "gray", color: "white", border: "none", cursor: "pointer" }}
          onClick={() => handleCategorySelect("man")}
        >
          Man
        </button>
        <button
          style={{ padding: "8px 16px", borderRadius: "4px", background: selectedCategory === "baby/toddler shoes" ? "blue" : "gray", color: "white", border: "none", cursor: "pointer" }}
          onClick={() => handleCategorySelect("baby/toddler shoes")}
        >
          Baby/Toddler Shoes
        </button>
      </div>
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} handleDetailClick={handleDetailClick} i={item} />
      ))}
      <IconButton onClick={handleBasketClick}>
      </IconButton>
    </Box>
  );
};

export default ProductList;
