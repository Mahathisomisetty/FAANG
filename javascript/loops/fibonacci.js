let a=0
let b=1
let n=9
console.log(a)
console.log(b)
for(i=3;i<=n;i++){
    let fib=a+b
    a=b
    b=fib
    console.log(fib)
}