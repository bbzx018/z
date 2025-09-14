import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import CourseDrop from "./CourseDrop";
import { useCourseStore } from "../store/CourseStore";

const CourseApp = () => {
  const gpa = useCourseStore((s) => s.calcGPA());

  return (
    <div style={{ padding: "20px" }}>
      <h1>📘 ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <h2>GPA รวม: {gpa.toFixed(2)}</h2>
    </div>
  );
};

export default CourseApp;
