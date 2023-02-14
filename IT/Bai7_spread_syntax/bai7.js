// Toan tu 3 cham

const firstArray = [1,2,3];
const secondArray = [4,5,6];
const thirdArray = [...firstArray, ...secondArray];

console.log(thirdArray)

let myArr = ['a', 'b', 'c', 'd', 'e']
myArr = [...myArr, 'add']

console.log(myArr)

const test1 = {name:'quy', address: 'Hue'}
const test2 = {shool:'To Huu', phone: '0367876242', name: 'Hello'}
// console.log({...test, age: 28})
const update = {...test1, ...test2}
console.log(update)

const state = {
  name: 'test',
  age: 28,
  address: 'Hue',
}

const result = {...state, name: 'quy'}
console.log('result: ', result)