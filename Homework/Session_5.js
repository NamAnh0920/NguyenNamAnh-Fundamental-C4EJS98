let n = parseInt(prompt('Enter a number'));
let arr = [];
for (i = 0; i < n; i++) {
    arr.push(Math.random()); 
}
let num = Math.round(Math.random()*arr.length);
console.log(`${num}. ${arr[num]}`);
