import React from "react";
import { TabPanel } from "./TabPanel";
import { Avatar } from "@mui/material";
import { productimgDesktop } from "../data";
import { TabPanelImgAvatar } from "../style";

import Magnify from "@/common/magnify/Magnify";

const TabPanelImg = ({ value }) => {
  return (
    <section>
      {productimgDesktop.map((item) => {
        return (
          <TabPanel value={value} index={item.id}>
            <Magnify image={item.img} width="400px" />
          </TabPanel>
        );
      })}
    </section>
  );
};

export default TabPanelImg;
