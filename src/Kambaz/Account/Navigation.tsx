import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function AccountNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Signin", path: "/Kambaz/Account/Signin" },
        { label: "Signup", path: "/Kambaz/Account/Signup" },
        { label: "Profile", path: "/Kambaz/Account/Profile" },
    ];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) =>
                <ListGroup.Item key={link.path} as={Link} to={link.path}
                    className={"list-group-item text-danger border border-0"}
                    active={pathname.includes(link.label)}>
                    {link.label}
                </ListGroup.Item>
            )}
        </div>
    )
}