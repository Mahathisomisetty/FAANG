//program to find sum of elements in a number
//3546=3+5+4+6=18
// let number=3546;//initialization
// let sum =0;
// while(number>0){//condition
//     let remiander=number%10;
//     sum+=remiander;
//     number/=10;//increment
//     number=Math.floor(number)
// }
// console.log(sum)

let number=3546;
let evensum=0
let oddsum=0
while( number>0){
    let remainder = number%10
    if(remainder%2==0){
        evensum+=remainder;
    }
    else{
        oddsum+=remainder;
    }
    number/=10;
    number=Math.floor(number)
}
console.log(evensum);
console.log(oddsum);