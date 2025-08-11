//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         process.stdout.write(" *")
//     }
//     console.log()
// }

// 0 0 0 0 0
// 1 1 1 1 1
// 2 2 2 2 2 
// 3 3 3 3 3
// 4 4 4 4 4
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         process.stdout.write(`${" "}${i}`)
//     }
//     console.log()
// }
//  0 1 2 3 4
//  0 1 2 3 4
//  0 1 2 3 4
//  0 1 2 3 4
//  0 1 2 3 4
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         process.stdout.write(`${" "}${j}`)
//     }
//     console.log()
// }
// for(let i=1;i<5;i++){
//     for(let j=0;j<5;j++){
//         process.stdout.write(`${" "}${i*j}`)
//     }
//     console.log()
// }
// console.log("* ".repeat(5));
for(let i=1;i<=5;i++){
    console.log("* ".repeat(i));
}
console.log("-".repeat(30));  
for(let j=5;j>=1;j--){
    console.log("*".repeat(j));
}
for (let i = 1; i <= 5; i++) {
    console.log("  ".repeat(5 - i) + "* ".repeat(i));
}
for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "* ".repeat(i));
}
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}
