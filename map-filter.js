const numbers = [3, 5, 7, 9, 11, 13, 15]
// const output = [];

// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i];
// //     const result = element * element
// //     output.push(result)
// // }


// map ___________

// numbers.map(function square(element, index, array) {
//     console.log(element, index, array);
// })


// const result = numbers.map(function(element) {
//     return element * element
// })

// arrow function diye map
// const square = element => element * element
// const square = x => x * x

// const result = numbers.map(x => x * x)
// console.log(result)

// filter  ===>> condition felaile ata use kora hoy
const bigger = numbers.filter(x => x > 5)
console.log(bigger);

// find ===>> onekta filter er motoi but okhane 5 er cheye boro sob number dileo find a shudhu ekta number dibe
const isThere = numbers.find(x => x > 5)
console.log(isThere);


