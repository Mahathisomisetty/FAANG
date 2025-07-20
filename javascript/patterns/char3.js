//        A
//      A B
//    A B C
//  A B C D
//A B C D E
let n=5
for(let i=1;i<=n;i++){
    let s=""
    for(let j=1; j<=n-i;j++){
        s+="  "
    }
        for(let k=1;k<=i;k++){
            s+=String.fromCharCode(64+i)+" "
        }
        console.log(s)
    

}