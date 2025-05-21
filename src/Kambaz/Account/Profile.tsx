import { Link } from "react-router-dom";
import { Form, FormSelect } from "react-bootstrap"
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Form.Control id="wd-username"
                defaultValue="alice"
                placeholder="username"
                className="mb-2" />
            <Form.Control id="wd-password"
                defaultValue="123"
                type="password"
                placeholder="password"
                className="mb-2" />
            <Form.Control id="wd-first-name"
                defaultValue="Alice"
                placeholder="First Name"
                className="mb-2" />
            <Form.Control id="wd-last-name"
                defaultValue="Wonderland"
                placeholder="Last Name"
                className="mb-2" />
            <Form.Control id="wd-dob"
                type="date"
                defaultValue="2000-01-01"
                className="mb-2" />
            <Form.Control id="wd-email"
                type="email"
                defaultValue="alice@wonderland"
                className="mb-2" />
            <FormSelect 
                id="wd-role"
                defaultValue="FACULTY"
                className="mb-2">
                <option value="FACULTY">FACULTY</option>
                <option value="FACULTY">USER</option>
            </FormSelect>
            <Link to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2">Sign out</Link>
        </div>
    );
}
