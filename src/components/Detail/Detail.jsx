import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const Detail = () => {
  const { id } = useParams();
  const { data } = useProduct();
  const [clothe, setClothe] = useState(null);

  useEffect(() => {
    if (data && data.length > 0 && id) {
      const selectedClothe = data.find((clothe) => clothe.id === id);
      if (selectedClothe) {
        setClothe(selectedClothe);
      }
    }
  }, [data, id]);

  return (
    <div className="container">
      <div>
        {clothe ? (
          <div style={{ display: "flex", gap: "30px" }}>
            <img
              style={{ width: "450px", height: "600px" }}
              src={clothe.img}
              alt=""
            />
            <div
              style={{
                width: "700px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              className="dis"
            >
              <h2>{clothe.name}</h2>
              <h2>{clothe.price}</h2>
              <h2>{clothe.categotia}</h2>
              <p>{clothe.description}</p>
            </div>
          </div>
        ) : (
          <div className="Detail">
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;