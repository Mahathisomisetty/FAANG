let num=2; 
let n=3
let primes = 0
while (true){
    let flag = 0
    for(let i=2; i<=Math.floor(Math.sqrt(num));i++){
        if(num % i == 0){
            flag = 1;
            break
        }
    }
        if(flag == 0){
            primes++;
        }
        if(primes == n){
            break
    }
    num++;
}
console.log(num)
