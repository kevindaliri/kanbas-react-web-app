import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";


export default function Dashboard() {
    const [courses, setCourses] = useState<any[]>(db.courses);
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
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };




    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5><br />
            <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />

            {/* Course Grid */}
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {courses.map((course) => (
                    <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }} key={course._id}>
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
                                    }} className="btn btn-danger float-end"
                                        id="wd-delete-course-click">
                                        Delete
                                    </button>
                                    <button id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end" >
                                        Edit
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Second Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                            <img src="/Java-Logo.jpg" alt="Java logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3320 React JS</h5>
                                <p className="card-text">Front-End Development</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Third Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1236/Home">
                            <img src="/HTML.png" alt="HTML logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3307 Node.js Basics</h5>
                                <p className="card-text">Back-End Development</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Fourth Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1237/Home">
                            <img src="/Bloomberg.jpg" alt="Bloomberg logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3310 Python for Data Science</h5>
                                <p className="card-text">Data Science Fundamentals</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Fifth Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1238/Home">
                            <img src="/Angular.png" alt="Angular logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3308 Angular Essentials</h5>
                                <p className="card-text">Web Application Development</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Sixth Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1239/Home">
                            <img src="/SQL.png" alt="SQL logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3312 SQL & Database Design</h5>
                                <p className="card-text">Database Management</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Seventh Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1240/Home">
                            <img src="/AWS.png" alt="AWS logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3315 AWS Cloud Computing</h5>
                                <p className="card-text">Cloud Solutions Architect</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
