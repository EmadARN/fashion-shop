import { Avatar, Tab, Tabs } from "@mui/material";
import React from "react";
import { productimgDesktop } from "../data";
import { TabImgsAvatar } from "../style";
import { handleChange } from "../utils";

const TabImgs = ({ value, setValue }) => {
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={(e, newValue) => handleChange(newValue, setValue)}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: "divider" }}
    >
      {productimgDesktop.map((element) => {
        return (
          <Tab
            sx={{
              width: "130px",
              height: "130px",
            }}
            icon={
              <Avatar
                sx={TabImgsAvatar}
                alt="test avatar"
                src={`/images/${element.img}`}
              />
            }
          ></Tab>
        );
      })}
    </Tabs>
  );
};

export default TabImgs;
