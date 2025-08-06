// let persons=[{name:"a", age:20},{name:"b",age:25},{name:"c",age:17}];
// let names=persons.map(x=>x.age)
// console.log(names);

let persons=[{name:"a", age:20},{name:"b",age:25},{name:"c",age:17}];
let eligible=persons.filter(x=>x.age>=18)
let names=persons.map(x=>x.name)
console.log(names);
// console.log(persons);