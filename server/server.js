
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

const products = [
  {id: "1", 
  category: "Shampoo", 
  price: "$30", 
  name: "OLAPLEX Nº.4 BOND MAINTENANCE SHAMPOO", 
  image: ["https://m.media-amazon.com/images/I/6158yVN8ggL._SX522_.jpg",
          "https://m.media-amazon.com/images/I/71+ONDNF95L._SX522_.jpg"],
  description: "A highly moisturizing, reparative shampoo that leaves hair easy to manage, shiny, and healthier with each use. Cruelty free"
},
  
  {id: "2", 
  category: "Shampoo", 
  price: "$9.99", 
  name: "Mielle Rosemary Mint Strengthening Shampoo", 
  image: ["https://cdn.shopify.com/s/files/1/0763/8199/files/RM-Shampoo-04-23-v1_2000x.jpg?v=1682608543",
          "https://cdn.shopify.com/s/files/1/0763/8199/products/20230105-Mielle_RenderResize-RosemaryMint_2048x2048px-Shampoo_C_1_2000x.jpg?v=1682608543"],
  description: "Strengthening Shampoo: This shampoo with biotin provides intense moisture for all hair types with a gentle formula that nourishes, cleanses and helps strengthen weak and brittle hair" 
},

  {id: "3", 
  category: "Conditioner", 
  price: "$8.12", 
  name: "Maui Curl Quench + Coconut Oil Conditioner", 
  image: ["https://media.ulta.com/i/ulta/2302459?w=720&fmt=webp",
          "https://www.mauimoisture.com/wp-content/uploads/2020/12/CurlQuenchCoconutOilConditioner_Product_1.png",
          "https://www.mauimoisture.com/wp-content/uploads/2020/12/CurlQuenchCoconutOilConditioner_Product_2.png",
          "https://www.mauimoisture.com/wp-content/uploads/2020/12/CurlQuench_CoconutOilConditioner_Goop_3.jpg"],
  description: "Rich coconut oil is blended into this creamy conditioner along with papaya butter and plumeria extract. It helps detangle, defrizz and define your curls, while enhancing softness and body for shiny, bouncy curls, coils or waves."
  },

  {id: "4", 
  category: "Deep Conditioner", 
  price: "$20",
  name: "Camille Rose Naturals Algae Renew Cocoa & Mango Butter Deep Conditioner", 
  image:[ "https://cdn.shopify.com/s/files/1/0980/9736/products/AlgaeRenew-1024x1024_1024x1024.png?v=1574835794",
          "https://target.scene7.com/is/image/Target/GUEST_56580e80-a2b8-4d34-b10e-cd21bfb84b54?wid=1000&hei=1000&qlt=80&fmt=webp",
          "https://target.scene7.com/is/image/Target/GUEST_568bfe88-7779-4e1e-887a-f832c0fa12ef?wid=1000&hei=1000&qlt=80&fmt=webp"],
  description:"Give your locks a deep conditioning boost with the Algae Renew Deep Conditioner from Camille Rose. This renewing conditioning treatment contains unrefined cocoa and mango butter for softness and maximum moisturizing benefits, biotin for healthy growth and strength and vitamin-rich blue algae to restore nutrients to your hair. For best results, apply this algae conditioner to wet or dry hair, leave in for at least 10 minutes, and rinse with cool water."},
  
  {id: "5", 
  category: "Leave-In Conditioner", 
  price: "$9.97", 
  name: "SheaMoisture Jamaican Black Castor Oil Leave In Conditioner 11.5oz", 
  image: ["https://m.media-amazon.com/images/I/71uQDV9OH7L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/71afA5Ei++L._SX679_.jpg",
          "https://media.ulta.com/i/ulta/2281363_alt03?w=720&fmt=webp",
          "https://media.ulta.com/i/ulta/2281363_alt04?w=720&fmt=webp"],
  description:"Shea Moisture's Jamaican Black Castor Oil Strengthen & Restore Leave-In Conditioner with Shea Butter, Peppermint & Apple Cider Vinegar intensely smooths & nourishes natural, chemically processed or heat styled hair."
},
  
  {id: "6", 
  category: "Hair Mask", 
  price: "$9.99", 
  name: "Mielle Rosemary Mint Strengthening Hair Masque", 
  image: [ 
    "https://cdn.shopify.com/s/files/1/0763/8199/files/RMHairMasque-Front_2000x.png?v=1682608395",
    "https://cdn.shopify.com/s/files/1/0763/8199/products/20230105-Mielle_RenderResize-RosemaryMint_2048x2048px-Masque_C-min_2000x.jpg?v=1682608395"
],
description: "DEEP NOURISHMENT FOR DAMAGED HAIR: Our nutrient-rich mask fuses biotin with aloe, honey, and a blend of nourishing essential oils to create an intensive reconstructing treatment with a fresh, invigorating scent for dry, brittle, thirsty hair"
},
  {id: "7", 
  category: "Styling Cream", 
  price: "$8.99", 
  name: "Cake THE CURL FRIEND", 
  image: ["https://cdn.shopify.com/s/files/1/1317/9157/products/the_curl_friend_177ml_bi_front_1280x1280_d6065796-2b22-4a5b-9870-34780af5abf0_1280x1280.png?v=1643987348",
          "https://cdn.shopify.com/s/files/1/1317/9157/products/Cake_The_Curl_Friend_177ml_Bi_Back_1024x1024.jpg?v=1643987348"],
  description:"This savvy styler wraps each tendril in a veil of silky-moisture for glossy, defined, frizz-free curls. With the help of a trio of natural butters and oils, this feather-light formula treats your hair as it styles, transforming unruly curls into tame, polished perfection, without the harsh chemicals."
},
  
  {id: "8", 
  category: "Accessory", 
  price: "$8.99", 
  name: "BEDELITE Satin Silk Pillowcase Coral Pillow Cases Standard Size Set of 2 Pack Super Soft Pillow Case with Envelope Closure (20x26 Inches)", 
  image: ["https://m.media-amazon.com/images/I/51ZpmeXCYhL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/71uJaaQj4bL._AC_SX679_.jpg",
          "https://m.media-amazon.com/images/I/61Ipb6cHkKL._AC_SX679_.jpg"],
  description: "100% Polyester Satin: BEDELITE Satin Pillowcase creates less friction for your curly hair and reduces hair breakage than sleeping on cotton pillowcases. She will not absorb moisture to help retain your shiny hair, perfect for curly hair."}
];


app.get('/api/products', (req, res) => {
  console.log('api/products called!')
  res.json(products);
});

app.get("/api/product-details/:productId", (req, res) => {
  console.log('api/product-details:id was called!')
  const productId = req.params.productId;
  const product = products.find((item) => item.id === productId);
  res.json(product);
});