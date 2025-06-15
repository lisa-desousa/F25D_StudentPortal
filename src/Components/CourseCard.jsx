import { Link } from "react-router";
import IsRegistered from "./IsRegistered";

export default function CourseCard({ name, shortD, id }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
      </div>
      <div className="card-body">{shortD}</div>
      <div className="card-footer d-flex justify-content-between">
        <Link to={`/courses/${id}`} className="card-link">
          Read More
        </Link>
        <IsRegistered courseName={name} />
      </div>
    </div>
  );
}
