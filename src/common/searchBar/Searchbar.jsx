import React from "react";
import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RTL from "../rtl/Rtl";

function Searchbar() {
  return (
    <RTL>
      <Container maxWidth="md" sx={{ mt: 0 }}>
        <TextField
          id="search"
          type="search"
          label="جستجو محصول؟"
          onChange={() => {
            console.log("this is search");
          }}
          sx={{
            width: "50%",
            input: { color: "#fff", direction: "rtl", pr: 2 },
            label: { color: "#fff" },
            "& label.Mui-focused": {
              color: "#fff",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Container>
    </RTL>
  );
}

export default Searchbar;
