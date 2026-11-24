let students = [
    {
        studentId: 101,
        name: "Anu",
        age: 20,
        department: "CSE",
        english: 95,
        mathematics: 92,
        science: 88
    },
    {
        studentId: 102,
        name: "Rahul",
        age: 21,
        department: "ECE",
        english: 75,
        mathematics: 82,
        science: 78
    },
    {
        studentId: 103,
        name: "Meera",
        age: 20,
        department: "CSE",
        english: 65,
        mathematics: 55,
        science: 72
    },
    {
        studentId: 104,
        name: "Arun",
        age: 22,
        department: "ECE",
        english: 35,
        mathematics: 45,
        science: 50
    },
    {
        studentId: 105,
        name: "Neha",
        age: 21,
        department: "IT",
        english: 90,
        mathematics: 96,
        science: 94
    }
];

// Demonstrating JavaScript data types

let studentName = "Anu";
let studentAge = 20;
let isPassed = true;
let studentAddress;
let optionalDetail = null;


// 2. Display Student Details

function displayStudentDetails(student) {
    console.log("Student ID:", student.studentId);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("English:", student.english);
    console.log("Mathematics:", student.mathematics);
    console.log("Science:", student.science);
}


// 3. Calculate Academic Performance

function calculateTotal(student) {
    return student.english + student.mathematics + student.science;
}

function calculateAverage(student) {
    return calculateTotal(student) / 3;
}


// 4. Grade Calculation

function calculateGrade(average) {
    if (average >= 90)
        return "A+";
    else if (average >= 80)
        return "A";
    else if (average >= 70)
        return "B";
    else if (average >= 60)
        return "C";
    else if (average >= 50)
        return "D";
    else
        return "F";
}


// 5. Pass or Fail Evaluation

function checkResult(student) {
    if (student.english >= 40 &&
        student.mathematics >= 40 &&
        student.science >= 40) {
        return true;
    }
    else {
        return false;
    }
}


// 6. Identify Top Performing Student

function findTopper() {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (calculateTotal(students[i]) > calculateTotal(topper)) {
            topper = students[i];
        }
    }

    console.log("\nTopper:", topper.name);
    console.log("Total Marks:", calculateTotal(topper));
}


// 7. Identify Students Who Need Improvement

function displayFailedStudents() {
    let found = false;

    console.log("\nFailed Students:");

    for (let student of students) {
        if (!checkResult(student)) {
            console.log(student.name);
            found = true;
        }
    }

    if (!found) {
        console.log("All students have passed.");
    }
}


// 8. Department-Wise Student Listing

function filterByDepartment(department) {
    let found = false;

    console.log("\nDepartment:", department);

    for (let student of students) {
        if (student.department === department) {
            console.log("Name:", student.name);
            console.log("Student ID:", student.studentId);
            found = true;
        }
    }

    if (!found) {
        console.log("No students found in this department.");
    }
}


// 9. Generate Consolidated Performance Report

function generateReport() {
    console.log("\n===== STUDENT PERFORMANCE REPORT =====");

    for (let student of students) {
        let total = calculateTotal(student);
        let average = calculateAverage(student);
        let grade = calculateGrade(average);
        let result = checkResult(student);

        console.log("\nStudent ID:", student.studentId);
        console.log("Name:", student.name);
        console.log("Total Marks:", total);
        console.log("Average Marks:", average.toFixed(2));
        console.log("Grade:", grade);
        console.log("Result:", result ? "PASS" : "FAIL");
    }
}


// Display all student details

console.log("===== STUDENT DETAILS =====");

for (let student of students) {
    displayStudentDetails(student);
    console.log("Total Marks:", calculateTotal(student));
    console.log("Average Marks:", calculateAverage(student).toFixed(2));
    console.log("Grade:", calculateGrade(calculateAverage(student)));
    console.log("Result:", checkResult(student) ? "PASS" : "FAIL");
    console.log("----------------------------");
}


// Function Calls

findTopper();

displayFailedStudents();

filterByDepartment("CSE");

generateReport();