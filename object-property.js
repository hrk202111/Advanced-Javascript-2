const students = [
    {id: 21, name: 'Omor sunny'},
    {id: 31, name: 'Maaanaaaaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'}
]

const names = students.map(s => s.name)
const ids = students.map(s => s.id)
const bigIds = students.filter(s => s.id > 40)   // 40 er upor sob id asbe
const bigOneIds = students.find(s => s.id > 40)  // 40 er upr just ekta id asbe
console.log(bigOneIds);











// for loop 
// const nameHolder = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name
//     nameHolder.push(name)
// }
// console.log(nameHolder);