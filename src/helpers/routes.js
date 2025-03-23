import React from "react";
import Counter from "../components/Counter";
import ContactForm from "../components/ContactForm";
import MortgageCalculator from "../components/MortgageCalculator";
import HolyGrail from "../components/HolyGrail";
import Tabs from "../components/Tabs";
import TrafficLight from "../components/TrafficLight";
import Clock from "../components/Clock";
import CheckedItems from "../components/CheckedItems";
import AnalogClock from "../components/AnalogClock";
import Dots from "../components/Dots";
import ToDo from "../components/Todo";
import GreenLightRedLight from "../components/GreenLightRedLight";
import Timer from "../components/Timer";

const routes = [
  {
    text: "Counter",
    to: "/counter",
    component: () => <Counter />,
  },
  {
    text: "Contact Form",
    to: "/contact-form",
    component: () => <ContactForm />,
  },
  {
    text: "Mortgage Calculator",
    to: "/mortgage-calculator",
    component: () => <MortgageCalculator />,
  },
  {
    text: "HolyGrail",
    to: "/holy-grail",
    component: () => <HolyGrail />,
  },
  {
    text: "Tabs",
    to: "/tabs",
    component: () => <Tabs />,
  },
  {
    text: "TrafficLight",
    to: "/traffic-light",
    component: () => <TrafficLight />,
  },
  {
    text: "Clock",
    to: "/clock",
    component: () => <Clock />,
  },
  {
    text: "Checked Items",
    to: "/checked-items",
    component: () => <CheckedItems />,
  },
  {
    text: "Analog Clock",
    to: "/analog-clock",
    component: () => <AnalogClock />,
  },
  {
    text: "Dots",
    to: "/dots",
    component: () => <Dots />,
  },
  {
    text: "To Do",
    to: "/to-do",
    component: () => <ToDo />,
  },
  {
    text: "Green Light Red Light",
    to: "/green-light-red-light",
    component: () => <GreenLightRedLight />,
  },
  {
    text: "Timer",
    to: "/timer",
    component: () => <Timer />,
  },
];

export default routes;
