import React from 'react';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">
                        <h3>Assignment Name</h3>
                    </label>
                    <input
                        id="wd-name"
                        value="A1 - ENV + HTML"
                        className="form-control"
                        style={{ marginBottom: "20px" }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        style={{ height: "150px" }}
                    >
                        The assignment is available online. Submit a link to the landing page of
                        your Web application running on Netlify. The landing page should include
                        the following: - Your full name and section - Links to each of the lab
                        assignments - Link to the Kanbas application - Links to all relevant source
                        code repositories
                    </textarea>
                </div>

                <div className="row mb-3">
                    <div className="col-md-3">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input
                            id="wd-points"
                            value={100}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        <select className="form-control">
                            <option value="VAL1">ASSIGNMENTS</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        <select className="form-control">
                            <option value="VAL1">Online</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Online Entry Option</label>
                    <div className="form-check">
                        <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                        <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                        <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                        <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                        <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                        <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                        <input id="wd-assign-to" value="Everyone" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                        <input type="datetime-local" id="wd-due-date" value="2024-05-13T23:59" className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                        <input type="datetime-local" id="wd-available-from" value="2024-05-06T00:00" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <input type="datetime-local" id="wd-available-until" value="2024-05-20T23:59" className="form-control" />
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2">Cancel</button>
                    <button className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}
