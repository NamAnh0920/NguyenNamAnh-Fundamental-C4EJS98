// Answer: 
// 1. a binary variable, having two possible values called “true” and “false.”
// Example: 9 == 0 => False
//          "name" == "name" => True
//          "Name" == "name" => False
// 2. A flowchart is a diagram that depicts a process, system or computer algorithm.
// 3. Nested conditionals is conditional that looped inside another conditional.
// Example:
if (ans < 2020) {
    console.log(`This year is not 2020 yet`);
} else if (ans > 2020) {
    console.log(`2020 has passed`);
} else {
    console.log(`This year is 2020`);
}

// serious exercise 1
let height = parsrFloat(prompt("Enter your height in cm: "));
let weight = parseFloat(prompt("Enter your weight in kg: "));
let BMI = (weight/(height/100))/(height/100);
if (BMI < 16) {
    console.log("You are severely underweight!");
} else if (BMI < 18.5) {
    console.log("You are underweight.");
} else if (BMI < 25) {
    console.log("You are normal.");
} else if (BMI < 30) {
    console.log("You are overweight.");
} else {
    console.log("You are obese!");
}

// serious exercise 2
let n = parseInt(prompt('Enter a integer: '));
var nFac = 1;
if (n == 0) {
    console.log("0! = 1");
} else {
    for (i=1; i < n+1; i++){
        nFac += nFac*i;
    }
}
console.log(`n! = ${nFac}`);

// Turtle 2: 
// for i in range n:
//      polygon(n);
// Turtle 1:
// turn(-30)
// for i in range 16:
//      if (i%2 == 1):
//          go(30);
//          turn(60);
//      else:
//          go(30);
//          turn(120);

// Exercise 1:
let n = parseInt(prompt('Enter a integer: '));
var sumL = 0;
var sumR = 0;
for (i = 1; i < n+1; i++) {
    if (i%2 == 0) {
        sumR = sumR + i;
    } else {
        sumL = sumL + i;
    }
}
console.log(`Tong chan = ${sumR}
Tong le = ${sumL}`);

// Exercise 2:
let n = parseInt(prompt('Enter a integer: '));
let temp = n/2;
let ans = True;
if (n == 2){
    console.log(${ans});
} else {
    for (i = 2; i < temp; i++) {
        if (n%i == 0) {
            ans = False;
        }
    }
    console.log(${ans});
}


// Exercise 3:
let n = parseInt(prompt('Enter a integer: '));
function primeDetect(n) {
    var ans = True;
    for (i = 2; i < n+1; i++) {
        if (i == 2){
            console.log('2, ');
        } else {
            for (y = 2; y < temp; y++) {
                if (i%y == 0) {
                    ans = False;
                }
            }
            if (ans == True) {
                console.log(`${i}, `);
            }
        }
    }
}

// Exercise 4:
let n = parseInt(prompt('Enter a integer: '));
function ficbonCal(n) {
    let x = 0;
    let y = 1;
    let i = 3;
    while (i < n+1) {
        if (x < y) {
            x = x + y;
            i++; 
        } else {
            y = x + y;
            i++;
        }
    }
    if (x < y) {
        return y;
    } else {
        return x;
    }
}

// Exercise 5:
let ans = True;
let sum = 0;
while (ans = True) {
    let a = parseInt(prompt('Enter the number: '));
    if (a >= 0) {
        sum = sum + a;
    } else {
        ans = False;
    }
}

// Exercise 6:
let ranString = prompt('Enter a string: ');
let ans = True;
if (ranString.length%2 == 1) {
    ans = False;
}
let temp = ranString.length/2;
for (x = 0; x < temp+1; x++) {
    for (y = ranString.length-1; y > temp; y--) {
        if (ranString.substring(x,x+1) != ranString(y-1;y)) {
            ans = False;
        }
    }
}
console.log(${ans});

// Exercise 7:
let a = parseInt(prompt('Enter the length: '));
let b = parseInt(prompt('Enter the wide: '));
var ans;
for (x = 0; x < a; x++) {
    for (y = 0; y < b; y++) {
        ans = ans + '*';
    }
    console.log(`${ans}
    `);
}

// Exercise 8:
let a = parseInt(prompt("Nhap so con: "));
let b = parseInt(prompt("Nhap so chan: "));
if (b%2 != 0) {
    b = parseInt(prompt("Nhap so lai chan: "));
}
let soGa = b/2-a;
let soCho = a - soGa;
console.log(`So ga la ${soGa};
So cho la ${soCho}`);

// Exercise 9:
let a1 = parseInt(prompt('Nhap he so cua x trong pt1: '));
let b1 = parseInt(prompt('Nhap he so cua y trong pt1: '));
let c1 = parseInt(prompt('Nhap tong pt1: '));
let a2 = parseInt(prompt('Nhap he so cua x trong pt2: '));
let b2 = parseInt(prompt('Nhap he so cua y trong pt2: '));
let c2 = parseInt(prompt('Nhap tong pt2: '));
if (a1 == a2 && b1 == b2 && c1 == c2) {
    console.log(`The equation has infinite solution.`);
} else if (a1 == a2 && b1 == b2 && c1 != c2) {
    console.log(`The equation has no solution.`);
} elsew {
    let x = (c1*b2 - c2*b1)/(a1*b2 - a2*b1);
    let y = (c1*a2 - c2*a1)/(b1*a2 - b2*a1);
    console.log(`x = ${x}; y = ${y}`);
}