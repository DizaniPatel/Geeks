import React from "react";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import "./header.css";
import DropDown from "./DropDown";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <Grid container>
      <Grid
        xs={12}
        sm={8}
        md={8}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Grid container sx={{ pt: 2.5 }}>
          <Grid xs={12} sm={12} md={2}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {" "}
              <img
                src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg"
                alt="Geeks"
                width="112"
              />
            </IconButton>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Grid container sx={{ pt: 2.5 }}>
              <Grid xs={12} md={3} lg={3} sx={{ alignItems: "center" }}>
                <DropDown
                  btn="Browse"
                  item1="Web Development"
                  item2="Design"
                  item3="Mobile App"
                  item4="IT Software"
                  item5="Marketing"
                  item6="Music"
                  item7="Lifestyle"
                  item8="Business"
                  item9="Photography"
                />
              </Grid>
              <Grid xs={12} md={3} lg={3} sx={{ alignItems: "center" }}>
                <DropDown
                  btn="Landings"
                  item0="LANDINGS"
                  item1="Courses"
                  item2="Lead Course"
                  item3="Request Access"
                  item4="SaaS"
                />
              </Grid>
              <Grid xs={12} md={3} lg={3} sx={{ alignItems: "center" }}>
                <DropDown
                  btn="Pages"
                  item1="Courses"
                  item2="Paths"
                  item3="Blog"
                  item4="Career"
                  item5="Speciality"
                />
              </Grid>
              <Grid xs={12} md={3} lg={3} sx={{ alignItems: "center" }}>
                <DropDown
                  btn="Accounts"
                  item0="ACCOUNTS"
                  item1="Instructor"
                  item2="Student"
                  item3="Admin"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} md={4} sx={{ pt: 1 }}>
            <Searchbar />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={9} sm={4} md={4} sx={{ pt: 3.5 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "#f5f4f8",
              fontSize: 18,
              fontStyle: "bold",
              padding: "6px ",
              margin: " 1px 1px",
              color: "black",
              borderRadius: "6px",
              border: "3px solid #f5f4f8",
            }}
          >
            Sign In
          </button>
          <button
            style={{
              backgroundColor: "#754FFE",
              fontSize: 18,
              fontStyle: "bold",
              padding: "5px ",
              margin: " 1px 1px",
              color: "white",
              borderRadius: "6px",
              border: "2px solid #754FFE",
            }}
          >
            Sign Up
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
}
