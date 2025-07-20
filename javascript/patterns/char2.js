let n=5
let p=""
for(let i=1;i<=n;i++){
    for(let j=i;j<=i;j++){
        p+=String.fromCharCode(65+j-1)+" "
        console.log(p)
    }
}
