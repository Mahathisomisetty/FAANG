let n = 5;
for (let i = 1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= n-i+1; j++) {
        s += String.fromCharCode(70 -j) + " ";
    }
    console.log(s);
}
