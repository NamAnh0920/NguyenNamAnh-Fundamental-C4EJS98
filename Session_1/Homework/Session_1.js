// ANSWER:
// 1. We can use typeof operater
// 2. When names begin with numebers, keywords in JS such as string, 1name, or float,... 
// exercise 1:

let r = parseFloat(prompt("Radius input: "));
let pi = Math.PI;
let Area = pi*r*r;
console.log(`Area = ${Area}`);

//  exercise 2:

let tempC = parseFloat(prompt("Enter the temparature in C: "));
let tempF = 32 + (tempC*9/5);
console.log(`${tempC}'C = ${tempF}'F`);

//  exercise 3: 
// def polygon(n):
//     for i in range(n):
//         go(100);
//         turn(360.0/n);
   
// def multiCir(n)
//     for i in range(n):
//         for i in range(360):
//             go(1);
//             turn(1);
//         turn(360.0/n);