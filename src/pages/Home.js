import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Benefits />
        <FAQ />
        <ContactUs />
      </Layout>
    </div>
  );
};

export default Home;
