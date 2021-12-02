import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Search = (props) => {
  const SearchButton = () => (
    <IconButton type="submit">
      <SearchIcon />
    </IconButton>
  );
  const getContent = (event) => {
    event.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          page: 1,
          per_page: 30,
          client_id: API_KEY,
          query: props.inputText,
        },
      })
      .then((res) => props.parseUrls(res));
  };
  return (
    <form onSubmit={getContent}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search"
        variant="outlined"
        margin="normal"
        value={props.inputText}
        onChange={props.handleInput}
        InputProps={{ endAdornment: <SearchButton /> }}
      />
    </form>
  );
};

export default Search;
