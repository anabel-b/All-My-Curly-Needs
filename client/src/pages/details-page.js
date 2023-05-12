import React from "react";

const products_details = [
    {id: "1", price: "$20", title: "Shampoo test", scr:"../assets/Images/Image-testing/mielle-prod-front.png"}
]


function DetiailsPage(){
    console.log(products_details)
    const listItems = products_details.map((item)=>
    <div className="card" key={item.id}>
        <div className="card-img">
            <img scr={item.image} alt="cant display"/>
            <p className="product-price">{item.price}</p>
        </div>
    </div>
    );

    return (<div className="prod-page-content">
        {listItems}
    </div>);
}
export default DetiailsPage;