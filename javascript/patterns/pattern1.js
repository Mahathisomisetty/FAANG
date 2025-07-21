let n=5
let p=""
for(let i=1;i<=n;i++){
    for(let j=i;j<=i;j++){
        p+=String.fromCharCode(70-i)+" "
        console.log(p)
    }
}
