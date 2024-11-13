import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "../Database";  // Ensure this module exports `courses` and `enrollments`

export default function Dashboard() {
    // Access currentUser and enrollments from the Redux store
    const { currentUser, enrollments = [] } = useSelector((state: any) => state.accountReducer) || {}; // Set default value for enrollments

    // Initialize courses with db.courses, or filtered courses based on enrollments
    const [courses, setCourses] = useState<any[]>(db.courses);

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });

    // Ensure enrollments is an array before attempting to filter
    const filteredCourses = courses.filter((course) =>
        Array.isArray(enrollments) && enrollments.some(
            (enrollment) => enrollment.user === currentUser?._id && enrollment.course === course._id
        )
    );

    // Function to add a new course
    const addNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
        setCourses([...courses, newCourse]);
    };

    // Function to delete a course by ID
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    // Function to update a course
    const updateCourse = () => {
        setCourses(
            courses.map((c) => (c._id === course._id ? course : c))
        );
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {/* Conditional display for "New Course" and "Update" buttons based on role */}
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        placeholder="Course Name"
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        placeholder="Course Description"
                    />
                    <hr />
                </>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
            <hr />

            {/* Display filtered courses */}
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredCourses.map((course) => (
                    <div
                        className="wd-dashboard-course col"
                        style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}
                        key={course._id}
                    >
                        <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to={`/Kanbas/Courses/${course._id}/Home`}
                            >
                                <img
                                    src={course.image || "/images/default.jpg"} // Use a default image if none is provided
                                    alt="Course image"
                                    className="card-img-top"
                                    style={{ height: '160px', objectFit: 'cover' }}
                                />
                                <div className="card-body" style={{ height: "200px" }}>
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                        {course.description}
                                    </p>
                                    <button className="btn btn-primary">Go</button>

                                    {/* Show Edit and Delete buttons only for FACULTY */}
                                    {currentUser?.role === "FACULTY" && (
                                        <>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        </>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
