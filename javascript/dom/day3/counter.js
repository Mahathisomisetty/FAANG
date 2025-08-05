let decrement=document.getElementById("decrement");
let quantity=document.getElementById("quantity");
let increment=document.getElementById("increment");
increment.addEventListener("click",function(){
    let x=quantity.innerText;
    quantity.innerText=++x;
})
decrement.addEventListener("click",function(){
    let x=quantity.innerText;
    if(x>0){
    quantity.innerText=--x;
    }
    else{
        alert("quantity can't be negative");
    }
})