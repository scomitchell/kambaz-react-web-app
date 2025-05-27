import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router"

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const links = [
        { label: "Home", path: `/Kambaz/Courses/${cid}/Home`},
        { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules`},
        { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza`},
        { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom`},
        { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
        { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes`},
        { label: "People", path: `/Kambaz/Courses/${cid}/People` }
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) =>
                <ListGroup.Item key={link.path} as={Link} to={link.path}
                    className="list-group-item text-danger border border-0"
                    active={pathname.includes(link.label)}>
                    {link.label}
                </ListGroup.Item>
            )}
        </div>
    );
}