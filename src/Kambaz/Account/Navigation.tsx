import { Link } from "react-router-dom"
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kambaz/Account/Signin" id="wd-sign-in-link"
                className="list-group-item active border border-0"> Signin  </Link> <br />
            <Link to="/Kambaz/Account/Signup" id="wd-sign-up-linl"
                className="list-group-item text-danger border border-0"> Signup  </Link> <br />
            <Link to="/Kambaz/Account/Profile" id="wd-profile-link"
                className="list-group-item text-danger border border-0"> Profile </Link> <br />
        </div>
    )
}