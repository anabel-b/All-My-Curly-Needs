import React from 'react';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import product from "../product-data";

const SearchBar = () =>{
    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={product.map((option) => option.name)}
            renderInput={(params) => (
            <TextField
            {...params}
            label="Find all of your curly needs"
            InputProps={{
                ...params.InputProps,
                type: "search"
             }}
            />
      )}
    />
    )
}
export default SearchBar 