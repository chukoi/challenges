function gradingStudents(grades: number[]): number[] {
  // initialise final grades
  const finalGrades = [];
  // loop through grades
  for (let grade of grades) {
    if (grade < 38) {
      // if grade < 38 don't do anything
      finalGrades.push(grade);
    } else {
      // get modulo remainder
      let r = grade % 5;
      // if remainder >= 3 then add 5 - modulo
      if (r >= 3) {
        grade = grade + 5 - r;
      }
      // add final grade
      finalGrades.push(grade);
    }
  }
  return finalGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
