import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import {
  ListItemText1,
  ListButton1,
  ListButton2,
  ListItemButton3,
  ListItemText2,
} from "./style";

import { ListItemIcon } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

const CategoryItem = (props) => {
  const [openList, setOpenList] = React.useState(false);

  const handleClickList = () => {
    setOpenList(!openList);
  };

  if (props.type === "text") {
    return (
      <div>
        <ListItem>
          <ListItemButton sx={ListButton1}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText
              className="texthover"
              sx={ListItemText1}
              primary={props.title}
            />
          </ListItemButton>
        </ListItem>
      </div>
    );
  } else if (props.type === "button") {
    return (
      <div>
        <ListItemButton sx={ListButton2} onClick={handleClickList}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText
            className="texthover"
            sx={ListItemText1}
            primary={props.title}
          />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList} timeout="auto" unmountOnExit >
          {props.content.map((item) => {
            return (
              <List component="div" disablePadding >
                <ListItemButton sx={ListItemButton3}>
                  <ListItemText sx={ListItemText2} primary={item.text} />
                </ListItemButton>
              </List>
            );
          })}
        </Collapse>
      </div>
    );
  }
};

export default CategoryItem;
