import { useContext } from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";

export default function IsRegistered({ courseName }) {
  const { registeredCourses } = useContext(RegistrationContext);
  const isRegistered = registeredCourses.includes(courseName);

  return isRegistered ? <p>✅ Registered</p> : null;
}
