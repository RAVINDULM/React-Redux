import React from "react";
import { useSelector } from "react-redux";
import "./../App.css";
function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderlist = products.map((product) => {
    const { id, title, image, price, category } = product;
    console.log(product.id);
    return (
      <div className="four column wide">
        <div className="ui link cards" key={id}>
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="header">$ {price}</div>
              <div className="header">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderlist}</>;
}

export default ProductComponent;
