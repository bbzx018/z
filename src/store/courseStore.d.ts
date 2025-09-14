import type { StoreApi, UseBoundStore } from 'zustand'

export type Course = {
  id: number
  code: string
  nameTH: string
  nameEN: string
  credits: number
  instructor: string
  grade: string
}

export type CourseState = {
  courses: Course[]
  dropped: Course[]
  addCourse: (course: Partial<Omit<Course, 'id'>>) => void
  dropCourse: (id: number) => void
  restoreCourse: (id: number) => void
  gpa: () => { gpa: number; credits: number }
}

export const useCourseStore: UseBoundStore<StoreApi<CourseState>>

