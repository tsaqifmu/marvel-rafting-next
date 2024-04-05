"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Packet from "@/components/Packet";
import PageWrapper from "@/components/PageWrapper";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Packet />
      <Testimonials />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
