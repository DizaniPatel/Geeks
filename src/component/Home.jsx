import { Container, Divider } from "@mui/material";
import React from "react";
import BecomeInstructor from "./Body/BecomeInstructor";
import BlueBanner from "./Body/BlueBanner";
import BrowsCategories from "./Body/BrowsCategories";
import BuildBetter from "./Body/BuildBetter";
import Featuredin from "./Body/Featuredin";
import Footer from "./Body/Footer";
import ImageCard from "./Body/ImageCard";
import { Titleprops } from "./Body/Props";
import SlickSlider from "./Body/SlickSlider";
import Header from "./Header/Header";

//import Header from "./Header/Header";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <BuildBetter />
      <Container>
        <Featuredin />
        <BrowsCategories />
        <Divider />

        <Titleprops
          h1="WORLD-CLASS INSTRUCTORS"
          h2="Classes Taught by Industry Expert"
          h3="Geeks teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you."
        />
        <ImageCard />
        <Divider />
        <BecomeInstructor />
        <Divider />
        <Titleprops
          h1="TESTIMONIALS"
          h2="Don’t just take our word for it."
          h3="12+ million people are already learning on Geeks"
        />
        <SlickSlider />
      </Container>
      <BlueBanner />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
