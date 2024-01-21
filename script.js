// Sample data for initial display
const initialExpenses = [
    // { name: 'Groceries', amount: 50, category: 'Food' },
    // { name: 'Internet Bill', amount: 30, category: 'Utilities' },
    // { name: 'Internet Bill', amount: 30, category: 'Utilities' },
    // { name: 'Internet Bill', amount: 30, category: 'Utilities' },
];

// Function to add an expense
function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (expenseName && !isNaN(amount) && category) {
        // Create a new expense object
        const newExpense = { name: expenseName.toUpperCase(), amount, category };

        // Add the new expense to the expenses list
        expenses.push(newExpense);

        // Display the updated list of expenses
        displayExpenses();

        // Clear the input fields
        document.getElementById('expenseName').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = '';
    } else {
        alert('Please make sure all fields are filled');
    }
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}

// Function to display the list of expenses
function displayExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseElement = document.createElement('div');
        expenseElement.classList.add('expense');

        const infoElement = document.createElement('div');
        infoElement.classList.add('info');
        infoElement.innerHTML = `<strong>${expense.name}</strong> - ₦${expense.amount} [${expense.category}]`;

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-btn');
        deleteBtnElement.innerText = 'Delete';
        deleteBtnElement.onclick = () => deleteExpense(index);

        expenseElement.appendChild(infoElement);
        expenseElement.appendChild(deleteBtnElement);

        expensesList.appendChild(expenseElement);
    });
}

// Initialize with the sample data
const expenses = [...initialExpenses];

// Display the initial list of expenses
displayExpenses();
