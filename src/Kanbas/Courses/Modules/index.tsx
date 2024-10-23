import { useParams } from "react-router"; 
import * as db from "../../Database"; 
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams(); 
  const modules = db.modules;

  console.log("Course ID:", cid); 
  console.log("All Modules:", modules); 

  const courseModules = modules.filter((module) => module.course === cid);

  console.log("Filtered Modules for Course:", courseModules);

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((module, index) => (
          <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name} 
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} 
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {courseModules.length === 0 && <li>No modules found for this course.</li>}
      </ul>
    </div>
  );
}
