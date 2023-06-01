import "./product-details-page.css";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import GoogleMapLoad from "../../components/google-map/google-map";

//productId


const ProductDetailsPage = () => {
    
    const { productId } = useParams();
    console.log(productId);
    
    const [product, setProduct] = useState([]);
    const [mainImage, setMainImage] = useState([]);
    
    const fetchProductDetailsData = () => {
      fetch(`/api/product-details/${productId}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log("api data", data)
          setProduct(data)
          setMainImage(data?.image?.[0] || null)
        })
    }

    useEffect(() => {
      fetchProductDetailsData();
    }, []);

    const handleThumbClick = (imgUrl) =>{
      setMainImage(imgUrl);
    } 

    return (
    <div className="prod-details-page">
      <div className="details">
        <div className="big-img">
          <img src={mainImage} alt="" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product.name}</h2>
          </div>
          <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Stack>
          <p>{product.description}</p>
          <span>{product.price}</span>
          <div className="thumb">
            {product.image?.map((imgUrl, index) => (
              <img src={imgUrl} alt="product" key={imgUrl} 
              onClick={() => handleThumbClick(imgUrl)}
              />
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
      {/* <GoogleMapLoad/> */}
    </div>
  );
};
export default ProductDetailsPage;