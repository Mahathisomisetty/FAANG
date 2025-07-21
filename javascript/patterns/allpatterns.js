// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let n=5
// let p=""
// for(let i=1;i<=n;i++){
//     p+="* "
// }
// for(let i=1;i<=n;i++){
//     console.log(p)
// }

// let n=5
// for(let i=1;i<=n;i++){
//     let p=""
//     for(let i=1;i<=n;i++){
//         p+="* "
//     }
//     console.log(p)
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// let p=""
// for(let i=1;i<=5;i++){
//     p+="* "
//     console.log(p)
// }

// for(let i=1;i<=5;i++){
//     let p=""
//     for(let j=1;j<=i;j++){
//         p+="* "   
//     }
//     console.log(p)
// }

// * * * * *
// * * * *
// * * *
// * *
// * 

// let n=5
// for(i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+="* "    
//     }
//     console.log(p)
// }

// let n=5
// for(let i=n;i>=1;i--){
//     let p=""
//     for(let j=1;j<=i;j++){
//         p+="* "   
//     }
//     console.log(p)
// }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let n=5
// for(i=1;i<=n;i++){
//     let p=""
//     for(let k=1;k<=n-i;k++){
//         p+="  "                                               
//     }
//     for(let j=1;j<=i;j++){
//         p+="* "   
//     }
//     console.log(p)
// }

//     *
//    * *
//   * * *
//  * * * * 
// * * * * * 

// let n=5
// for(i=1;i<=n;i++){
//     let p=""
//     for(let k=1;k<=n-i;k++){
//         p+=" "
//     }
//     for(let j=1;j<=i;j++){
//         p+="* "   
//     }
//     console.log(p)
// }

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let n=5
// for(i=n;i>=1;i--){
//     let p=""
//     for(let k=1;k<=n-i;k++){
//         p+=" "
//     }
//     for(let j=1;j<=i;j++){
//         p+="* "   
//     }
//     console.log(p)
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

//  let n=5
//  for(let i=1;i<=n;i++){
//      let p=""
//      for(let k=0;k<=i;k++){
//          p+="  "
//      }
//      for(let j=0;j<=n-i;j++){
//          p+="* "
//      }
//      console.log(p)
//  }

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// let n=5
// for(let i=1;i<=n;i++){
//     let p=""
//     if(i==1||i==n){
//         for(let j=1;j<=n;j++){
//             p+="* "
//         }
//     }
//     else{
//         for(let k=1;k<=n;k++){
//             if(k==1||k==n){
//                 p+="* "
//             }
//             else{
//                 p+="  "
//             }
//         }
//     }
    
//     console.log(p)
// }

// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=1;j<=n;j++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

//A B C D E
//A B C D E
//A B C D E
//A B C D E
//A B C D E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n;j++){
//         p+=String.fromCharCode(start+j) +" "
//     }
//     console.log(p)
// }

//A
//A B
//A B C
//A B C D
//A B C D E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<=i;j++){
//         p+=String.fromCharCode(start+j) +" "
//     }
//     console.log(p)
// }

// A
// B B
// C C C
// D D D D
// E E E E E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<=i;j++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

// A B C D E
// A B C D
// A B C
// A B
// A 

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+=String.fromCharCode(start+j) +" "
//     }
//     console.log(p)
// }

// A A A A A
// B B B B
// C C C
// D D 
// E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

//        A
//      B B
//    C C C
//  D D D D
//E E E E E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+="  "
//     }
//     for(let k=0;k<=i;k++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

//         A
//       A B
//     A B C 
//   A B C D 
// A B C D E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+="  "
//     }
//     for(let k=0;k<=i;k++){
//         p+=String.fromCharCode(start+k) +" "
//     }
//     console.log(p)
// }

//     A
//    B B
//   C C C
//  D D D D
// E E E E E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+=" "
//     }
//     for(let k=0;k<=i;k++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

//     A
//    A B
//   A B C
//  A B C D
// A B C D E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let j=0;j<n-i;j++){
//         p+=" "
//     }
//     for(let k=0;k<=i;k++){
//         p+=String.fromCharCode(start+k) +" "
//     }
//     console.log(p)
// }

// A A A A A
//   B B B B
//     C C C
//       D D
//         E

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let k=0;k<i;k++){
//         p+="  "
//     }
//     for(let j=0;j<n-i;j++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }

// A B C D E
//   A B C D
//     A B C
//       A B
//         A

// let start=65
// let n=5
// for(let i=1;i<=n;i++){
//     let p=""
//     for(let k=0;k<=i;k++){
//         p+="  "
//     }
//     for(let j=0;j<=n-i;j++){
//         p+=String.fromCharCode(start+j) +" "
//     }
//     console.log(p)
// }

//   A B C D E 
//    A B C D 
//     A B C 
//      A B 
//       A 

// let start=65
// let n=5
// for(let i=1;i<=n;i++){
//     let p=""
//     for(let k=0;k<=i;k++){
//         p+=" "
//     }
//     for(let j=0;j<=n-i;j++){
//         p+=String.fromCharCode(start+j) +" "
//     }
//     console.log(p)
// }

//   A A A A A 
//    B B B B 
//     C C C 
//      D D 
//       E 

// let start=65
// let n=5
// for(let i=0;i<n;i++){
//     let p=""
//     for(let k=0;k<i;k++){
//         p+=" "
//     }
//     for(let j=0;j<n-i;j++){
//         p+=String.fromCharCode(start+i) +" "
//     }
//     console.log(p)
// }