import React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Grid, Card } from "@mui/material";
import { CardImage } from "./Props";

export default function ImageCard() {
  return (
    <Box sx={{ pt: 10, width: "100%", pb: 10 }}>
      <Grid container className="imageGrid" spacing={2}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Card sx={{ maxWidth: 350, Height: 400 }}>
            <CardImage
              img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-1.jpg"
              h1="Mary Roberts"
              h2="Professional WebDeveloper"
            />
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 1,
          }}
        >
          <CardImage
            img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-2.jpg"
            h1="Esther Howard"
            h2="Developer of Bootcamp"
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 1,
          }}
        >
          <CardImage
            img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-3.jpg"
            h1="Ross Johnson"
            h2="Engineering Architect"
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 1,
          }}
        >
          <CardImage
            img="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/instructor-img-4.jpg"
            h1="James Davies"
            h2="WebDeveloper and Designer"
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "blue",
            fontSize: 18,
            fontStyle: "bold",
            p: 1,
          }}
        >
          See All Courses
        </Button>
      </Grid>
    </Box>
  );
}
