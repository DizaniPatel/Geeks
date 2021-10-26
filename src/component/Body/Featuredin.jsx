import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Cardprops, Titleprops, Image } from "./Props";

export default function Featuredin() {
  return (
    <div style={{ width: "100%" }}>
      <Titleprops h1="FEATURED IN" />
      <Box
        sx={{
          display: "grid",
          p: 2,
          alignContent: "center",
        }}
      >
        <Grid container>
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-stripe-gray.svg" />
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-airbnb-gray.svg" />
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-pinterest-gray.svg" />
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-discord-gray.svg" />
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-intercom-gray.svg" />
          <Image img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo-netflix-gray.svg" />
        </Grid>
      </Box>

      <Titleprops
        h1="WHY LEARN WITH GEEKS"
        h2="Build better skills,faster"
        h3="Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you."
      />
      <Box sx={{ pt: 10 }}>
        <Grid container className="imageGrid" spacing={2}>
          <Grid xs={12} sm={12} md={6} lg={3}>
            <SettingsOutlinedIcon sx={{ fontSize: 50, color: "blue" }} />

            <Cardprops
              p1="Learn the latest skills"
              p2="Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit."
            />
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={3}>
            <PermIdentityOutlinedIcon sx={{ fontSize: 50, color: "blue" }} />
            <Cardprops
              p1="Get ready for a career"
              p2="Pellentesque eu mi rhoncus, rhoncus tortor a, interdum nisi"
            />
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={3}>
            <CardMembershipIcon sx={{ fontSize: 50, color: "blue" }} />
            <Cardprops
              p1="Earn a Certificate"
              p2="Quisque tempus lectus cursus, imperdiet eros vel, pulvinar arcu."
            />
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={3}>
            <PeopleOutlineIcon sx={{ fontSize: 50, color: "blue" }} />
            <Cardprops
              p1="Upskill your organization"
              p2="Etiam dignissim est tristique ex porta, bibendum commodo."
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
