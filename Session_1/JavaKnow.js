// 1. Khai Báo Biến

// var, let, const
// let == khai báo

let name = "NamAnh";
name = "NamAnhNguyen";
console.log(name);

// 2. Get user input

let userName = prompt("Please input your name: ");
console.log(userName);

// Practice: cho ng dùng nhập 2 số a, b. In ra tổng 2 số
let a = prompt("Please input value: ");
let b = prompt("Input another value: ");
let tong = parseInt(a) + parseInt(b);
console.log(tong);

// 3. Data types
//  Primative(nguyên thủy): string, number, boolean
//  Object(đối tượng): array, object, function

// 3.1 String(chuỗi)

let name = "Phan";
let age = `25`;
let dob = `20/01/2002`; //tempate string
console.log(name);
console.log(age);
console.log(dob);

// Concat(nối chuỗi)

let randomString = "toi la ai";
console.log(randomString + name);
console.log(`hom nay ngay ${age} day`);

// 3.2 Number(số)

let a = 1212;
let b = 333;

// toán tử: +, -, *, /, %

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
