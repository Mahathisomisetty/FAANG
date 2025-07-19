let num=1432
let output=0
while(num>0){
let remainder=num%10
output=output*10+remainder
num=Math.floor(num/10)
}
console.log(output)