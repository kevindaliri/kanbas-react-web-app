import { IoSearch } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      <div
        className="d-flex justify-content-between align-items-center mb-3"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
      >
        {/* Search Bar */}
        <div className="input-group" style={{ display: "flex", maxWidth: "250px" }}>
          <span className="input-group-text" style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px 0 0 4px", backgroundColor: "#f8f9fa" }}>
            <IoSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "0 4px 4px 0" }}
          />
        </div>

        {/* Group and Assignment Buttons */}
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            style={{
              backgroundColor: "white",
              border: "1px solid #6c757d",
              padding: "0.5rem 1rem",
              marginRight: "0.5rem",
              borderRadius: "5px",
            }}
          >
            + Group
          </button>
          <button
            className="btn btn-danger"
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
            }}
          >
            + Assignment
          </button>
        </div>
      </div>

      {/* Title */}
      <h3
        id="wd-assignments-title"
        className="d-flex justify-content-between align-items-center"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          className="btn btn-outline-secondary"
          style={{
            backgroundColor: "white",
            border: "1px solid #6c757d",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
          }}
        >
          +
        </button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-unstyled" style={{ listStyleType: "none", paddingLeft: "0" }}>
        {/* Assignment Item 1 */}
        <li
          className="wd-assignment-list-item"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderLeft: "4px solid green",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "1rem",
          }}
        >
          <BsGripVertical className="me-2 fs-5" style={{ marginRight: "0.5rem", fontSize: "1.5rem" }} />
          <div className="flex-grow-1" style={{ flexGrow: 1 }}>
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
              style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}
            >
              A1 - ENV + HTML
            </a>
            <p className="mb-1" style={{ marginBottom: "0.5rem" }}>
              Multiple Modules | <strong>Not available until May 6 at 12:00am</strong> <br />
              <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </p>
          </div>
          <LessonControlButtons />
        </li>

        {/* Assignment Item 2 */}
        <li
          className="wd-assignment-list-item"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderLeft: "4px solid green",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "1rem",
          }}
        >
          <BsGripVertical className="me-2 fs-5" style={{ marginRight: "0.5rem", fontSize: "1.5rem" }} />
          <div className="flex-grow-1" style={{ flexGrow: 1 }}>
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124"
              style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <p className="mb-1" style={{ marginBottom: "0.5rem" }}>
              Multiple Modules | <strong>Not available until May 13 at 12:00am</strong> <br />
              <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </p>
          </div>
          <LessonControlButtons />
        </li>

        {/* Assignment Item 3 */}
        <li
          className="wd-assignment-list-item"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderLeft: "4px solid green",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "1rem",
          }}
        >
          <BsGripVertical className="me-2 fs-5" style={{ marginRight: "0.5rem", fontSize: "1.5rem" }} />
          <div className="flex-grow-1" style={{ flexGrow: 1 }}>
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125"
              style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <p className="mb-1" style={{ marginBottom: "0.5rem" }}>
              Multiple Modules | <strong>Not available until May 20 at 12:00am</strong> <br />
              <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </p>
          </div>
          <LessonControlButtons />
        </li>
      </ul>
    </div>
  );
}
