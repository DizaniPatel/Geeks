import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Cardprops } from "./Props";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";

export default function BecomeInstructor() {
  return (
    <Box sx={{ pt: 10 }}>
      <Grid container>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AvatarGroup max={5}>
              <Avatar
                alt="Remy Sharp"
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-4.jpg"
              />
              <Avatar sx={{ bgcolor: "red", fontSize: 14 }}>1M+</Avatar>
            </AvatarGroup>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box
            sx={{
              display: "grid",
              textAlign: "left",
              lineHeight: 1.3,
              fontSize: 44,
              color: "text.primary",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Become an Instructor
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={2} lg={2} />
        <Grid xs={12} sm={12} md={5} lg={5}>
          {" "}
          <Box
            sx={{
              display: "grid",
              bgcolor: "white",
              color: "gray",
              textAlign: "left",

              lineHeight: 1.3,
              fontSize: "20px",
            }}
          >
            <p>
              Top instructors from around the world teach millions of students
              on Geeks. We provide the tools and skills to teach what you love
            </p>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={2} lg={2} />
      </Grid>

      <Grid container>
        <Grid xs={12} sm={12} md={4} lg={4} sx={{ pl: 1 }}>
          <Cardprops
            p1="Earn money"
            p2="Earn money every time a student purchases your course. Get paid monthly through Paypal or Payoneer."
          />
        </Grid>

        <Grid xs={12} sm={12} md={4} lg={4} sx={{ pl: 1 }}>
          <Cardprops
            p1="Inspire students"
            p2="Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge."
          />
        </Grid>

        <Grid xs={12} sm={12} md={4} lg={4}>
          <Cardprops
            p1="Join our community"
            p2="Take advantage of our active community of instructors to help you through your course creation process."
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 4,
          pb: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "blue",
            p: 1,
          }}
        >
          Start Teaching Today
        </Button>
      </Grid>
    </Box>
  );
}
