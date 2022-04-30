
import {getProductDetails} from "../../Network/ProductsApis";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails() {
  const [productDetails, setProductDetails] = React.useState({});
  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container">
      <h3>ProductDetails</h3>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="details-img-container">
          <img
            className="details-img"
            src={productDetails.image}
            alt={productDetails.title}
          />
          </div>
         
          <div className="card-body">
            <h5 className="card-title">{productDetails.title}</h5>
            <h4 className="card-text">{productDetails.price}$</h4>
            <p className="card-text">{productDetails.description}</p>
            <p className="card-text">
              <small className="text-muted">{productDetails.category}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
