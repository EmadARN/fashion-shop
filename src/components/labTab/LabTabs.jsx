import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Explore from "@/common/explore/Explore";
import { BoxStyle } from "@/common/signUp/style";
import { BoxStyle1,TabItem } from "./Style";
import { Box } from "@mui/material";

export default function LabTabs() {
  return (
    <Box >
      <Tabs defaultValue={1}>
        <Box sx={BoxStyle1}>
          <TabsList sx={{backgroundColor:"#DB4444"  }}>
            <Tab  sx={TabItem} value={1}>پربازدید</Tab>
            <Tab sx={TabItem} value={2}>گران ترین</Tab>
            <Tab sx={TabItem} value={3}>ارزان ترین</Tab>
          </TabsList>
          </Box>

          <Box sx={{width:'102%'}}>
          <TabPanel value={1}>
            {" "}
            <Explore />
          </TabPanel>
          <TabPanel value={2}>
            {" "}
            <Explore />
          </TabPanel>
          <TabPanel value={3}>
            {" "}
            <Explore />
          </TabPanel>
          </Box>
      </Tabs>
    </Box>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
  };
  `
);
