import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
    return data;
}

export const createAssignment = async (courseId: string, assignment: any) => {
    const { data } = await axios.post(`${ASSIGNMENTS_API}/${courseId}`, assignment);
    return data;
}

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const { data } = await axios.delete(`${ASSIGNMENTS_API}/${courseId}/${assignmentId}`);
    return data;
}

export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${courseId}/${assignmentId}`, assignment);
    return data;
}