import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import Awards from "./Awards";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";

const Home = () => {
  const [title, setTitle] = useState("Home | Photography");

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <AboutUs></AboutUs>
      <Awards></Awards>
    </>
  );
};

export default Home;
