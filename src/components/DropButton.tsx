import React from 'react'
import { useCourseStore } from '../store/courseStore'

export default function DropButton({ id }: { id: number }) {
  const dropCourse = useCourseStore((s) => s.dropCourse)
  return (
    <button onClick={() => dropCourse(id)} style={{ color: '#b00020' }}>
      ถอนรายวิชา
    </button>
  )
}
