{
  // You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const calculateAverageGrade = (student1: Student) => {
    const { grades } = student1;
    const sum = grades.reduce((accum, curr) => {
      return accum + curr;
    }, 0);
    console.log(sum / grades.length);
  };

  const averageGradeForBob = calculateAverageGrade(student1);
}
