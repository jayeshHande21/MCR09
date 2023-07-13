import { useContext } from "react";
import { EventContext } from "../Context/EventContext";
import { LandingPage } from "./LandingPage";
import { NavLink } from "react-router-dom";

export const EventDetailsPage = () => {
  const { eventDetails } = useContext(EventContext);
  return (
    <div>
      <NavLink to="/LandingPage">
        <button>back</button>
      </NavLink>
      {eventDetails.map((event) => {
        return (
          <div style={{ display: "flex", width: "70%" }}>
            <div>
              <h1>{event.title}</h1>
              <p>Hosted By {event.hostedBy}</p>
              <img
                style={{ width: "300px" }}
                alt="img"
                src={event.eventThumbnail}
              />
              <br />
              <span>Details</span> <br />
              {event.eventDescription} <br />
              <span>Additional Information</span>
              Dress Code : {event.additionalInformation.dressCode}
              Age Restriction : {event.additionalInformation.ageRestrictions}
              <span style={{ fontWeight: "bolder" }}>Event Tags</span>
              {event.eventTags}
            </div>

            <div style={{ width: "50%" }}>
              <div
                style={{
                  border: "1px solid grey",
                  width: "400px",
                  height: "100px",
                  fontSize: "small"
                }}
              >
                <div style={{ padding: "10px", marginLeft: "30px" }}>
                  Time : {event.eventStartTime} <br />
                  {event.eventEndTime}
                  <div>
                    Location : {event.location} <br />
                    {event.address}
                  </div>
                  {event.price}
                </div>
              </div>

              <div>
                <h3>Speakers ({event.speakers.length})</h3>
                <div
                  style={{
                    backgroundColor: "whitesmoke",
                    width: "200px",
                    height: "50px"
                  }}
                >
                  {event.speakers.name}
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px",
                  borderRadius: "0.6rem",
                  width: "90px"
                }}
              >
                RSVP
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
