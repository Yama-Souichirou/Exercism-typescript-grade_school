type Students = Map<string, string[]>

export default class GradeSchool {
  private students: Students

  constructor() {
    this.students = new Map()
  }

  studentRoster(): Students {
    return new Map(this.students)
  }

  studentsInGrade(grade: number): string[] {
    return new Map(this.students).get(String(grade)) || []
  }

  addStudent(name: string, grade: number): void {
    const sortedGradeStudents: string[] = this.studentsInGrade(grade).concat(name).sort()
    const newStudents: Students = this.students.set(String(grade), sortedGradeStudents)
    this.students = new Map([...newStudents].sort())
  }
}

