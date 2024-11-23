import React, { useState, useEffect } from "react";

function WorkingWithObjects() {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
  
  // Assignment state
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  // Module state
  const [module, setModule] = useState({
    id: "M101",
    name: "Web Development",
    description: "Introduction to Full Stack Web Development",
    course: "CS5610"
  });

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      const assignmentResponse = await fetch(`${REMOTE_SERVER}/lab5/assignment`);
      const assignmentData = await assignmentResponse.json();
      setAssignment(assignmentData);

      const moduleResponse = await fetch(`${REMOTE_SERVER}/lab5/module`);
      const moduleData = await moduleResponse.json();
      setModule(moduleData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Assignment</h4>
      <div className="list-group mb-4">
        <div className="list-group-item">
          <h5>Current Assignment</h5>
          <p>Title: {assignment.title}</p>
          <p>Score: {assignment.score}</p>
          <p>Completed: {assignment.completed ? "Yes" : "No"}</p>
        </div>
      </div>

      {/* Assignment Controls */}
      <div className="mb-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            id="wd-assignment-title"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
          <a
            id="wd-update-assignment-title"
            className="btn btn-primary mt-2"
            href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
          >
            Update Title
          </a>
        </div>

        <div className="mb-3">
          <label className="form-label">Score</label>
          <input
            id="wd-assignment-score"
            className="form-control"
            type="number"
            value={assignment.score}
            onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
          />
          <a
            id="wd-update-assignment-score"
            className="btn btn-primary mt-2"
            href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
          >
            Update Score
          </a>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              id="wd-assignment-completed"
              className="form-check-input"
              type="checkbox"
              checked={assignment.completed}
              onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />
            <label className="form-check-label">Completed</label>
          </div>
          <a
            id="wd-update-assignment-completed"
            className="btn btn-primary mt-2"
            href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
          >
            Update Completed Status
          </a>
        </div>
      </div>

      {/* Module Section */}
      <h4>Module</h4>
      <div className="list-group mb-4">
        <div className="list-group-item">
          <h5>Current Module</h5>
          <p>Name: {module.name}</p>
          <p>Description: {module.description}</p>
        </div>
      </div>

      {/* Module Controls */}
      <div className="mb-4">
        <a
          id="wd-get-module"
          className="btn btn-primary me-2"
          href={`${REMOTE_SERVER}/lab5/module`}
        >
          Get Module
        </a>
        <a
          id="wd-get-module-name"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/name`}
        >
          Get Module Name
        </a>
      </div>

      <div className="mb-3">
        <label className="form-label">Module Name</label>
        <input
          id="wd-module-name"
          className="form-control"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          id="wd-update-module-name"
          className="btn btn-primary mt-2"
          href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
        >
          Update Module Name
        </a>
      </div>

      <div className="mb-3">
        <label className="form-label">Module Description</label>
        <input
          id="wd-module-description"
          className="form-control"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <a
          id="wd-update-module-description"
          className="btn btn-primary mt-2"
          href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
        >
          Update Module Description
        </a>
      </div>
    </div>
  );
}

export default WorkingWithObjects;