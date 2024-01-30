import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import AddIcon from "@mui/icons-material/Add";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import TtyIcon from "@mui/icons-material/Tty";
import { Box } from "@mui/material";
import { handleChange } from "./utlis";
import { MainBoxXs } from "./style";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function FooterXs() {
  const [value, setValue] = React.useState();

  return (
    <Box sx={MainBoxXs}>
      <Tabs
        value={value}
        onChange={(e, newValue) => handleChange(newValue, setValue)}
        aria-label="icon tabs example"
      >
        <Tab
          href="/"
          icon={<OtherHousesIcon sx={{ color: "#fff" }} />}
          aria-label="phone"
        />

        <Tab
          href="/ExplorePage"
          icon={<SearchOutlinedIcon sx={{ color: "#fff" }} />}
          aria-label="favorite"
        />

        <Tab
          href="/Contact_Us"
          icon={<TtyIcon sx={{ color: "#fff" }} />}
          aria-label="person"
        />

        <Tab
          href="/About_Us"
          icon={<PersonPinIcon sx={{ color: "#fff" }} />}
          aria-label="person"
        />
      </Tabs>
    </Box>
  );
}
