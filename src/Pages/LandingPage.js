import { useContext } from "react";
import { EventContext } from "../Context/EventContext";
import { NavLink } from "react-router-dom";
import { EventDetailsPage } from "./EventDetailsPage";

export const LandingPage = () => {
  const { data, dataToDisplay, handleDropdown, handleEventPage } = useContext(
    EventContext
  );
  return (
    <div>
      <h1 style={{ color: "turquoise", fontFamily: "cursive" }}>
        Meetup Events
      </h1>
      <select
        onChange={handleDropdown}
        style={{ padding: "8px", width: "130px", borderRadius: "1rem" }}
      >
        <option>Both</option>
        <option>Online</option>
        <option>Offline</option>
      </select>
      <NavLink to="/EventDetailsPage">
        <div style={{}}>
          {dataToDisplay.map((meetups) => {
            return (
              <div
                onClick={() => handleEventPage(meetups.id)}
                style={{
                  width: "240px",
                  height: "250px",
                  // backgroundColor: "palegreen",
                  display: "inline-block",
                  border: "1px solid red",
                  margin: "20px",
                  borderRadius: "1rem",
                  cursor: "pointer"
                  // padding: "1px"
                }}
              >
                <img
                  style={{
                    width: "240px",
                    height: "170px",
                    borderRadius: "1rem"
                  }}
                  alt="img"
                  src={meetups.eventThumbnail}
                />
                <p
                  style={{
                    fontSize: "small",
                    color: "grey",
                    float: "left",
                    marginTop: "0px",
                    width: "100%"
                  }}
                >
                  <strong> {meetups.eventType} event </strong>
                  {meetups.eventStartTime}
                </p>
                <span
                  style={{
                    width: "100%",
                    fontSize: "18px",
                    fontWeight: "bolder"
                  }}
                >
                  {" "}
                  {meetups.title}
                </span>
              </div>
            );
          })}
        </div>
      </NavLink>
    </div>
  );
};
