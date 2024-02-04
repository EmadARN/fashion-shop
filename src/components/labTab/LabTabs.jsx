import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Explore from "@/common/explore/Explore";
import { BoxStyle, LabStyle, TabBox } from "./Style";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={BoxStyle}>
      <TabContext value={value}>
        <Box sx={TabBox}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="پربازدید" value="1" sx={LabStyle} />
            <Tab label="گران ترین" value="2" sx={LabStyle} />
            <Tab label="ارزان ترین" value="3" sx={LabStyle} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Explore />
        </TabPanel>
        <TabPanel value="2">
          <Explore />
        </TabPanel>
        <TabPanel value="3">
          <Explore />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
