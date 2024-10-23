import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../Database"; 
import './classes.css';  

export default function Navigation() {  
  const { cid } = useParams();  
  const { pathname } = useLocation(); 

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const course = courses.find((course) => course._id === cid); 

  if (!course) {
    return <div>Course not found!</div>; 
  }

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`; 
        const isActive = pathname.toLowerCase().includes(link.toLowerCase());  
        const linkClass = isActive ? 'active-link' : 'inactive-link';

        return (
          <Link
            key={link} 
            to={linkPath}  
            className={`list-group-item border-0 ${linkClass}`} 
          >
            {link} 
          </Link>
        );
      })}
    </div>
  );
}
