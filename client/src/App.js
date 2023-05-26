import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import ResponsiveAppBar from "./components/responsive-app-bar";
import './App.css';
import ProductPage from "./pages/product-page/product-page";
import ProductDetailsPage from "./pages/product-details/product-details-page";
import HomePage from "./pages/home/home-page";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AboutPage from "./pages/about-us/about-us-page";


const theme = createTheme({
  palette:{
    primary: {
      main: '#3C5F40',
    },
    secondary: {
      main: '#B86B51',
    }
  }
})

function App() {
 
 return (
    <ThemeProvider theme={theme}>
   <div className="App">
    <ResponsiveAppBar />
     {/* <Navbar /> */}
     <Routes>
       {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
       <Route exact path="/" element={<HomePage />} />
       <Route exact path="/products" element={<ProductPage />} />
       <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
       <Route path= "/about-us" element={<AboutPage/>} />
     </Routes>
      
   </div>
   </ThemeProvider>
 );
}
 
export default App;