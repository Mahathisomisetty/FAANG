// let [a,b,...c]=[1,2,3,4,5,6,7,8]
// console.log(a);//takes 1 in arraya
// console.log(b);//2 in array b
// console.log(c);//rest in array 3

function sum(...numbers){
    console.log(numbers.reduce((a,b)=>a+b,0))
}
sum(1,2,3,4,5)