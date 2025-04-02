import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefit/Benefits";
import Product from "./components/Product/Product";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <div className="max-w-9/10 m-auto">
        <Benefits />
        <Product />
        <Testimonial />
        <Blog />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
