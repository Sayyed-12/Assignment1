const students = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 78, subject: "Math" },
  { name: "Diana", grade: 96, subject: "English" },
  { name: "Eve", grade: 88, subject: "Science" }
];

/*
 student => student.name

 is shorthand for :

 function(student) {
  return student.name;
 }

 map() like a machine that:

 Takes each item from an array
 Does something to that item
 Puts the result in a new array

 */


// a) Create a new array containing only the student names

const studentNames = students.map((student) => student.name);
console.log("Student Names:", studentNames);


//b) Create a new array with grade percentages converted to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)

 const getLetterGrade=(grade)=>{
    if(grade>=90) return 'A';
    if(grade>=80) return 'B';
    if(grade>=70) return 'C';
    if(grade>=60) return 'D';
    return 'F';
 }


 const studentsWithLetterGrades=students.map((student)=>{
    return{
        name:student.name,
        grade:student.grade,
        subject:student.subject,
        letterGrade:getLetterGrade(student.grade)
    };
 });

 console.log("students with letter grades:",studentsWithLetterGrades);



//c) Add a "status" property to each student object ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)

 const getStatus=(grade)=>{
    if(grade>=90) return "Excellent";
    if(grade>=80) return "Good";
    if(grade>=70) return "Average";
    return "Need Improvement";
 }

 const studentsWithStatus=students.map((student)=>{
    return{
        name:student.name,
        grade:student.grade,
        subject:student.subject,
        status:getStatus(student.grade)
    };
 });

 console.log("students with status: ",studentsWithStatus);


