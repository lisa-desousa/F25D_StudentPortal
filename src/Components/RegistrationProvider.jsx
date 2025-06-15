// Components/RegistrationProvider.jsx
import { useState } from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";

export default function RegistrationProvider({ children }) {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const value = {
    registeredCourses, // alla kan läsa detta
    registerCourses: setRegisteredCourses, // men vi väljer att endast använda detta i en komponent
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}
