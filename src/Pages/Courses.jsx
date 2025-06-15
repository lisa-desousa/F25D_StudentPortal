import CourseCard from "../Components/CourseCard";
import { useContext } from "react";
import { CourseContext } from "../Contexts/CourseContext";

export default function Courses() {
  const courses = useContext(CourseContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {courses.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={item.id}>
            <CourseCard
              id={item.id}
              name={item.name}
              shortD={item.shortDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
