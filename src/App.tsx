
import './App.css'

// ===== ชุดแรก: คอมโพเนนต์ย่อยแยก =====
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
import CourseDrop from './components/CourseDrop'
import CourseGPA from './components/CourseGPA'

// ===== ชุดสอง: ถ้าอยากใช้ TodoApp / CourseApp แบบรวมเอง ก็ยังเรียกได้ =====
// import TodoApp from './components/TodoApp'
// import CourseApp from './components/CourseApp'

export default function App() {
  return (
    <div className="container">
      {/* ---- ส่วน Todo (Zustand) ---- */}
      <section>
        <h2>Todo List (Zustand)</h2>
        <TodoForm />
        <TodoList />

        {/* ถ้าอยากใช้ TodoApp เวอร์ชันรวมก็ใช้แทนสองบรรทัดบนได้ */}
        {/* <TodoApp /> */}
      </section>

      {/* ---- ส่วนระบบการถอนรายวิชา ---- */}
      <section style={{ marginTop: 32 }}>
        <h2>ระบบการถอนรายวิชา</h2>
        <CourseForm />
        <div style={{ display: 'grid', gap: 16, marginTop: 12 }}>
          <CourseList />
          <CourseDrop />
          <CourseGPA />

          {/* หรือจะใช้ <CourseApp /> ที่รวมไว้เองก็ได้ */}
          {/* <CourseApp /> */}
        </div>
      </section>
    </div>
  )
}
