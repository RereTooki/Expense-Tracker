// Sample data for initial display
const initialExpenses = [
    // { name: 'Groceries', amount: 50, category: 'Food' },
    // { name: 'Internet Bill', amount: 5000, category: 'Utilities' },
];

// Move the declaration of expenses to the top-level scope
let expenses;

// Function to add an expense
function addExpense() {
    const expenseName = (document.getElementById('expenseName').value).toUpperCase();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = (document.getElementById('category').value).toUpperCase();
    // document.getElementsByClassName('hidden').style="display: block";

    if (expenseName && !isNaN(amount) && category) {
        // Create a new expense object
        const newExpense = { name: expenseName, amount, category };

        // Add the new expense to the expenses list
        expenses.push(newExpense);

        // Display the updated list of expenses
        displayExpenses();

        // Update the pie chart
        displayPieChart();

        // Clear the input fields
        document.getElementById('expenseName').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = '';
    } else {
        alert('Please fill in all the fields with valid values.');
    }
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
    displayPieChart(); // Update the pie chart after deletion
}

// Function to display the list of expenses
function displayExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    // Check if expenses is defined before attempting to forEach
    if (expenses) {
        expenses.forEach((expense, index) => {
            const expenseElement = document.createElement('div');
            expenseElement.classList.add('expense');

            const infoElement = document.createElement('div');
            infoElement.classList.add('info');
            infoElement.innerHTML = `<strong>${expense.name}</strong> - ₦${expense.amount} (${expense.category})`;

            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('delete-btn');
            deleteBtnElement.innerText = 'Delete';
            deleteBtnElement.onclick = () => deleteExpense(index);

            expenseElement.appendChild(infoElement);
            expenseElement.appendChild(deleteBtnElement);

            expensesList.appendChild(expenseElement);
        });
    }
}

// Function to display the pie chart using D3.js
function displayPieChart() {
    const svg = d3.select("#expenseChart");
    const width = 300;
    const height = 150;
    const radius = Math.min(width, height) / 2;

    // Remove existing chart elements
    svg.selectAll("*").remove();

    // Extract amounts and categories for D3.js pie chart
    const expenseCategories = Array.from(new Set(expenses.map(expense => expense.category)));
    const categoryData = expenseCategories.map(category => {
        const categoryExpenses = expenses.filter(expense => expense.category === category);
        return categoryExpenses.reduce((total, expense) => total + expense.amount, 0);
    });

    // Create a new pie chart
    const pie = d3.pie()
        .value(d => d)
        .sort(null);

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    const color = d3.scaleOrdinal()
        .range([
            '#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f',
            '#e8c3b9', '#c45850', '#4CAF50', '#FF5722', '#2196F3'
        ]);

    const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const path = g.selectAll("path")
        .data(pie(categoryData))
        .enter().append("path")
        .attr("fill", (d, i) => color(i))
        .attr("d", arc);

    // Legend
    const legend = svg.selectAll(".legend")
        .data(categoryData)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * 20})`);

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", (d, i) => color(i));

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text((d, i) => expenseCategories[i]);
}

// Ensure the page is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize with the sample data
    expenses = [...initialExpenses];

    // Display the initial list of expenses
    displayExpenses();

    // Delay the pie chart initialization to make sure the canvas element is available
    setTimeout(displayPieChart, 0);
});



function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() !== '' && password.trim() !== '') {
        // Redirect to the main expense tracker page or perform any other action
        window.location.href = "expenseTracker.html";
    } else {
        alert('Please enter both username and password.');
    }
}

function goToSignUp() {
    window.location.href = "signUp.html";
}