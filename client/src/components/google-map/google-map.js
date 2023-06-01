//google api key AIzaSyCMgMxxqwLc3V1226C-_rj_fIZ7eeCBirA

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./google-map.css";

function GoogleMapLoad () {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCMgMxxqwLc3V1226C-_rj_fIZ7eeCBirA",
        //process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    if(!isLoaded){
        <div>
            Loading...
        </div>
    };

    return(
        <div>
            map
        </div>
    );
};

function Map (){
    return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName="map-container"></GoogleMap>
}

export default GoogleMapLoad;