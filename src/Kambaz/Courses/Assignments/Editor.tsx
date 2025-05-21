import {FormLabel, FormGroup, FormControl, FormSelect, FormCheck, Button, ListGroup } from "react-bootstrap"
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <FormGroup className="mb-3" controlId="wd-assignment-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" value="A1" />
            </FormGroup>

            <FormGroup className="mb-3" controlId="wd-assignment-description">
                <FormControl
                    as="textarea"
                    value="Description of the assignment goes here"
                    style={{ height: '150px' }}
                    className="text-start"/>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-assignment-pts">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Points</FormLabel>
                <div className="col-sm-9">
                    <FormControl className="flex-grow-1" type="text" value="100" />
                </div>
            </FormGroup>

            <FormGroup className="row mb-3" controlId="wd-assignment-group">
                <FormLabel className="col-sm-3 col-form-label text-sm-end">Assignment Group</FormLabel>
                <div className="col-sm-9">
                    <FormSelect>
                        <option selected>ASSIGNMENTS</option>
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
                    <FormControl className="mb-3" type="date" value="2025-05-20" />

                    <div className="d-flex gap-3">
                        <div id="wd-available-date">
                            <FormLabel className="ms-2 mb-1">Available From</FormLabel>
                            <FormControl className="mb-3" type="date" value="2025-05-13" />
                        </div>
                        <div id="wd-until-date">
                            <FormLabel className="ms-2 mb-1">Until</FormLabel>
                            <FormControl className="mb-3" type="date" />
                        </div>
                    </div>
                </div>
            </FormGroup>
        </div>
    );
}