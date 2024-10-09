import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> 
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
            <hr />

            {/* Course Grid */}
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                
                {/* First Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                            <img src="/Figma.png" alt="Figma logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3305 Advanced Figma</h5>
                                <p className="card-text">Full Stack Software Developer</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Second Course */}
                <div className="wd-dashboard-course col" style={{ marginBottom: '35px', width: "260px", minHeight: "400px" }}>
                    <div className="card rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                            <img src="/Java-Logo.jpg" alt="Java logo" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ height: "200px" }}>
                                <h5 className="card-title">CS3320 React JS</h5>
                                <p className="card-text">Front-End Development</p>
                                <button className="btn btn-primary"> Go </button>
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
                                <button className="btn btn-primary"> Go </button>
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
                                <button className="btn btn-primary"> Go </button>
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
                                <button className="btn btn-primary"> Go </button>
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
                                <button className="btn btn-primary"> Go </button>
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
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
