import { createContext, useState } from "react";
import { Database } from "../Pages/Database";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [data, setData] = useState(Database);
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [eventDetails, setEventDetails] = useState([]);

  const handleDropdown = (event) => {
    const chooseEvent = event.target.value;
    const newData = data.filter((event) => event.eventType === chooseEvent);
    setDataToDisplay(chooseEvent === "Both" ? data : newData);
  };

  const handleEventPage = (eventId) => {
    const selectedEvent = data.filter((meetup) => meetup.id === eventId);
    setEventDetails(selectedEvent);
  };
  return (
    <EventContext.Provider
      value={{
        data,
        handleEventPage,
        dataToDisplay,
        handleDropdown,
        eventDetails
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
