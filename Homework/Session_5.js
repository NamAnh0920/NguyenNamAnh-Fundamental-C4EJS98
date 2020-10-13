let n = parseInt(prompt('Enter a number'));
let arr = [];
for (i = 0; i < n; i++) {
    arr.push(Math.random());
}
let cnt = 0;
while (n > 0) {
    n = n%10;
    cnt ++;
}
while (true) {
    num = Math.round(Math.random()*(10**cnt));
    if (num < arr.length) {
        console.log(`${num}. ${arr[num]}`);
        break;
    }    
}