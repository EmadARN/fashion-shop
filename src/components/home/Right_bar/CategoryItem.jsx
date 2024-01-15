import {
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";

const CategoryItem = (props) => {
  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.type === "text") {
    return (
      <div>
        <ListItem>
          <ListItemButton sx={{ textAlign: "right" }}>
            <Box ml={3}>{props.icon}</Box>
            <ListItemText
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "20px",
                  fontWeight: "550",
                },
              }}
              primary={props.title}
            />
          </ListItemButton>
        </ListItem>
      </div>
    );
  } else if (props.type === "button") {
    return (
      <div>
        <ListItem>
          <ListItemButton sx={{ textAlign: "right" }} onClick={handleClick}>
            <Box ml={3}>{props.icon}</Box>
            <ListItemText
              sx={{
                pl: "20px",
                "& .MuiListItemText-primary": {
                  fontSize: "20px",
                  fontWeight: "550",
                },
              }}
              primary={props.title}
            />
            <ListItemIcon>
              <KeyboardArrowLeftIcon />
            </ListItemIcon>
          </ListItemButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {props.content.map((item) => {
              return (
                <Link
                  sx={{ textDecoration: "none", all: "unset" }}
                  href={item.pushLink}
                >
                  {" "}
                  <MenuItem
                    sx={{ fontSize: "20px", padding: "10" }}
                    onClick={handleClose}
                  >
                    {item.text}
                  </MenuItem>
                </Link>
              );
            })}
          </Menu>
        </ListItem>
      </div>
    );
  }
};

export default CategoryItem;
