import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { EventContextProvider, EventContext } from "./Context/EventContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { EventContext };

root.render(
  <StrictMode>
    <Router>
      <EventContextProvider>
        <App />
      </EventContextProvider>
    </Router>
  </StrictMode>
);
