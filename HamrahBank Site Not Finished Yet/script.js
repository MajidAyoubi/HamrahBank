'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelLogOut = document.querySelector('.logout-timer');
const labelSummary = document.querySelector('.summary');
const errorLabel = document.querySelector('.error');
const errorMessageLabel = document.querySelector('.errormessage');
const labelBalanceAll = document.querySelector('.balance');
const labelOperationTransfer = document.querySelector('.operation--transfer');
const labelOperationLoan = document.querySelector('.operation--loan');
const labelOperationClose = document.querySelector('.operation--close');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnCloseModal = document.querySelector('.close');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
       <div class="movements__type
       movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent Form from Submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    errorLabel.style.opacity = 0;
    errorMessageLabel.style.opacity = 0;

    containerMovements.classList.remove('hidden');
    labelBalance.classList.remove('hidden');
    labelSumIn.classList.remove('hidden');
    labelSumInterest.classList.remove('hidden');
    labelSumOut.classList.remove('hidden');
    labelLogOut.classList.remove('hidden');
    labelSummary.classList.remove('hidden');
    labelBalanceAll.classList.remove('hidden');
    labelOperationTransfer.classList.remove('hidden');
    labelOperationLoan.classList.remove('hidden');
    labelOperationClose.classList.remove('hidden');
    btnLogin.classList.remove('backgroundcolor');
  } else {
    // errorLabel.classList.add('hidden');
    errorLabel.style.opacity = 100;

    errorMessageLabel.style.opacity = 100;
    errorLabel.classList.add('display');
    errorMessageLabel.classList.add('display');
    containerMovements.classList.add('hidden');
    labelBalance.classList.add('hidden');
    labelSumIn.classList.add('hidden');
    labelSumInterest.classList.add('hidden');
    labelSumOut.classList.add('hidden');
    labelLogOut.classList.add('hidden');
    labelSummary.classList.add('hidden');
    labelBalanceAll.classList.add('hidden');
    labelOperationTransfer.classList.add('hidden');
    labelOperationLoan.classList.add('hidden');
    labelOperationClose.classList.add('hidden');

    btnLogin.classList.add('backgroundcolor');
  }
  containerApp.style.opacity = 100;
  // clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  // inputLoginPin.blur();

  // Display Movements
  displayMovements(currentAccount.movements);

  // Display balance
  calcDisplayBalance(currentAccount.movements);

  // Display Summary
  calcDisplaySummary(currentAccount);
});

const closeError = function () {
  errorLabel.classList.remove('display');
  errorMessageLabel.classList.remove('display');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeError();
  }
});

btnCloseModal.addEventListener('click', closeError);
errorLabel.addEventListener('click', closeError);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const copyArr = [...arr];
// console.log(copyArr);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, -1));

// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// const letters = arr.concat(arr2);

// console.log(letters.join(' - '));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`${i + 1} : You deposited $${movement}`);
//   } else {
//     console.log(`${i + 1} :You withdrew $${Math.abs(movement)}`);
//   }
// });

// console.log('---------- FOR OF ----------');

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// }

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// const uniqueCurrencies = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, set) {
//   console.log(`${value} : ${value}`);
// });

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// });
// console.log(max);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//     // break;
//   }
// }
