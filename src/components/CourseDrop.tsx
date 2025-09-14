import { useCourseStore } from "../store/CourseStore";

const CourseDrop = () => {
  const dropped = useCourseStore((s) => s.dropped);

  return (
    <div>
      <h2>รายวิชาที่ถอน</h2>
      {dropped.length === 0 && <p>ยังไม่มีรายวิชาที่ถอน</p>}
      <ul>
        {dropped.map((c) => (
          <li key={c.id}>
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDrop;
