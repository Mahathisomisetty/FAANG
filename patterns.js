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
for(let i=1;i<5;i++){
    for(let j=0;j<5;j++){
        process.stdout.write(`${" "}${i*j}`)
    }
    console.log()
}

