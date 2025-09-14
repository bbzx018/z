import { useState } from "react";
import { useCourseStore } from "../store/CourseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((s) => s.addCourse);

  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!form.code.trim() || !form.nameTH.trim()) return;
    addCourse({ ...form, credit: Number(form.credit) });
    setForm({ code: "", nameTH: "", nameEN: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <div>
      <h2>เพิ่มรายวิชา</h2>
      <input name="code" placeholder="รหัสวิชา" value={form.code} onChange={handleChange} />
      <input name="nameTH" placeholder="ชื่อวิชา (ไทย)" value={form.nameTH} onChange={handleChange} />
      <input name="nameEN" placeholder="ชื่อวิชา (อังกฤษ)" value={form.nameEN} onChange={handleChange} />
      <input name="credit" type="number" min="1" placeholder="หน่วยกิต" value={form.credit} onChange={handleChange} />
      <input name="teacher" placeholder="อาจารย์ผู้สอน" value={form.teacher} onChange={handleChange} />
      <select name="grade" value={form.grade} onChange={handleChange}>
        <option>A</option><option>B+</option><option>B</option>
        <option>C+</option><option>C</option><option>D+</option>
        <option>D</option><option>F</option>
      </select>
      <button onClick={handleAdd}>เพิ่มรายวิชา</button>
    </div>
  );
};

export default CourseForm;
