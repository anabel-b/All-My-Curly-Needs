import React from "react";
import curlyhairhome from "../../assets/Images/CurlyHairHome.jpg";
import influencer from "../../assets/Images/influencer.jpg";
import "./home-page.css";
import { Button} from "@mui/material";
import SearchBar from "../../components/search-bar/search-bar";


function HomePage() {
    return (<div className="home-page">
        <div className="search-bar">
        <SearchBar/>
        </div>
        <div className="image-container">
            <img className="home-image" src={curlyhairhome} alt="homebackground"/>
        </div>
        <div className="text-on-image">
            <h2>Limit the amount of time being spent looking for a product</h2>
        </div>
        <div className="home-quote">
            <h1>"Say goodbye to bad hair days with our curly hair resources"</h1>
        </div>
        <div className="quiz-box">
            <h2>Discover your unique curly hair type with our interactive quiz!</h2>
            <Button href="https://www.naturallycurly.com/quiz" variant="contained" color="secondary" size="large">Curl Quiz</Button>
        </div>
        <div className="influencer-details">
        <div className="influencer-box">
            <h2>Dont know where to start? Here are some curly hair influencers to start with</h2>
            <div className="influencer-buttons">
            <Button className="youtube-button" href="https://interestedvideos.com/curly-hairstyle-youtube-channels/" variant="contained" color="secondary" size="large" >Youtube</Button>
            <Button className="blog-button" href="https://www.naturallycurly.com/curlreading/leaders-in-curl/the-best-curly-hair-bloggers-on-the-internet" variant="contained" color="secondary" size="large" >Blogs</Button>
            </div>
        </div>
        <div className="influencer-img-box">
            <img className="influencer-img" src= {influencer} alt="influencer"/>
        </div>
        </div>
        

    </div>);

} 
export default HomePage;