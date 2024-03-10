import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API_PRODUCTS = "http://localhost:3000/product";
  let API_BASKET = "http://localhost:3000/basket";

  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    readProduct();
    readBasket();
  }, []);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setProduct(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, updatedProduct) {
    await axios.put(`${API_PRODUCTS}/${id}`, updatedProduct);
    readProduct();
  }

  async function readBasket() {
    const { data } = await axios(API_BASKET);
    setBasket(data);
  }

  async function addToBasket(item) {
    await axios.post(API_BASKET, item);
    readBasket(); // Обновляем корзину после добавления товара
  }

  async function deleteFromBasket(id) {
    await axios.delete(`${API_BASKET}/${id}`);
    readBasket(); // Обновляем корзину после удаления товара
  }

  const count = Math.ceil(product.length / itemsPerPage);

  function currentPage() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return product.slice(begin, end);
  }

  let values = {
    addProduct,
    readProduct,
    product,
    setProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct,
    count,
    page,
    setPage,
    currentPage,
    addToBasket,
    basket,
    deleteFromBasket, 
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
