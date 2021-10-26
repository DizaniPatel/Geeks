import React from "react";
import { Box } from "@mui/system";
import { Grid, Card, Paper } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const Titleprops = (props) => {
  return (
    <Box
      style={{
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          pt: 10,

          borderRadius: 1,
          color: "blue",
          textAlign: "center",
          letterSpacing: 2,
          fontSize: 16,
        }}
      >
        {props.h1}
      </Box>

      <Box
        sx={{
          display: "grid",
          p: 1,

          borderRadius: 1,
          textAlign: "center",
          letterSpacing: 0,
          fontSize: 40,
          color: "text.primary",
          fontWeight: "bold",

          fontFamily: "sans-serif",
        }}
      >
        {props.h2}
      </Box>

      <Box
        sx={{
          display: "grid",

          borderRadius: 1,
          color: "gray",
          textAlign: "center",
          letterSpacing: 0,
          fontSize: "26px",
        }}
      >
        {" "}
        {props.h3}
      </Box>
    </Box>
  );
};

const Cardprops = (props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          pt: 4,
          bgcolor: "white",
          borderRadius: 1,
          color: "black",
          textAlign: "left",
          letterSpacing: 0,
          fontSize: "20px",
        }}
      >
        {props.p1}
      </Box>
      <Box
        sx={{
          display: "grid",
          pt: 1,
          bgcolor: "white",
          borderRadius: 1,
          color: "gray",
          textAlign: "left",

          letterSpacing: 0.5,

          fontSize: "16px",
          fontFamily: "sans-serif",
        }}
      >
        {props.p2}
      </Box>
    </Box>
  );
};

const Image = (props) => {
  return (
    <Grid
      xs={6}
      sm={4}
      md={4}
      lg={2}
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <div>
        <img
          src={props.img}
          class="img-fluid attachment-full size-full"
          alt=""
          width="100px"
          height="80px"
        ></img>
      </div>
    </Grid>
  );
};

const CardImage = (props) => {
  return (
    <Paper elevation={0}>
      <Card sx={{ maxWidth: 350, maxHeight: 400 }}>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {props.h1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.h2}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Paper>
  );
};

const Slick = (props) => {
  const [value] = React.useState(5);
  return (
    <Card sx={{ maxWidth: 350, Height: 400 }}>
      <CardContent>
        <Rating name="read-only" value={value} readOnly sx={{ p: 2 }} />

        <Typography
          variant="body2"
          color="black"
          sx={{ p: 2, borderBottom: 1, fontSize: "20px" }}
        >
          {props.p}
        </Typography>
        <Box>
          <CardHeader
            avatar={<Avatar alt="Remy Sharp" src={props.img} />}
            title={props.name}
            subheader={props.position}
          ></CardHeader>
        </Box>
      </CardContent>
    </Card>
  );
};

const ImageSlickprops = (props) => {
  return (
    <Paper elevation={0}>
      <Card sx={{ maxWidth: 350, maxHeight: 400 }}>
        <CardMedia
          component="img"
          height="250"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {props.h1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.h2}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Paper>
  );
};
const Check = (props) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={4}
      lg={2}
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <CheckCircleRoundedIcon color="success" />
      <span
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pr: 1,
        }}
      >
        {props.span}
      </span>
    </Grid>
  );
};

export {
  Titleprops,
  Cardprops,
  Image,
  CardImage,
  Slick,
  Check,
  ImageSlickprops,
};
