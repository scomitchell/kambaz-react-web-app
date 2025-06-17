import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux"
export default function AccountNavigation() {
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? [
        { label: "Profile", path: "/Kambaz/Account/Profile" }] :
        [{ label: "Signin", path: "/Kambaz/Account/Signin" },
        { label: "Signup", path: "/Kambaz/Account/Signup" },];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) =>
                <ListGroup.Item key={link.path} as={Link} to={link.path}
                    className={"list-group-item text-danger border border-0"}
                    active={pathname.includes(link.label)}>
                    {link.label}
                </ListGroup.Item>
            )}
            {currentUser && currentUser.role === "ADMIN" && (
                <ListGroup.Item key="/Kambaz/Account/Users" as={Link} to="/Kambaz/Account/Users"
                    className={`list-group-item text-danger border border-0
                    ${active("Users")}`}>
                    Users
                </ListGroup.Item>)}
        </div>
    )
}