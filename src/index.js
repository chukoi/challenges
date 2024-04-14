import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from "./Counter";
import ContactForm from "./ContactForm";
import HolyGrail from "./HolyGrail";
import Tabs from "./Tabs";
import MortgageCalculator from "./MortgageCalculator";
import TrafficLight from "./TrafficLight";
import Clock from "./Clock";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Counter />
    <ContactForm />
    <MortgageCalculator />
    <HolyGrail />
    <Tabs />
    <TrafficLight />
    <Clock />
  </StrictMode>
);
