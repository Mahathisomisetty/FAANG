let globalVar="global variable";
function show(){
    let local="local variable"
    console.log(globalVar);
    console.log(local)
}
show();
console.log(globalVar)