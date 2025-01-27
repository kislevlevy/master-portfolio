'use strict';

//////////////////////////////////////////////
// Query Selectors:
// Buttons:
const addBtn = document.querySelector('.add__btn');
const deleteBtn = document.querySelectorAll('.item__delete--btn');

// Fields:
const dicriptionField = document.querySelector('.add__description');
const amountField = document.querySelector('.add__value');

// List:
const typeList = document.querySelector('.add__type');
const incomeList = document.querySelector('.income__list');
const expensesList = document.querySelector('.expenses__list');

// Tags:
const incomeSumValue = document.querySelector('.budget__income--value');
const incomeSumPercentage = document.querySelector('.budget__income--percentage');
const expensesSumValue = document.querySelector('.budget__expenses--value');
const expensesSumPercentage = document.querySelector(
  '.budget__expenses--percentage'
);
const currentMonth = document.querySelector('.budget__title--month');
const bigSum = document.querySelector('.budget__value');

//////////////////////////////////////////////
// Declarations:
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const movements = [
  { type: 'income', discription: 'Salery', value: 10546.94 },
  { type: 'expense', discription: 'Super market', value: 1658.5 },
  { type: 'expense', discription: 'Game night', value: 265.3 },
  { type: 'expense', discription: 'New fridge', value: 4950 },
  { type: 'expense', discription: 'Electrician', value: 165 },
  { type: 'expense', discription: 'Savings account', value: 2500 },
  { type: 'income', discription: 'Private work', value: 2500 },
];
const currency = 'ILS';
const now = new Date();
const month = months[new Date().getMonth()];
let sum, incomeSum, expensesSum;

//////////////////////////////////////////////
// Functions:
const sumCalc = function () {
  sum = incomeSum = expensesSum = 0;

  movements.forEach((ele) =>
    ele.type === 'income'
      ? (incomeSum += Number(ele.value))
      : (expensesSum += Number(ele.value))
  );
  sum = incomeSum - expensesSum;
};

const percentageCalc = function (value) {
  const result = Math.round((value / incomeSum) * 100);
  return result <= 100 ? result + '%' : '-';
};

const insertMovement = function () {
  // Clean Up:
  const Clean = function () {
    dicriptionField.value = amountField.value = '';
    dicriptionField.blur();
    amountField.blur();
  };

  // Guard:
  if (
    !dicriptionField.value ||
    !amountField.value ||
    amountField.value >= Number.MAX_SAFE_INTEGER
  )
    return Clean();

  // Declarations:
  const type = typeList.value;
  const discription =
    dicriptionField.value[0].toUpperCase() +
    dicriptionField.value.slice(1).toLowerCase();
  const value = Number(amountField.value);

  // Logic:
  if (value > 0) {
    if (discription.length <= 20) {
      movements.push({ type, discription, value });

      // Update UI:
      updateUI();
    } else alert('Discription has more than 20 characters! Try again.');
  } else alert('Amount has to be higher than 0!');

  Clean();
};

const currencyFormat = (value) =>
  new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: currency,
  }).format(value);

const displayMovements = function () {
  incomeList.innerHTML = expensesList.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov.type === 'income';

    const html = `
    <div class="item clearfix">
    <div class="item__description">${mov.discription}</div>
    <div class="right clearfix">
      <div class="item__value">${type ? '+' : '-'}${currencyFormat(
      mov.value
    )}</div>${
      type ? '' : `<div class="item__percentage">${percentageCalc(mov.value)}</div>`
    }
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline" id="movement-${i}"></i>
        </button>
      </div>
    </div>
  </div>
    `;
    if (type) {
      incomeList.insertAdjacentHTML('afterbegin', html);
    } else {
      expensesList.insertAdjacentHTML('afterbegin', html);
    }
  });
};

const updateUI = function () {
  sumCalc();
  displayMovements();
  currentMonth.textContent = month;

  bigSum.textContent = currencyFormat(sum);
  incomeSumValue.textContent = currencyFormat(incomeSum);
  expensesSumValue.textContent = currencyFormat(expensesSum);
  expensesSumPercentage.textContent = percentageCalc(expensesSum);
};
updateUI();

//////////////////////////////////////////////
// Event Listener:
addBtn.addEventListener('click', insertMovement);
amountField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') insertMovement();
});
dicriptionField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') insertMovement();
});

document.querySelector('.container').addEventListener('click', function (e) {
  if (e.target.classList.contains('ion-ios-close-outline')) {
    const id = e.target.id[e.target.id.length - 1];
    movements.splice(id, 1);
    updateUI();
  }
});
