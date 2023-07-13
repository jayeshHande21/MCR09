import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { EventDetailsPage } from "./Pages/EventDetailsPage";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "whitesmoke",

          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h1 style={{ color: "red", fontFamily: "cursive" }}>MeetUps</h1>{" "}
        {/* <input placeholder="Search By Title" style={{ padding: "4px" , bod }} /> */}
      </div>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/EventDetailsPage" element={<EventDetailsPage />} />
      </Routes>
    </div>
  );
}
