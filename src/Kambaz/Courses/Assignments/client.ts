import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
    return response.data;
}

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${ASSIGNMENTS_API}/${courseId}`, assignment);
    return response.data;
}

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${courseId}/${assignmentId}`);
    return response.data;
}

export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${courseId}/${assignmentId}`, assignment);
    return response.data;
}