// Gian luoc hoa cau truc Object/Array


// const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

// const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
// const { age, name } = person;
// console.log(name); //Eric
// console.log(age); //26

const city = ['ha noi', 'da nang', 'sai gon', 'ca mau'];

// old way
// const hanoi = city [0];
// const danang = city [1];
// const hcm = city [2];


//With destructuring:
const [ x, y, ,z] = city;

// console.log(z, y, z);

//complete this block code to print 'bugs'
const dev = { salary: 2000, tool : 'laptop', like: 'bugs' };
const { like: quy} = dev;

console.log('>>> check quy: ', quy) //bugs
