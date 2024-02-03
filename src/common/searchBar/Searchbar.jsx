import React from "react";
import { Container } from "@mui/material";
import RTL from "../rtl/Rtl";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

function Searchbar() {
  return (
    <RTL>
      <Container maxWidth="md" sx={{ mt: 0 }}>
        <Search
          sx={{
            width: "40% !important",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="جستجو محصول"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Container>
    </RTL>
  );
}

export default Searchbar;
