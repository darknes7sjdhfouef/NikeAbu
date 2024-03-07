import React from "react";
import { Box, Badge, IconButton } from "@mui/material";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const navigate = useNavigate();
  const { productCount, product, currentPage } = useProduct();

  const handleBasketClick = () => {
    navigate("/basket");
  };


  const handleDetailClick = () => {
    navigate("/detail");
  };
  return (
    <Box
      sx={{
        p: "30px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >
      {product && currentPage().map((i) => <ProductCard handleDetailClick={handleDetailClick} i={i} />)}

      <IconButton onClick={handleBasketClick}>
        <Badge badgeContent={productCount} color="secondary">
        </Badge>
      </IconButton>
    </Box>

  )
}

export default ProductList
