let a=39;
let b=22;
let c=36;
let h=(a>b && a>c)?a
:(b>a && b>c)?b
:c;
console.log(h+" is greatest");
// a > b
//   ? (a > c ? console.log("a") : (c > b ? console.log("c") : console.log("b")))
//   : (b > c ? console.log("b") : console.log("c"));


// let a=39;
// let b=22;
// let c=36;
// let h=(a>b && a>c)?"A"
// :(b>a && b>c)?"B"
// :"c";
// console.log(h+" is greatest");