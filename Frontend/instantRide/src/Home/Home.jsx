import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Reservation/>
      <Footer />
    </>
  );
};

export default Home;
