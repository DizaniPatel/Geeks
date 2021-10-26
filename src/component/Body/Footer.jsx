import React from "react";
import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./CssFile.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <>
      <Grid container sx={{ p: 4 }} space={2}>
        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={3}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              bgcolor: "white",
              borderRadius: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <img
              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg"
              class="custom-logo"
              alt="Geeks"
              height="29"
              width="112"
            />
            <p>
              Geek is feature-rich components and beautifully Bootstrap UI Kit
              for developers, built with bootstrap responsive framework
            </p>
            <div>
              <FacebookRoundedIcon color="disabled" sx={{ mr: 1 }} />
              <TwitterIcon color="disabled" sx={{ mr: 1 }} />
              <GitHubIcon color="disabled" />
            </div>
          </Box>
        </Grid>
        <Grid xs={12} md={1} lg={1} sx={{ width: "100%" }}></Grid>
        <Grid xs={12} sm={6} md={2} lg={2} sx={{ width: "100%" }}>
          <h2 sx={{ pb: 5 }}>Company</h2>
          <Box sx={{ color: "gray", fontSize: 16, fontVariant: "normal" }}>
            <p>About</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact</p>
          </Box>
        </Grid>

        <Grid xs={12} sm={6} md={2} lg={2} sx={{ width: "100%" }}>
          <h2 sx={{ pb: 5 }}>Support</h2>
          <Box sx={{ color: "gray", fontSize: 16, fontVariant: "normal" }}>
            <p>Help and Support</p>
            <p>Become Instructor</p>
            <p>Get the app</p>
            <p>FAQ’s</p>
            <p>Tutorial</p>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={4} lg={4} sx={{ width: "100%" }}>
          <h2 sx={{ pb: 5 }}>Get in touch</h2>
          <Box sx={{ color: "gray", fontSize: 16, fontVariant: "normal" }}>
            <p>339 McDermott Points Hettingerhaven, NV 15283</p>
            <p>Email: support@geeksui.com</p>
            <p>Phone: (000) 123 456 789</p>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={3}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <p>© 2021 Geeks. All Rights Reserved.</p>
          </Box>
        </Grid>
        <Grid xs={12} md={3} lg={3} sx={{ width: "100%" }}></Grid>
        <Grid
          xs={3}
          sm={3}
          md={1}
          lg={1}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <p>About</p>
          </Box>
        </Grid>

        <Grid
          xs={3}
          sm={3}
          md={2}
          lg={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <p>Terms & Conditions</p>
          </Box>
        </Grid>
        <Grid
          xs={3}
          sm={3}
          md={1.5}
          lg={1.5}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <p>Privacy Policy</p>
          </Box>
        </Grid>

        <Grid
          xs={3}
          sm={3}
          md={1.5}
          lg={1.5}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 1,
              bgcolor: "white",
              borderRadius: 1,
              color: "gray",
              textAlign: "left",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <p>Contact</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
