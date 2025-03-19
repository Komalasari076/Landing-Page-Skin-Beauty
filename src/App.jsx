import { useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Hero />
      <div className="max-w-9/10 m-auto">
        <Benefits />
        <Product/>
        <Testimonial/>
        <Blog/>
      </div>
    </>
  );
}

export default App;
