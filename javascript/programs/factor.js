const { printCustomRoutes } = require("next/dist/build/utils");

//given number is factor or not
let factor=0;
let p=3;
let primesum=0
for( p=3;p<=9;p++)
{
for(let i=1;i<=p;i++)
{
    if(p%i==0){
        factor++;    
    }
}
if(factor>2){
        console.log("non prime")
        console.log(p);     
    }
    else{
        console.log("prime")
        console.log(p); 
        primesum=primesum+p
    }
    factor=0
}
console.log(primesum)