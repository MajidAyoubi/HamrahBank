// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];

// const juliaCopy = juliaData.slice(1, -2);

// const checkDogs = function (array) {
//   array.forEach(function (age, i) {
//     const isAdult = age >= 3 ? 'a Adult 🐕‍🦺' : 'still a Puppy 🐶';
//     console.log(`Dog number ${i + 1} is ${age} year old and is ${isAdult}`);
//   });
// };
// checkDogs(juliaCopy);
// checkDogs(kateData);

// const euroToUsd = 1.1;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(mov => Math.trunc(mov * euroToUsd));
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(Math.trunc(mov * euroToUsd));
// }
// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'Deposited' : 'Withdrew'} $${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);

// const createUsername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUsername(accounts);
// console.log(accounts);

// const deposits = [];
// for (const mov of movements) {
//   if (mov > 0) deposits.push(mov);
// }
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const withdrawal = [];
// for (const mov of movements) {
//   if (mov < 0) withdrawal.push(mov);
// }
// console.log(withdrawal);

// // const balance = movements.reduce((acc, cur, i) => {
// //   console.log(`iteration ${i} :${acc}`);
// //   return acc + cur;
// // }, 0);
// // console.log(balance);

// const balance = movements.reduce((acc, cur, i) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = Number(
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
      .toFixed(2)
  );
  return humanAge;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAge.filter(age => age >= 18);
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   console.log(humanAge);
//   console.log(adults);
//   console.log(average);
// };

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log('--------TEST 1 --------');
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);
// console.log('--------TEST 2 --------');
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg2);

// const euroToUsd = 1.1;
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const totalDepositsUSD = movements1
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => Math.trunc(acc + mov), 0);
// console.log(totalDepositsUSD);
