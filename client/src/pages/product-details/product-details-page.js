// import { Component } from "react";
import "./product-details-page.css";
import GoogleSearchBar from "../../components/search-bar/google-search-bar";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

//productId


const ProductDetailsPage = () => {
    
    const { productId } = useParams();
    console.log(productId);
    
    const [product, setProduct] = useState([]);
    
    const fetchProductDetailsData = () => {
      fetch(`/api/product-details/${productId}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log("api data", data)
          setProduct(data)
        })
    }

    useEffect(() => {
      fetchProductDetailsData();
    }, []);

    return (
    <div className="prod-details-page">
      <div className="details">
        <div className="big-img">
          <img src={product.image?.[0]} alt="" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product.name}</h2>
          </div>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <div className="thumb">
            {product.image?.map((imgUrl) => (
              <img src={imgUrl} alt="product" key={imgUrl} />
            ))}
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews:</h2>
      </div>
      <div>
        <p>Amazon reviews here</p>
      </div>
      <div className="google-search-bar">
        <GoogleSearchBar />
      </div>
    </div>
  );
};
export default ProductDetailsPage;