import React from "react";
import { Link } from "react-router-dom";
import './ProductsCard.css';


function ProductsCard({ product }) {
  return (
    <div>
    <div className="card h-100 main-card" >
      <img className="card-img-top card-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <p className="card-text price">
        {product.price}$
        </p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
    </div>
  );
}

export default ProductsCard;
