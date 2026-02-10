//*****   Map()  — “change every item” **********

// const nums = [1,2,3,4,5]

// const doubled = nums.map(num => {
//     return num * 2;
// })

// console.log(doubled)


// const users = [
//     {name: "shiva", age: 24},
//     {name: "nobi", age: 16}
// ];

// const names = users.map(user => user.name)
// console.log(names)
    
    
//*****    Filter() — “keep only what matches” **********
// const nums = [1,2,3,4,5,6];

// const evens = nums.filter(num => num % 2 === 0);
// const odds = nums.filter(num => num % 2 !== 0)

// console.log(evens)
// console.log(odds)

// const users = [
//     {name: "shiva", active: true},
//     {name: "nobi", active: false}
// ];

// const userActive = users.filter(user => user.active === true);
// const userNotActive = users.filter(user => user.active === false);

// console.log(userActive)
// console.log(userNotActive)


//*****  Reduce()  — “turn many into one” **********

// array.reduce((accumulator, current) => {
//   return updatedAccumulator;
// }, initialValue);

// const nums = [1,2,3,4]

// const sum = nums.reduce((total, sum) => {
//     return total + sum
// })

// console.log(sum)

// const fruits = ['apple', 'banana', 'apple', 'banana', 'apple'];

// const count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1
//     return acc;
// }, {})

// console.log(count)