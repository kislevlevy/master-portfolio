"use strict";

console.log(`You may try the app with:
Account_1:
Username: js
PIN: 1111

Account_2:
Username: jd
PIN: 2222`);

// Random movements genarator:
const setMovments = function () {
  const rand = Math.trunc(Math.random() * 5 + 3);
  const returnedArr = [];
  for (let i = 0; i <= rand; i++) {
    const plusOrMinus = Math.random() < 0.4 ? -1 : 1;
    returnedArr.push((Math.random() * 100_000 + 1).toFixed(2) * plusOrMinus);
  }
  return returnedArr;
};

//////////////////////////////////////////////////////////////////
// Accounts:
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Kislev Levy",
  movements: setMovments(),
  interestRate: 1,
  pin: "2070",
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-02-26T10:51:36.790Z",
    "2024-02-27T10:51:36.790Z",
    "2024-02-28T10:51:36.790Z",
  ],
  currency: "ILS",
  locale: "he-IL",
};

const account4 = {
  owner: "Sin Levy",
  movements: setMovments(),
  interestRate: 1,
  pin: "0245",
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-02-26T10:51:36.790Z",
    "2024-02-27T10:51:36.790Z",
    "2024-02-28T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "he-IL",
};

const account5 = {
  owner: "Nir Levy",
  movements: setMovments(),
  interestRate: 1,
  pin: "0346",
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2024-02-05T16:33:06.386Z",
    "2024-02-26T10:51:36.790Z",
    "2024-02-27T10:51:36.790Z",
    "2024-02-28T10:51:36.790Z",
  ],
  currency: "CAD",
  locale: "he-IL",
};

const accounts = [account1, account2, account3, account4, account5];

//////////////////////////////////////////////////////////////////
// Elements:
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//////////////////////////////////////////////////////////////////
// From Here Kislev Levy Code Start:
// (if you read this send me this emoji => '🕵️' )
//////////////////////////////////////////////////////////////////

// Display date function:
const now = new Date();
const displayDate = function (date, account) {
  // Days Passed Calculation:
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  // Logic for movements:
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(account.locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }
};

// Log out timer function:
const startLogOutTimer = function () {
  let time = 5 * 60; // in minutes
  const timerFunction = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      closeUI();
      console.log("you have been logged out due to inactivity");
    }
    time--;
  };
  timerFunction();
  const timer = setInterval(timerFunction, 1000);
  return timer;
};

// Internationalization API - Currency:
const currencyFormat = (value, account = currentAccount) =>
  new Intl.NumberFormat(account.locale, {
    style: "currency",
    currency: account.currency,
  }).format(value);

// Display Movements:
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  //Sort Logic:
  const movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  // Display Movements Logic:
  movements.forEach(function (mov, i) {
    const accountDate = account.movementsDates[i];
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate(
        new Date(accountDate),
        account
      )}</div>
      <div class="movements__value">${currencyFormat(mov)}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Display Blance:
const calcDisplayBlance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = currencyFormat(account.balance);
};

// Display Summery:
const calcDisplaySummery = function (account) {
  // Income Summery:
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = currencyFormat(income);

  // Diposit Summery:
  const outcome = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currencyFormat(Math.abs(outcome));

  // Intrest Summery:
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = currencyFormat(interest);
};

// Movements Practice:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EURtoNIS = 3.92;

// Create Username:
const createUsername = function (accounts) {
  accounts.forEach(
    (account) =>
      (account.username = account.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""))
  );
};
createUsername(accounts);

// Update UI:
const updateUI = function (account) {
  displayMovements(account);
  calcDisplayBlance(account);
  calcDisplaySummery(account);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(now);

  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
};

// Close UI - Log out oporation:
const closeUI = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = "Log in to get started";
  currentAccount = undefined;
};
//////////////////////////////////////////////////////////////////
// Event Handlers:

// Login Button Logic:
let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin == inputLoginPin.value) {
    // Welcome Message:
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;

    //UI Opacity Change:
    containerApp.style.opacity = 100;

    // Update UI:
    updateUI(currentAccount);

    // Clear Input:
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();
  } else alert("Please try again, pin/user are Incorrect");
  inputLoginPin.value = "";
});

// Transfer Money Logic:
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  // Logic:
  if (
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance &&
    reciverAccount &&
    reciverAccount !== currentAccount
  ) {
    // Mooving Money Oporation:
    reciverAccount.movements.push(transferAmount);
    currentAccount.movements.push(-transferAmount);

    // Adding date element
    reciverAccount.movementsDates.push(new Date().toISOString());
    currentAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    // Message:
    alert(
      `Transferring ${currencyFormat(transferAmount)} to ${
        reciverAccount.owner
      }`
    );
    // Clear Input:
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferAmount.blur();
    inputTransferTo.blur();
  } else alert("Please check again, user does not exist or funds are not sufficient");
  inputTransferAmount.value = "";
});

// Loan Logic:
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  // Clear Input:
  inputLoanAmount.value = "";
  inputLoanAmount.blur();

  // Message:
  alert(`Checking if loan of ${currencyFormat(amount)} is approved`);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      // Mooving Money Oporation:
      currentAccount.movements.push(amount);

      // Adding date element
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);

      // Message:
      alert(`Loan of ${currencyFormat(amount)} approved`);
    }, 1000 * 5);
  } else alert(`Loan of ${currencyFormat(amount)} was not approved`);
});

// Close Account Logic:
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username == inputCloseUsername.value &&
    currentAccount.pin == inputClosePin.value
  ) {
    // Delete Account
    const index = accounts.findIndex(
      (acc) => acc.username == currentAccount.username
    );
    accounts.splice(index, 1);

    // Log Out Oporation:
    closeUI();

    // Message:
    alert("Your account have been deleted");

    // Clear Input:
    inputClosePin.value = inputCloseUsername.value = "";
    inputClosePin.blur();
    inputCloseUsername.blur();
  } else alert("Please try again, pin/user are Incorrect");
  inputClosePin.value = "";
});

// Sort Logic:
let sortState = true;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, sortState);
  sortState = !sortState;
});

// Fake Login Logic:
const fakeLogin = function () {
  currentAccount = account3;
  updateUI(currentAccount);
  containerApp.style.opacity = 100;
  labelWelcome.textContent = `Welcome back ${
    currentAccount.owner.split(" ")[0]
  }`;
};
// fakeLogin();
