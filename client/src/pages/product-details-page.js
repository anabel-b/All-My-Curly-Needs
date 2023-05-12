import { Component } from "react";
import "./product-details-page.css";
import GoogleSearchBar from "../components/SearchBar/google-search-bar";


class ProductDetailsPage extends Component{
    state = {
        products: [
            {
            "id": "1",
            "title": "Pomegranate & Honey Coil Sculpting Custard",
            "scr":[ 
                "https://cdn.shopify.com/s/files/1/0763/8199/products/MIELLE_ORGANICS_POMEGRANATE_HONEY_TOP_12OZ_158655772_2000x.jpg?v=1571438862",
                "https://cdn.shopify.com/s/files/1/0763/8199/products/pomegranate_honey_custard_back_1_2000x.png?v=1672924372"
            ],
            "description": "Mielle Organics Pomegranate & Honey Sculpting Custard, Natural Styling Cream Plus Moisture, For Curl, Wave, & Coil Definition for Natural or Relaxed Type 4 Hair, 12-Fluid Ounces",
            "price" : 12.99
            }
        ]
    }
    render(){
        const {products} = this.state;
        console.log(products);
        return (<div className="prod-details-page"> 
            { 
                products.map(item =>(
                    <div className="details"> 
                    {/* <button>compare</button> */}
                        <div className="big-img">
                            <img src={item.scr[0]} alt=""/>
                        </div>
                        <div className="box">
                            <div className="row">
                            <h2>{item.title}</h2>
                            </div>
                            <p>{item.description}</p>
                            <span>${item.price}</span>
                            <div className="thumb">
                                {
                                 item.scr.map(img =>(
                                    <img src = {img} alt="product"/>
                                 ))
                                }
                            </div>
                        </div>
                    </div>
                ))
                
            }
            <div className="reviews">
                <h2>
                  Reviews:
                </h2>
            </div>
            <div>
               <p> amazon reviews here</p>
            </div>
            <div className="google-search-bar">
            <GoogleSearchBar/>
            </div>
        </div>
        );
    }  
}
export default ProductDetailsPage;