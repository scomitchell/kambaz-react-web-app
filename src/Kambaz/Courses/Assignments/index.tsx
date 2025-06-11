import { Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { FaSearch, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6"
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import FacultyRoute from "../../Account/FacultyRoute";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./assignmentReducer";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();

    const createAssignment = () => {
        const newId = uuidv4();
        navigate(`/Kambaz/Courses/${cid}/Assignments/${newId}`);
    }

    const fetchAssignments = async () => {
        const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    }

    const handleDeleteAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(cid as string, assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    return (
        <div id="wd-assignments" className="container-fluid">
            <div id="wd-assignments-top-bar"
                className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <InputGroup>
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Search for Assignment"
                            aria-label="Search for Assignment"
                            style={{ width: "250px" }}
                        />
                    </InputGroup>
                </div>

                <FacultyRoute>
                    <div className="d-flex gap-2">
                        <Button variant="secondary" size="lg" id="wd-group-button">
                            <FaPlus className="me-2" />
                            Group
                        </Button>
                        <Button variant="danger" size="lg" id="wd-assignment-button" onClick={createAssignment}>
                            <FaPlus className="me-2" />
                            Assignment
                        </Button>
                    </div>
                </FacultyRoute>
            </div>

            <div id="wd-assignments-list">
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> Assignments
                            <div className="float-end border border-1 border-black rounded-pill ps-2 pe-2">
                                40% of Grade
                            </div>
                        </div>

                        <ListGroup className="wd-assignments rounded-0">

                            {assignments
                                .filter((assignment: any) => assignment.course === cid)
                                .map((assignment: any) =>
                                    <ListGroup.Item className="wd-lesson p-3 d-flex ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <div>
                                            <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                                className="wd-assignment-link text-decoration-none text-black">
                                                {assignment.title}
                                            </a>
                                            <div className="d-flex">
                                                <p className="text-danger mb-0">Multiple Modules </p>
                                                <p className="mb-0 ms-2">| <strong>Not available until:</strong> May 20 at 12:00am | </p>
                                            </div>
                                            <div className="d-flex">
                                                <p className="mb-0"><strong>Due</strong> May 27 at 11:59pm</p>
                                                <p className="ms-2 mb-0">| 100pts</p>
                                            </div>
                                        </div>
                                        <FaTrash className="text-danger float-end" onClick={() => {
                                            const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
                                            if (confirmDelete) {
                                                handleDeleteAssignment(assignment._id);
                                            }
                                        }} />
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}