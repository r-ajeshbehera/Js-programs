let n = parseInt(prompt("Enter the number of terms: "));
let t1 = 0, t2 = 1;

console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(t1);
    let nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}
