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
app.get('/api/products', (req, res) => {
  console.log('api/products called!')
  const products = [{
    id: "1", 
    category: "Shampoo", 
    price: "$30", 
    name: "OLAPLEX Nº.4 BOND MAINTENANCE SHAMPOO", 
    image: "https://cdn.shopify.com/s/files/1/0434/1661/products/782-AllureSealAddition_4_5__No4250ml_2000x2000_Transparent_Right_1440x.png?v=1666712424"
  }]
  res.json(products);
});