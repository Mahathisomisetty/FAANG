//console.log(String.fromCharCode(65));
//console.log(string.fromCharCode())
let n=5
for(let i=1 ;i<=n;i++){
    let p=" "
    for(let j=0;j<n;j++ ){
    p+=String.fromCharCode(65+i-1)+" "//if i use +j in this line constant col i.e.,abcde 
    }
    console.log(p)
    
   
}

