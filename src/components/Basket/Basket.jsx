import React from 'react';
import { useProduct } from '../context/ProductContext';
import './Basket.css'; 

function Basket() {
  const { basket, deleteFromBasket } = useProduct();

  const handleDelete = (id) => {
    deleteFromBasket(id);
  };

  return (
    <div className="basket-container">
      <h2 className="basket-title">Корзина</h2>
      <ul className="basket-items">
        {basket.map(item => (
          <li key={item.id} className="basket-item">
            <img src={item.img} alt={item.name} className="item-image" />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
              <p className="item-type">{item.type}</p>
              <p className="item-color">{item.color}</p>
              <button onClick={() => handleDelete(item.id)}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;
