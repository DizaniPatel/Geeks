import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SlickSlider from "./SlickSlider";
import ImageSlick from "./ImageSlick";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BrowsCategories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          pt: 10,
          bgcolor: "white",
          borderRadius: 1,
          color: "blue",
          textAlign: "left",
          letterSpacing: 2,
          fontSize: 16,
        }}
      >
        {"BROWSE CATEGORIES"}
      </Box>
      <Box
        sx={{
          display: "grid",
          py: 1,
          bgcolor: "white",
          borderRadius: 1,
          textAlign: "left",
          letterSpacing: 0,
          fontSize: 40,
          color: "text.primary",
          fontWeight: "bold",
          lineHeight: 1.5,
          fontFamily: "sans-serif",
        }}
      >
        {"The world's top courses"}
      </Box>
      <Box
        sx={{
          display: "grid",
          py: 1,
          bgcolor: "white",
          borderRadius: 1,
          color: "gray",
          textAlign: "left",
          letterSpacing: 0,
          fontSize: "26px",
        }}
      >
        {
          "Choose from 32,000 online video courses with new additions published every month."
        }
      </Box>
      <Box sx={{ width: "100%", pt: 15, pb: 10 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Categories" {...a11yProps(0)} />
            <Tab label="Design" {...a11yProps(1)} />
            <Tab label="Javascript" {...a11yProps(2)} />
            <Tab label="Web Development" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImageSlick />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ImageSlick />
        </TabPanel>
      </Box>
    </>
  );
}
