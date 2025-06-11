import { useState } from "react";
import { FormControl } from "react-bootstrap"
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} /> <br />

            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <label>
                <input type="checkbox" checked={assignment.completed} onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })} />
                Completed
            </label> <br /><br />

            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}>
                Update Score
            </a>
            <FormControl className="w-75" id="wd-assignment-score" type="number"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value)})} />
            <hr />
        </div>
    );
}
