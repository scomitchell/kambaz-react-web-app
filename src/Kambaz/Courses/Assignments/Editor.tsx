export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id ="wd-group">
                            <option value="ASSIGNMENTS" selected> ASSIGNMENTS </option>
                            <option value="QUIZZES"> QUIZZES </option>
                            <option value="EXAMS"> EXAMS </option>
                            <option value="PROJECT"> PROJECT </option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE" selected>Percentage</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission type</label>
                    </td>
                    <td>
                        <div>
                            <select id="wd-submission-type">
                                <option value="Online" selected>Online</option>
                            </select>
                        </div> <br />

                        <div>
                            <label>Online Entry Options</label><br />
                            <input type="checkbox" name="check-online-entry" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label> <br />

                            <input type="checkbox" name="check-online-entry" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label> <br />

                            <input type="checkbox" name="check-online-entry" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label> <br />

                            <input type="checkbox" name="check-online-entry" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

                            <input type="checkbox" name="check-online-entry" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label> <br />
                        </div> <br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td>
                        <div>
                            <label htmlFor="wd-assign-to"> Assign to </label> <br />
                            <input id="wd-assign-to-box" />
                        </div> <br />

                        <div>
                            <label htmlFor="wd-due-date">Due</label> <br />
                            <input type="date"
                                value="2025-05-13"
                                id="wd-due-date-field" />
                        </div> <br />

                        <tr>
                            <td><label htmlFor="wd-available-from">Available</label></td>
                            <td><label htmlFor="wd-available-until">Until</label></td>
                        </tr>
                        <tr>
                            <td><input type="date" value="2025-05-13" id="wd-available-from" /></td>
                            <td><input type="date" value="2025-05-13" id="wd-available-until" /></td>
                        </tr>
                    </td>
                </tr> <br />
            </table>
            <hr />
            <table>
                <tr>
                    <td colSpan={3} align="right">
                        <button type="button"
                            id="wd-cancel">
                            Cancel
                        </button>
                        <button type="button"
                            id="wd-save">
                            Save
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}