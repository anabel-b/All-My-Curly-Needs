import curlyhairaboutus from "../../assets/Images/curlyhairaboutusimg.jpg";

const AboutPage = () => {

    return(
        <div className="About-us-page">
           <div className="image-container">
                <img className="home-image" src={curlyhairaboutus} alt="aboutusbackground"/>
            </div>
            <div className="text-block">
                <h4>About us</h4>
                <p>
                The goal of this app is to be able to combine all of the ratings from big websites (target, amazon, walmart) and combine it in one star rating and combine the 3 top positive reviews and the 3 top negative reviews.
                </p>
            </div>
        </div>
    );
}
 export default AboutPage;