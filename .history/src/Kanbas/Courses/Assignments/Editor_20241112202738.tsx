import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAssignment } from "./reducer";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAssignment((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addAssignment(assignment));
    navigate("/Kanbas/Courses/Assignments");
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h3>Assignment Name</h3>
          </label>
          <input
            id="title"
            value={assignment.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter assignment name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={assignment.description}
            onChange={handleChange}
            className="form-control"
            style={{ height: "150px" }}
            placeholder="Enter description"
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="points" className="form-label">Points</label>
            <input
              id="points"
              type="number"
              value={assignment.points}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter points"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="dueDate" className="form-label">Due Date</label>
            <input
              id="dueDate"
              type="datetime-local"
              value={assignment.dueDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="availableFromDate" className="form-label">Available From</label>
            <input
              id="availableFromDate"
              type="datetime-local"
              value={assignment.availableFromDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="availableUntilDate" className="form-label">Available Until</label>
            <input
              id="availableUntilDate"
              type="datetime-local"
              value={assignment.availableUntilDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => navigate("/Kanbas/Courses/Assignments")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
