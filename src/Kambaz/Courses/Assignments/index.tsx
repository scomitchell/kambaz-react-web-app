import { Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6"
import { BsGripVertical } from "react-icons/bs";
export default function Assignments() {
    return (
        <div id="wd-assignments" className="container-fluid">
            <div id="wd-assignments-top-bar"
                className="d-flex justify-content-between align-items-center">
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

                <div className="d-flex gap-2">
                    <Button variant="secondary" size="lg" id="wd-group-button">
                        <FaPlus className="me-2" />
                        Group
                    </Button>
                    <Button variant="danger" size="lg" id="wd-assignment-button">
                        <FaPlus className="me-2" />
                        Assignment
                    </Button>
                </div>
            </div>

            <div id="wd-assignments-list">
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> Assignments
                        </div>
                        <ListGroup className="wd-assignments rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 d-flex ps-1">
                                <BsGripVertical className="me-2 fs-3" />

                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                                        className="wd-assignment-link text-decoration-none text-black" >
                                        A1
                                    </a>
                                    <div className="d-flex">
                                        <p className="text-danger mb-0">Multiple Modules </p>
                                        <p className="mb-0 ms-2">| <strong>Not available until:</strong> May 6 at 12:00am | </p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="mb-0"><strong>Due</strong> May 13 at 11:59pm</p>
                                        <p className="mb-0 ms-2">| 100pts</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 d-flex ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/124"
                                        className="wd-assignment-link text-decoration-none text-black">
                                        A2
                                    </a>
                                    <div className="d-flex">
                                        <p className="text-danger mb-0">Multiple Modules </p>
                                        <p className="mb-0 ms-2">| <strong>Not available until:</strong> May 13 at 12:00am | </p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="mb-0"><strong>Due</strong> May 20 at 11:59pm</p>
                                        <p className="mb-0 ms-2">| 100pts</p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 d-flex ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/125"
                                        className="wd-assignment-link text-decoration-none text-black">
                                        A3
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
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}