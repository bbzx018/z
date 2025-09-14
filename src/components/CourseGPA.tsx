import React from 'react'
import { useCourseStore } from '../store/CourseStore'

export default function CourseGPA() {
  const courses = useCourseStore((s) => s.courses)

  let totalCredits = 0
  let totalPoints = 0

  for (const c of courses) {
    // store calcGPA มีแล้ว แต่ถ้าอยากคำนวณเองตรงนี้ก็ได้
    totalCredits += c.credit
    totalPoints += c.credit * (c.grade ? gradeToPoint(c.grade) ?? 0 : 0)
  }

  const gpa =
    totalCredits === 0 ? 0 : +(totalPoints / totalCredits).toFixed(2)

  return (
    <div>
      <strong>GPA รวม:</strong> {gpa}{' '}
      <span className="muted">({totalCredits} หน่วยกิต)</span>
    </div>
  )
}

// ฟังก์ชันนี้ซ้ำกับใน store ได้ แต่ถ้าอยากแยกไว้ก็โอเค
const gradeToPoint = (grade: string) => {
  const map: Record<string, number> = {
    A: 4,
    'B+': 3.5,
    B: 3,
    'C+': 2.5,
    C: 2,
    'D+': 1.5,
    D: 1,
    F: 0,
  }
  return map[grade] ?? null
}
