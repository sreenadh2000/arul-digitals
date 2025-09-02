import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import "./styles/structure.scss";

// Import bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import bootstrap JS (optional, only if you use modals, dropdowns, tooltips)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
