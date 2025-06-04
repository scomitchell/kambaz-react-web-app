import { useSelector } from "react-redux"

export default function EnrolledRoute({ courseId, children }: { courseId: string, children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.courseReducer);

    if (enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId)) {
        return children;
    } else {
        return;
    }


}