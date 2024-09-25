import Lab1 from "./Lab1/Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h4>Kevin Daliri | Section 2</h4>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="github-repo" element={<div id="wd-github">
          <Navigate to="https://github.com/kevindaliri/kanbas-react-web-app.git" />
        </div>}
        />
      </Routes>
    </div>
  );
}