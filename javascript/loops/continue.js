for(let i=1;i<=100;i++){
    if(i%2==1){
        continue;//it skips the value when it reach even number
    }
    if(i>50){
        break; //it breaks the loop when i value reaches to 50
    }
    console.log(i)
}