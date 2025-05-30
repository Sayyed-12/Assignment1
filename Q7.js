const employees = [
  { name: "John", department: "IT", salary: 75000, projects: ["A", "B"] },
  { name: "Sarah", department: "Marketing", salary: 65000, projects: ["C"] },
  { name: "Mike", department: "IT", salary: 80000, projects: ["A", "D", "E"] },
  { name: "Lisa", department: "HR", salary: 60000, projects: ["B", "C"] },
  { name: "Tom", department: "Marketing", salary: 70000, projects: ["D"] }
];

// a) Group employees by department
const groupedByDepartment = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = [];
  }
  acc[emp.department].push(emp);
  return acc;
}, {});
console.log("a) Grouped by Department:", groupedByDepartment);


// b) Find employees working on more than 2 projects
const moreThanTwoProjects = employees.filter(emp => emp.projects.length > 2);
console.log("b) More than 2 Projects:", moreThanTwoProjects);

// c) Calculate the average salary by department
const averageSalaryByDept = Object.fromEntries(
  Object.entries(groupedByDepartment).map(([dept, emps]) => {
    const totalSalary = emps.reduce((sum, emp) => sum + emp.salary, 0);
    return [dept, totalSalary / emps.length];
  })
);
console.log("c) Average Salary by Department:", averageSalaryByDept);


// d) Get a list of all unique projects across all employees (Simplest using nested loops + includes)
const uniqueProjectsManualCheck = function() {
    const uniqueProjectsArray = []; // An empty array to store our unique projects

    // Loop through each employee in the 'employees' array
    for (let i = 0; i < employees.length; i++) {
        const currentEmployee = employees[i]; // Get the current employee object

        // Now, loop through the 'projects' array for the current employee
        for (let j = 0; j < currentEmployee.projects.length; j++) {
            const project = currentEmployee.projects[j]; // Get the current project name

            // Check if this project already exists in our uniqueProjectsArray
            // .includes() returns true if the element is found, false otherwise
            if (!uniqueProjectsArray.includes(project)) {
                // If the project is NOT already in our array, add it
                uniqueProjectsArray.push(project);
            }
        }
    }

    return uniqueProjectsArray; // Return the array of unique projects
};

console.log("d) Unique Projects (Simplest Manual Check):", uniqueProjectsManualCheck());

/* d) Get a list of all unique projects across all employees
const allProjects = [
  ...new Set(employees.flatMap(emp => emp.projects))
];
console.log("d) Unique Projects:", allProjects);
*/


// e) Find the highest-paid employee in each department (Simpler using loops)
const highestPaidByDeptSimple = function() {
    const result = {}; // Initialize an empty object to store our results

    // Iterate over each department in the 'groupedByDepartment' object
    // Object.keys(groupedByDepartment) gives an array of department names (e.g., ["Engineering", "Marketing"])
    for (let i = 0; i < Object.keys(groupedByDepartment).length; i++) {
        const dept = Object.keys(groupedByDepartment)[i]; // Get the current department name
        const employeesInDept = groupedByDepartment[dept]; // Get the array of employees for this department

        let highestPaidInCurrentDept = null; // Variable to track the highest paid employee in this department

        // Handle empty departments (though unlikely with our grouping)
        if (employeesInDept.length === 0) {
            result[dept] = null; // Or handle as needed, e.g., skip
            continue; // Move to the next department
        }

        // Initialize highestPaidInCurrentDept with the first employee to start comparison
        highestPaidInCurrentDept = employeesInDept[0];

        // Iterate over employees within the current department to find the highest paid
        // Start from the second employee as the first one is already our initial highest
        for (let j = 1; j < employeesInDept.length; j++) {
            const emp = employeesInDept[j];
            if (emp.salary > highestPaidInCurrentDept.salary) {
                highestPaidInCurrentDept = emp; // Update if current employee has higher salary
            }
        }
        result[dept] = highestPaidInCurrentDept; // Store the highest paid for this department
    }
    return result;
};

console.log("e) Highest Paid by Department (Simpler):", highestPaidByDeptSimple());

/* e) Find the highest-paid employee in each department
const highestPaidByDept = Object.fromEntries(
  Object.entries(groupedByDepartment).map(([dept, emps]) => {
    const highestPaid = emps.reduce((max, emp) => emp.salary > max.salary ? emp : max);
    return [dept, highestPaid];
  })
);
console.log("e) Highest Paid by Department:", highestPaidByDept);

 */
