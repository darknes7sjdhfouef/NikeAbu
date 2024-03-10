import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useEffect } from "react";
import "../MoreDetail/MoreDetail.css";
import NavbarTest from "../Navbar/NavbarTest";
import Footer from "../Footer/Footer";
import UpNavbar from "../Navbar/UpNavbar";

const MoreDetail = () => {
  const { getOneProduct, oneProduct } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, );

  console.log(oneProduct);

  return (
    <div id="det">
      <UpNavbar />
      <NavbarTest />
      <div className="container">
        <div className="inf">
          <div className="product-image">
            <img src={oneProduct.img} alt="" />
          </div>
          <div className="product-details">
            <h1>{oneProduct.name}</h1>
            <h2>{oneProduct.type}</h2>
            <h2>{oneProduct.color}</h2>
            <h2>{oneProduct.price}</h2>
          </div>
        </div>
        <div className="description">
          <h2>{oneProduct.description}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoreDetail;
