import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import * as db from "../Database";
import { useSelector, useDispatch } from "react-redux";
import FacultyRoute from "../Account/FacultyRoute";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/courseReducer"
import { useState } from "react"
export default function Dashboard() {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    const { courses } = useSelector((state: any) => state.courseReducer);
    const dispatch = useDispatch();

    const [course, setCourse] = useState<{ _id?: string; name: string; description?: string }>({
        name: "",
        description: "",
    });


    const handleAddNew = () => {
        dispatch(addNewCourse(course));
        setCourse({ name: "", description: "" });
    };

    const handleUpdate = () => {
        dispatch(updateCourse(course));
        setCourse({ name: "", description: "" });
    };

    const handleEditClick = (c: any) => {
        setCourse(c);
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <FacultyRoute>
                <h5>New Course
                    <Button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={handleAddNew} > Add </Button>
                    <Button className="btn btn-warning float-end me-2"
                        id="wd-update-course-click"
                        onClick={handleUpdate}> Update </Button>
                </h5><br />
                <FormControl value={course.name} className="mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <FormControl value={course.description} as="textarea" rows={3}
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </FacultyRoute>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.filter((course: any) =>
                        enrollments.some((enrollment) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id)
                    ).map((course: any) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </Card.Text>
                                        <Button variant="primary"> Go </Button>

                                        <FacultyRoute>
                                            <Button onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(deleteCourse(course._id));
                                            }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </Button>
                                            <Button id="wd-edit-course-click"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleEditClick(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </Button>
                                        </FacultyRoute>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>);
}