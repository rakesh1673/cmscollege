import React from "react";
import "../App.css";
import Cards from "../components/Cards/Cards";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
