import React, { useState, useEffect} from "react";
import "./product-page.css";
import { useNavigate } from "react-router"; //hook



const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const navigateToProductDetails = useNavigate();

     const fetchProductData = () => {
        fetch("api/products")
        .then(response => {
          return response.json()
        })
        .then(data => {
            console.log("api data", data)
          setProducts(data)
        })
     }
     useEffect(() => {
        fetchProductData();
    }, []);

    const handleProductClick = (productId) =>{
        navigateToProductDetails(`/product-details/${productId}`);
    }

    const listItems = products.map((item)=>
    <div className="product-container" key={item.id} onClick={() => handleProductClick(item.id)}>
    <div className="card" key={item.id}>
        <div className="card-img">
            <img src={item.image?.[0]} alt="Can't Display"/>
        </div>
        <div className="card-header">
            <h2>{item.name}</h2>
            <p className="product-price">{item.price}</p>
        </div>
    </div>
    </div>
    );


    return (<div className="prod-page-content">
        <h3>All Products</h3>
        {listItems}
    </div>);
} 
export default ProductPage;