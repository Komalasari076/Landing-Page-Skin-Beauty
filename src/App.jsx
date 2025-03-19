import { useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Hero />
      <div className="max-w-9/10 m-auto">
        <Benefits />
        <Product/>
        <Testimonial/>
      </div>
    </>
  );
}

export default App;
