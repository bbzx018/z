import React, { useEffect, useState } from 'react'
import { useCourseStore } from '../store/courseStore'

const gradeToPoint = (grade: unknown) => {
  if (!grade) return null
  const g = String(grade).toUpperCase().trim()
  const map: Record<string, number> = {
    A: 4.0,
    'B+': 3.5,
    B: 3.0,
    'C+': 2.5,
    C: 2.0,
    'D+': 1.5,
    D: 1.0,
    F: 0,
  }
  return map[g] ?? null
}

export default function CourseGPA() {
  const [courses, setCourses] = useState(() => useCourseStore.getState().courses)

  useEffect(() => {
    const unsub = useCourseStore.subscribe(
      (s) => s.courses,
      (c) => setCourses(c),
      { equalityFn: Object.is }
    )
    return unsub
  }, [])

  let totalCredits = 0
  let totalPoints = 0
  for (const c of courses) {
    const p = gradeToPoint(c.grade)
    if (p === null) continue
    totalCredits += c.credits
    totalPoints += p * c.credits
  }
  const gpa = totalCredits === 0 ? 0 : +(totalPoints / totalCredits).toFixed(2)

  return (
    <div>
      <strong>GPA รวม:</strong> {gpa} <span className="muted">({totalCredits} หน่วยกิต)</span>
    </div>
  )
}
