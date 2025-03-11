import { useEffect, useState } from "react";
import axios from "axios";
import "./courselist.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span>Duration: {course.duration} hours</span>
              <img
                src={`http://localhost:8080/${course.image}`}
                alt={course.title}
                className="course-image"
              />
              <a
                href={`http://localhost:8080/${course.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link"
              >
                📄 View PDF
              </a>
            </li>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </ul>
    </div>
  );
};

export default CourseList;