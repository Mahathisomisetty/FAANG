let fnum=1231
let num=121
let output=0
while(num>0){
let remainder=num%10
output=output*10+remainder
num=Math.floor(num/10)
}
// console.log(output)
// console.log(num)
if(fnum == output){
    console.log("palindrome")
}
else{
    console.log("not")
}