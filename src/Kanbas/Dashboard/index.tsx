import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/Figma.png" alt="Figma logo" width={200} height={200} />
                        <div>
                            <h5>CS3305 Advanced Figma</h5>
                            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1235/Home">
                        <img src="/Java-Logo.jpg" alt="Java logo" width={200} height={200} />
                        <div>
                            <h5>CS3320 React JS</h5>
                            <p className="wd-dashboard-course-title">Front-End Development</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1236/Home">
                        <img src="/HTML.png" alt="HTML logo" width={200} height={200} />
                        <div>
                            <h5>CS3307 Node.js Basics</h5>
                            <p className="wd-dashboard-course-title">Back-End Development</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1237/Home">
                        <img src="/Bloomberg.jpg" alt="Bloomberg logo" width={200} />
                        <div>
                            <h5>CS3310 Python for Data Science</h5>
                            <p className="wd-dashboard-course-title">Data Science Fundamentals</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
                        <img src="/Angular.png" alt="Angular logo" width={200} />
                        <div>
                            <h5>CS3308 Angular Essentials</h5>
                            <p className="wd-dashboard-course-title">Web Application Development</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1239/Home">
                        <img src="/SQL.png" alt="SQL logo" width={200} />
                        <div>
                            <h5>CS3312 SQL & Database Design</h5>
                            <p className="wd-dashboard-course-title">Database Management</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course" style={{ marginBottom: '20px' }}>
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1240/Home">
                        <img src="/AWS.png" alt="AWS logo" width={200} />
                        <div>
                            <h5>CS3315 AWS Cloud Computing</h5>
                            <p className="wd-dashboard-course-title">Cloud Solutions Architect</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
