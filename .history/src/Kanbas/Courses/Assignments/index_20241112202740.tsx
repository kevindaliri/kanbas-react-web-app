import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useNavigate } from "react-router-dom";

export default function Assignments() {
  const navigate = useNavigate();

  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ maxWidth: "250px" }}>
          <span className="input-group-text">
            <IoSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>

        <div>
          <button
            className="btn btn-outline-secondary me-2"
            style={{ backgroundColor: "white" }}
          >
            + Group
          </button>
          <button
            className="btn btn-danger"
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={() => navigate("/Kanbas/Courses/Assignments/Editor")}
          >
            + Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        <span>ASSIGNMENTS 40% of Total</span>
        <button className="btn btn-outline-secondary" style={{ backgroundColor: "white" }}>
          +
        </button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-unstyled">
        {/* Sample Assignment Items */}
        {/* Map through assignments here */}
      </ul>
    </div>
  );
}
