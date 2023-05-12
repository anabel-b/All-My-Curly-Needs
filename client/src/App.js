import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import ResponsiveAppBar from "./components/responsive-app-bar";
import './App.css';
import ProductPage from "./pages/product-page";
import ProductDetailsPage from "./pages/product-details-page";
import HomePage from "./pages/home-page";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";


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
       <Route path="/products" element={<ProductPage />} />
       <Route path="/product-details" element={<ProductDetailsPage />} />
     </Routes>
      
   </div>
   </ThemeProvider>
 );
}
 
export default App;