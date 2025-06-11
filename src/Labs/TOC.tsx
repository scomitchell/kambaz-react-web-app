import { Link, useLocation } from "react-router";
import { Nav } from "react-bootstrap";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab1" as={Link} active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab2" as={Link} active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab3" as={Link} active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab4" as={Link} active={pathname.includes("Lab4")}>Lab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab5" as={Link} active={pathname.includes("Lab5")}>Lab 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="https://github.com/scomitchell/kambaz-react-web-app" as={Link}>My Github</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}