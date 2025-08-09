let n=25
let sum=0
if(n>1){
    let square=Math.pow(n,2);
    console.log(square);
    if(square>9){
        let r=n%10;
        sum+=r;
        n=n/10;
        console.log(sum);
    }else{
        console.log(square);
    } 
}
else{
    console.log(n);
}
