import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChallengesList from "./views/ChallengesList";
import routes from "./helpers/routes";
import Challenge from "./views/Challenge";

import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <header className="App-header">Challenges</header>
      <Routes>
        <Route path="/" element={<ChallengesList />} />
        {routes.map((route) => (
          <Route
            path={route.to}
            element={<Challenge Component={route.component} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
