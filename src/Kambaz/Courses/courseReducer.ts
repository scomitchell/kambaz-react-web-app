import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database"
import { v4 as uuidv4 } from "uuid";

const initialState = { 
    courses: courses,
    enrollments: [],
}

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        
        addNewCourse: (state, { payload: course }) => {
            const newCourse: any = {
                _id: uuidv4(),
                name: course.name,
                number: course.number,
            };

            state.courses = [...state.courses, newCourse] as any;
        },

        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },

        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },

        enrollInCourse: (state, { payload }) => {
            const { userId, courseId } = payload;

            const newEnrollment = {
                _id: uuidv4(),
                user: userId,
                course: courseId,
            };

            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },

        unenrollFromCourse: (state, { payload }) => {
            const { userId, courseId } = payload;

            state.enrollments = state.enrollments.filter((enrollment: any) =>
                enrollment.user !== userId &&
                enrollment.course !== courseId
            );
        }
    },
});

export const { addNewCourse, deleteCourse, updateCourse, enrollInCourse, unenrollFromCourse, setEnrollments } = courseSlice.actions;
export default courseSlice.reducer;