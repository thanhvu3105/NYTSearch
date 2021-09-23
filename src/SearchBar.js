import React, { useState } from "react";
import { useHistory } from "react-router";
import { TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
// import {SearchIcon} from "@material-ui/icons"
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ searchArticles }) {
  const history = useHistory();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchArticles(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <TextField label="Search " type="text" name="text" onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}>

      </TextField>


        </form>
    </div>
  );
}

export default SearchBar;
