import { Link } from "react-router";
import { Nav } from "react-bootstrap";

export default function TOC() {
    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab1" as={Link}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab2" as={Link}>Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab3" as={Link}>Lab 3</Nav.Link>
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