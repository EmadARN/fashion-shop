import React, { useRef, useState } from "react";
import { obj, obj1 } from "./data";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/material";
const SearchBarSm = () => {
  const [search, setSearch] = useState(obj);
  const inpRef = useRef();
  const changeSearch = (e) => {
    setSearch(obj1);
    inpRef.current.focus();
  };
  const changeTextSearch = (e) => {
    if (e.target.value.length > 0) {
      setSearch(obj1);
    }
  };
  const changeSearchBlur = (e) => {
    setSearch(obj);
    if (e.target.value.length > 0) {
      setSearch(obj1);
    }
  };
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <span style={{ position: "relative" }}>
        <input
          onChange={changeTextSearch}
          style={search}
          onClick={changeSearch}
          onBlur={changeSearchBlur}
          type="text"
          ref={inpRef}
        />

        <SearchOutlinedIcon
          onClick={changeSearch}
          onBlur={changeSearchBlur}
          size={"20px"}
          sx={{
            color: "#fff",
            position: "absolute",
            left: " 10px !important",
            top: "10px !important",
            cursor: "pointer !important",
          }}
        />
      </span>
    </Box>
  );
};

export default SearchBarSm;
