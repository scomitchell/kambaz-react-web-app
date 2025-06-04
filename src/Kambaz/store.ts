import { configureStore } from "@reduxjs/toolkit"
import modulesReducer from "./Courses/Modules/modulesReducer"
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/assignmentReducer"
import courseReducer from "./Courses/courseReducer"

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        courseReducer,
    },
});

export default store;