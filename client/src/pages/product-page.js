// import { ListItem } from "@mui/material";
import React, { useState } from "react";
import "./product-page.css";
// import product from "../components/product-data.js";


const ProductPage = () => {
    const [products, setProducts] = useState([]);

    // const fetchUserData = () => {
        fetch("api/products")
        .then(response => {
          return response.json()
        })
        .then(data => {
            console.log("api data", data)
          setProducts(data)
        })
    // }
    const listItems = products.map((item)=>
    <div className="card" key={item.id}>
        <div className="card-img">
            <img src={item.image} alt="Can't Display"/>
        </div>
        <div className="card-header">
            <h2>{item.name}</h2>
            <p className="product-price">{item.price}</p>
        </div>

    </div>
    );


    return (<div className="prod-page-content">
        {listItems}
    </div>);

} 
export default ProductPage;