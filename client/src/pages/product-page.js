// import { ListItem } from "@mui/material";
import React from "react";
import "./product-page.css";
import product from "../components/product-data.js";


const ProductPage = () => {
    console.log(product)
    const listItems = product.map((item)=>
    <div className="card" key={item.id}>
        <div className="card-img">
            <img scr={item.image} alt="Can't Display"/>
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