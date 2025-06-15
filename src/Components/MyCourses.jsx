import { useContext } from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import { CourseContext } from "../Contexts/CourseContext";

export default function MyCourses() {
  const { registeredCourses } = useContext(RegistrationContext);
  const courses = useContext(CourseContext);

  const matchedCourses = courses.filter((course) =>
    registeredCourses.includes(course.name)
  );

  return (
    <>
      <h3>Your registered courses:</h3>
      {matchedCourses.length === 0 ? (
        <p>You are not registered to any courses yet.</p>
      ) : (
        <ul>
          {matchedCourses.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong> - {course.shortDescription}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
