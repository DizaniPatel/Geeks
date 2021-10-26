import React from "react";
import { Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Titleprops, Check } from "./Props";

export default function BuildBetter() {
  return (
    <div style={{ paddingTop: "15px", maxWidth: "100%" }}>
      <Stack
        style={{
          backgroundImage: `url(${"https://codescandy.com/geeks-bootstrap-5/assets/images/hero/hero-graphics.svg"} )`,
          backgroundPosition: "top center",
          backgroundSize: "1900px",
          backgroundColor: "#f4f4fc",
          maxWidth: "100%",
        }}
      >
        <Titleprops h2="Build Better" />
        <Box
          style={{
            maxWidth: 800,
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",

              borderRadius: 1,
              color: "black",
              textAlign: "center",
              letterSpacing: 0,
              fontSize: "26px",
            }}
          >
            Build skills with courses Join Geeks to watch, play, learn, make,
            and discover, uscipit esi viimentum laoreet non et odio.
          </Box>
        </Box>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            pb: 10,
            pt: 10,
          }}
        >
          <button
            style={{
              backgroundColor: "#754FFE",
              fontSize: 18,
              fontStyle: "bold",
              padding: "15px ",
              margin: " 1px 1px",
              color: "white",
              borderRadius: "6px",
              border: "2px solid #754FFE",
            }}
          >
            View Plans
          </button>
          <button
            style={{
              backgroundColor: "white",
              fontSize: 18,
              fontStyle: "bold",
              padding: "15px ",
              margin: " 1px 1px",
              color: "#754FFE",
              borderRadius: "6px",
              border: "2px solid #754FFE",
            }}
          >
            Try for Free
          </button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            pb: 20,
          }}
        >
          <Check span="30,000 online courses" />
          <Check span="Expert instruction" />
          <Check span="Lifetime access" />
        </Grid>
      </Stack>
    </div>
  );
}
