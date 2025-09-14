import { useCourseStore } from "../store/CourseStore";

const CourseList = () => {
  const { courses, dropCourse } = useCourseStore();

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      {courses.length === 0 && <p>ยังไม่มีรายวิชา</p>}
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) | อาจารย์: {c.teacher} | เกรด: {c.grade}
            <button onClick={() => dropCourse(c.id)}>ถอน</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
