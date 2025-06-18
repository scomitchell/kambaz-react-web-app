import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FacultyRoute from "../Account/FacultyRoute";
import { addNewCourse, deleteCourse, updateCourse, setEnrollments } from "../Courses/courseReducer"
import { useState, useEffect } from "react"
import EnrolledRoute from "../Courses/EnrolledRoute"
import * as userClient from "../Account/client"
export default function Dashboard({ courses, enrolling, setEnrolling, updateEnrollment }:
    {courses: any, enrolling: boolean,
        setEnrolling: (enrolling: boolean) => void, updateEnrollment: (courseId: string, enrolled: boolean) => void}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.courseReducer);
    const [course, setCourse] = useState({ name: "", description: "" });
    const [showAll, setShowAll] = useState(false);

    const dispatch = useDispatch();

    const handleEnrollments = () => {
        setShowAll(!showAll);
    }

    const handleEnrollUser = async (courseId: string) => {
        await userClient.enrollIntoCourse(courseId, currentUser._id);

        await loadEnrollments();
    };

    const handleUnenrollUser = async (courseId: string) => {
        await userClient.unenrollFromCourse(courseId, currentUser._id);

        await loadEnrollments();
    };

    const loadEnrollments = async () => {
        const enrollments = await userClient.findAllEnrollments();
        dispatch(setEnrollments(enrollments));
    }

    useEffect(() => {
        loadEnrollments();
    }, []);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
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
                    {courses.map((course: any) => {
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

                                            {enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}

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