export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      
      // If a grade is found, use it; otherwise, set to 'N/A'
      student.grade = gradeObject ? gradeObject.grade : 'N/A';
      return student;
    });
}
