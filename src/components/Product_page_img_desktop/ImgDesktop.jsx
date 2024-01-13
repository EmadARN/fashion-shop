import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ImgDesktop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 10, mb: 50 }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 400,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            sx={{ width: "130px", height: "130px" }}
            {...a11yProps(0)}
            icon={
              <Avatar
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  borderRadius: "5px",
                }}
                alt="test avatar"
                src="/images/man.png"
              />
            }
          ></Tab>
          <Tab
            sx={{ width: "130px", height: "130px" }}
            {...a11yProps(1)}
            icon={
              <Avatar
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  borderRadius: "5px",
                }}
                alt="test avatar"
                src="/images/man.png"
              />
            }
          ></Tab>
          <Tab
            sx={{ width: "130px", height: "130px" }}
            {...a11yProps(2)}
            icon={
              <Avatar
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  borderRadius: "5px",
                }}
                alt="test avatar"
                src="/images/man.png"
              />
            }
          ></Tab>
          <Tab
            sx={{ width: "130px", height: "130px" }}
            {...a11yProps(3)}
            icon={
              <Avatar
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  borderRadius: "5px",
                }}
                alt="test avatar"
                src="/images/man.png"
              />
            }
          ></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "5px",
            }}
            alt="test avatar"
            src="/images/man.png"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "5px",
            }}
            alt="test avatar"
            src="/images/man.png"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "5px",
            }}
            alt="test avatar"
            src="/images/man.png"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "5px",
            }}
            alt="test avatar"
            src="/images/man.png"
          />
        </TabPanel>
      </Box>
    </Box>
  );
}
