import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database"
import { v4 as uuidv4 } from "uuid";

const initialState = { 
    courses: courses,
}

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
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
    },
});

export const { addNewCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;