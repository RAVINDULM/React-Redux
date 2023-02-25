import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./../redux/actions/ProductActions";
import axios from "axios";
import "./../App.css";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    const responce = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    console.log("responce", responce.data);
    dispatch(setProducts(responce.data));
  };
  useEffect(() => {
    console.log("use effect called");
    fetchproducts();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
