const balance = document.getElementById('balance');
const money_plus = document.getElementById('money_plus');
const money_minus = document.getElementById('money_minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Flower', amount: 20 },
  { id: 3, text: 'Flower', amount: -250 },
  { id: 4, text: 'Flower', amount: 1220 },
  { id: 5, text: 'Flower', amount: -20 },
]

let transactions = dummyTransactions;

// Add transaction to DOM list 

function addTransactionDOM(transaction) {
  //Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  //Add class based on value

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button> 
  `;

  list.appendChild(item)
}

//init app 

function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM)
}

init()