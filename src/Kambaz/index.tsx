import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        }));
    };


    useEffect(() => {
        fetchCourses();
    }, [currentUser]);


    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <h1>Kambaz</h1>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={courses} /> </ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /> </ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}