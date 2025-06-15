import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../Contexts/CourseContext";
import IsRegistered from "../Components/IsRegistered";

export default function CourseDetails() {
  const courses = useContext(CourseContext);

  const { id } = useParams();

  const course = courses.find((c) => c.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3>Course Details: {course.name}</h3>
              <IsRegistered courseName={course.name} />
            </div>
            <div className="card-body">{course.longDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
