import { useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Hero />
      <div className="max-w-9/10 m-auto my-20 px-14">
        <Benefits />
      </div>
    </>
  );
}

export default App;
