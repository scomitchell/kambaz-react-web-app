import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3500/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS3500 OOD</h5>
                             <p className="wd-dashboard-course-title">
                                Object-Oriented Design  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5800/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS5800 Algorithms</h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1113/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>COMM1113 Professional Speaking</h5>
                            <p className="wd-dashboard-course-title">
                                Business and Professional Speaking  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5610/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS5610 Web Dev</h5>
                            <p className="wd-dashboard-course-title">
                                Web Development  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2500/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS2500 Fundamentals 1</h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of CS 1  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5800/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS2510 Fundamentals 2</h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Computer Science 2  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4530/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS5800 Software Dev</h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Software Engineering  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}