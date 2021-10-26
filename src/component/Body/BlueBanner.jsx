import React from "react";
import { Box } from "@mui/system";
import { Stack, Grid } from "@mui/material";

export default function BlueBanner() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Stack
        style={{
          backgroundImage: `url(${"https://codescandy.com/geeks-bootstrap-5/assets/images/background/course-graphics.svg"} )`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundColor: "#18113C",
          maxWidth: "100%",
        }}
      >
        <Box
          style={{
            maxWidth: 750,
            margin: "auto",
            backgroundColor: "#18113C",
          }}
        >
          <Box
            sx={{
              display: "grid",
              pt: 10,

              borderRadius: 1,
              textAlign: "center",
              letterSpacing: 0,
              fontSize: 30,
              color: "white",
              fontWeight: "bold",

              fontFamily: "sans-serif",
            }}
          >
            Join more than 1 million learners worldwide
          </Box>
          <Box
            sx={{
              display: "grid",
              pb: 5,
              borderRadius: 1,
              color: "white",
              textAlign: "center",
              letterSpacing: 0,
              fontSize: "20px",
            }}
          >
            Effective learning starts with assessment. Learning a new skill is
            hard work—Signal makes it easier.
          </Box>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#754FFE",
                fontSize: 18,
                fontStyle: "bold",
                padding: "10px 12px",
                margin: " 4px 2px",
                pb: 10,
                color: "white",
                borderRadius: "6px",
              }}
            >
              Start Learning for Free
            </button>

            <button
              style={{
                backgroundColor: "#29BAF9",
                fontSize: 18,
                fontStyle: "bold",
                padding: "10px 12px",
                margin: " 4px 2px",
                color: "white",
                pb: 10,
                borderRadius: "6px",
              }}
            >
              Geeks for Business
            </button>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
}
