import { FormLabel, FormGroup, FormControl, FormSelect, FormCheck, Button } from "react-bootstrap"
import { useParams } from "react-router";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addAssignment, updateAssignment } from "./assignmentReducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const [title, setTitle] = useState("");

    const handleSave = async () => {
        const newAssignment = {
            _id: aid,
            title: title,
            course: cid,
        };

        const exists = assignments.some((a: any) => a._id === aid);

        if (exists) {
            await assignmentsClient.updateAssignment(cid as string, aid as string, newAssignment);
            dispatch(updateAssignment(newAssignment));
        } else {
            await assignmentsClient.createAssignment(cid as string, newAssignment);
            dispatch(addAssignment(newAssignment));
        }

        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    useEffect(() => {
        const assignment = assignments.find((a: any) => a._id === aid);
        setTitle(assignment ? `${aid} - ${assignment.title}` : "");
    }, [aid, assignments]);

    return (
        <div id="wd-assignments-editor">
            <FormGroup className="mb-3" controlId="wd-assignment-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />
            </FormGroup>

            <FormGroup className="mb-3" controlId="wd-assignment-description">
                <FormControl
                    as="textarea"
                    defaultValue="Description of the assignment goes here"
                    style={{ height: '150px' }}
                    className="text-start"/>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-assignment-pts">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Points</FormLabel>
                <div className="col-sm-9">
                    <FormControl className="flex-grow-1" type="text" defaultValue="100" />
                </div>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-assignment-group">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Assignment Group</FormLabel>
                <div className="col-sm-9">
                    <FormSelect>
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>PROJECT</option>
                    </FormSelect>
                </div>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-display-grade-as">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Display Grade as</FormLabel>
                <div className="col-sm-9">
                    <FormSelect>
                        <option selected>PERCENTAGE</option>
                    </FormSelect>
                </div>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-submission-type">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Submission Type</FormLabel>
                <div className="col-sm-9 border border-1 p-3">
                    <FormSelect className="mb-3 ms-2">
                        <option selected>Online</option>
                    </FormSelect>
                    
                    <FormGroup>
                        <FormLabel className="ms-2 fw-bold">Online Entry Options</FormLabel>
                        <FormCheck
                            type="checkbox"
                            id="wd-text-entry"
                            label="Text entry"
                            className="ms-3 mb-2" />
                        <FormCheck
                            type="checkbox"
                            id="wd-website-url"
                            label="Website URL"
                            className="ms-3 mb-2" />
                        <FormCheck
                            type="checkbox"
                            id="wd-media-recordings"
                            label="Media Recording"
                            className="ms-3 mb-2" />
                        <FormCheck
                            type="checkbox"
                            id="wd-student-annotation"
                            label="Student Annotation"
                            className="ms-3 mb-2" />
                        <FormCheck
                            type="checkbox"
                            id="wd-file-upload"
                            label="File Upload"
                            className="ms-3 mb-2" />
                    </FormGroup>  
                </div>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-assign">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Assign</FormLabel>
                <div className="col-sm-9 border border-1 p-3">
                    <FormLabel className="ms-2 fw-bold">Assign To</FormLabel>

                    <FormControl className="mb-3" value="Everyone" />
                    <FormLabel className="ms-2 fw-bold">Due</FormLabel>
                    <FormControl className="mb-3" type="date" defaultValue="2025-05-20" />

                    <div className="d-flex gap-3">
                        <div id="wd-available-date">
                            <FormLabel className="ms-2 mb-1">Available From</FormLabel>
                            <FormControl className="mb-3" type="date" defaultValue="2025-05-13" />
                        </div>
                        <div id="wd-until-date">
                            <FormLabel className="ms-2 mb-1">Until</FormLabel>
                            <FormControl className="mb-3" type="date" />
                        </div>
                    </div>
                </div>
            </FormGroup>

            <div className="d-flex justify-content-end">
                <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                    <Button className="bg-danger border-0" onClick={handleSave}>Save</Button>
                </Link>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                    <Button className="bg-secondary border-0 text-black ms-2">Cancel</Button>
                </Link>
            </div>
        </div>
    );
}