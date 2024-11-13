import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "../Database";

export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;

    // Filter courses to only show those the current user is enrolled in
    const enrolledCourses = db.courses.filter((course) =>
        enrollments.some(
            (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
        )
    );

    const [courses, setCourses] = useState<any[]>(enrolledCourses);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => (c._id === course._id ? course : c))
        );
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h5>New Course
                <button className="btn btn-primary float-end" onClick={addNewCourse}>Add</button>
                <button className="btn btn-warning float-end me-2" onClick={updateCourse}>Update</button>
            </h5>
            <br />
            <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />

            <h2>Published Courses ({enrolledCourses.length})</h2>
            <hr />

            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {enrolledCourses.map((course) => (
                    <div className="wd-dashboard-course col" key={course._id} style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                        <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                                <img src="/Figma.png" alt="Figma logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                                <div className="card-body" style={{ height: "200px" }}>
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text overflow-y-hidden" style={{ maxHeight: 100 }}>{course.description}</p>
                                    <button className="btn btn-primary">Go</button>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }} className="btn btn-danger float-end">Delete</button>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }} className="btn btn-warning me-2 float-end">Edit</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
