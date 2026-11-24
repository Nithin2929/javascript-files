var personName = "Nithin";
let monthlyIncome = 40000;
const currentMonth = "November 2026";

let isMonthlyBudget = true;


// B. ARRAYS AND OBJECTS

const expenses = [
    { category: "House Rent", amount: 12000 },
    { category: "Food", amount: 6000 },
    { category: "Transportation", amount: 2500 },
    { category: "Electricity", amount: 1500 },
    { category: "Entertainment", amount: 3000 },
    { category: "Shopping", amount: 4000 }
];


// C. FUNCTIONS

// Calculate Total Expenses
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Calculate Remaining Balance
function calculateBalance() {
    return monthlyIncome - calculateTotal();
}


// Calculate Average Expense
function calculateAverage() {
    return calculateTotal() / expenses.length;
}


// Find Highest and Lowest Expenses
function findHighestLowest() {

    let highest = expenses[0];
    let lowest = expenses[0];

    for (let expense of expenses) {

        if (expense.amount > highest.amount) {
            highest = expense;
        }

        if (expense.amount < lowest.amount) {
            lowest = expense;
        }
    }

    return { highest, lowest };
}


// Calculate Percentage of Income Spent
function calculatePercentage() {
    return (calculateTotal() / monthlyIncome) * 100;
}


// D. CALCULATIONS

let totalExpense = calculateTotal();
let balance = calculateBalance();
let average = calculateAverage();
let percentage = calculatePercentage();

let result = findHighestLowest();


// E. DOM MANIPULATION

// getElementById()
document.getElementById("heading").textContent =
    "Monthly Expense Dashboard";

// textContent
document.getElementById("person").textContent =
    "Person Name: " + personName;

document.getElementById("month").textContent =
    "Month: " + currentMonth;

document.getElementById("income").textContent =
    "₹ " + monthlyIncome.toLocaleString("en-IN");

document.getElementById("totalExpense").textContent =
    "₹ " + totalExpense.toLocaleString("en-IN");


// querySelector()
let balanceSection = document.querySelector("#balance");

balanceSection.textContent =
    "₹ " + balance.toLocaleString("en-IN");


// Change balance color
if (balance > 0) {
    balanceSection.style.color = "green";
} else {
    balanceSection.style.color = "red";
}


// innerHTML - Display Expense Categories

let expenseHTML = "";

for (let expense of expenses) {

    if (expense.category === result.highest.category) {

        expenseHTML += `
            <div class="expense-item highest">
                ${expense.category} :
                ₹ ${expense.amount.toLocaleString("en-IN")}
                (Highest Expense)
            </div>
        `;

    } else {

        expenseHTML += `
            <div class="expense-item">
                ${expense.category} :
                ₹ ${expense.amount.toLocaleString("en-IN")}
            </div>
        `;
    }
}

document.getElementById("expenseList").innerHTML =
    expenseHTML;


// getElementsByClassName()
let categories = document.getElementsByClassName("expense-item");

for (let i = 0; i < categories.length; i++) {
    categories[i].style.color = "#263b80";
}


// Display Highest and Lowest Expenses

document.getElementById("highest").innerText =
    "Highest Expense: " + result.highest.category +
    " - ₹ " + result.highest.amount.toLocaleString("en-IN");

document.getElementById("lowest").innerText =
    "Lowest Expense: " + result.lowest.category +
    " - ₹ " + result.lowest.amount.toLocaleString("en-IN");


// Display Number of Categories

document.getElementById("count").textContent =
    "Total Expense Categories: " + expenses.length;


// Display Percentage

document.getElementById("percentage").textContent =
    "Income Spent: " + percentage.toFixed(2) + "%";


// Display Average Expense

document.getElementById("average").textContent =
    "Average Expense: ₹ " + average.toLocaleString("en-IN");


// F. CONDITIONAL STATEMENTS

let financialStatus = "";

if (balance > 10000) {

    financialStatus = "Good Savings";

} else if (balance > 0 && balance <= 10000) {

    financialStatus = "Moderate Savings";

} else if (balance === 0) {

    financialStatus = "No Savings";

} else {

    financialStatus = "Overspending";
}


// Display Financial Status

document.getElementById("status").textContent =
    financialStatus;


// innerText - Retrieve displayed status

let displayedStatus =
    document.getElementById("status").innerText;

document.getElementById("status").style.fontSize = "20px";


// Change background color based on status

if (displayedStatus === "Good Savings") {
    document.getElementById("status").style.backgroundColor = "#c8e6c9";

} else if (displayedStatus === "Moderate Savings") {
    document.getElementById("status").style.backgroundColor = "#fff3cd";

} else if (displayedStatus === "No Savings") {
    document.getElementById("status").style.backgroundColor = "#e0e0e0";

} else {
    document.getElementById("status").style.backgroundColor = "#ffcdd2";
}


// Change Header Background

document.getElementById("header").style.backgroundColor =" lightblue";