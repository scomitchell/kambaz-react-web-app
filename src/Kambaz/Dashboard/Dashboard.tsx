import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FacultyRoute from "../Account/FacultyRoute";
import { addNewCourse, deleteCourse, updateCourse, enrollInCourse, unenrollFromCourse } from "../Courses/courseReducer"
import { useState } from "react"
import EnrolledRoute from "../Courses/EnrolledRoute"
export default function Dashboard() {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.courseReducer);
    const { courses } = useSelector((state: any) => state.courseReducer);
    const [course, setCourse] = useState({ name: "", description: "" });
    const [showAll, setShowAll] = useState(false);

    const dispatch = useDispatch();

    const handleEnrollments = () => {
        setShowAll(!showAll);
    }


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <Button className="btn-primary float-end" onClick={handleEnrollments}>Enrollments</Button>
            </h1> <hr />
            <FacultyRoute>
                <h5>New Course
                    <Button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => dispatch(addNewCourse(course))} > Add </Button>
                    <Button className="btn btn-warning float-end me-2"
                        id="wd-update-course-click"
                        onClick={() => dispatch(updateCourse(course))}> Update </Button>
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
                    {(showAll ? courses : courses.filter((course: any) =>
                        enrollments.some((enrollment: any) =>
                            (enrollment.user === currentUser._id) &&
                            enrollment.course === course._id)
                    )).map((course: any) => {
                        const enrolled = enrollments.some((enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        );

                        return (
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

                                            <EnrolledRoute courseId={course._id}>
                                                <Button variant="primary"> Go </Button>
                                            </EnrolledRoute>

                                            {enrolled ?
                                                <Button onClick={(event) => {
                                                    event.preventDefault()
                                                    dispatch(unenrollFromCourse({ userId: currentUser._id, courseId: course._id }))
                                                }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-unenroll-course-click">
                                                    Unenroll
                                                </Button> :
                                                <Button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(enrollInCourse({ userId: currentUser._id, courseId: course._id }))
                                                }}
                                                    className="btn btn-success float-end"
                                                    id="wd-enroll-course-click">
                                                    Enroll
                                                </Button>
                                            }
                                            <FacultyRoute>
                                                <Button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(deleteCourse(course._id));
                                                }} className="btn btn-danger float-end me-2"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </Button>
                                                <Button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </Button>
                                            </FacultyRoute>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>);
}