import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import EdgeOfMap from "./components/EdgeOfMap";
import TelemetryArea from "./components/TelemetryArea";
import TransPlanetary from "./components/TransPlanetary";
import Metrics from "./components/Metrics";
import Architecture from "./components/Architecture";
import Markets from "./components/Markets";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <NavBar />
      <Hero />
      <EdgeOfMap />
      <TelemetryArea />
      <TransPlanetary />
      <Metrics />
      <Architecture />
      <Markets />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
