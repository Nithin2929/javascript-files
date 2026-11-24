var studentName = "Jowin";

let mathematics = 85;
let science = 92;
let english = 98;

const maxMark = 100;

let age = 22;
let className = "B.Tech CSE";

let passed;
let remark = null;
let result;

let extraDetails;

mathematics += 5;

let total = mathematics + science + english;
let average = total / 3;
let percentage = (total / (maxMark * 3)) * 100;

let mathPass = mathematics >= 40;
let sciencePass = science >= 40;
let englishPass = english >= 40;

let averagePass = average >= 50;

passed = mathPass && sciencePass && englishPass && averagePass;

let outstanding = mathematics > 90 || science > 90  || english > 90;

let failed = !passed;

console.log("STUDENT ACADEMIC PERFORMANCE");
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Class: " + className);

console.log("Mathematics: " + mathematics);
console.log("Science: " + science);
console.log("English: " + english);

console.log("Total: " + total);
console.log("Average: " + average);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Passed: " + passed);
console.log("Failed: " + failed);

console.log("Outstanding: " + outstanding);
console.log("Remark:", remark);
console.log("Extra Details:", extraDetails);