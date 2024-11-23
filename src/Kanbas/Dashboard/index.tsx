import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => Promise<void>;
}

export default function Dashboard({ 
  courses, 
  course, 
  setCourse, 
  addNewCourse 
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h2>Published Courses ({courses.length})</h2>
        <button 
          className="btn btn-primary" 
          onClick={addNewCourse}
        >
          Add Course
        </button>
      </div>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col">
              <div className="card">
                <img src="/images/card-header.jpg" className="card-img-top" alt="Course Header" />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy" }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.number}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go to Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}