// Exercise 1:
let a = prompt("Enter the value:");
let b = prompt("Enter another value:");
// first:
var temp;
temp = a;
a = b;
b = temp;
// second:
[a,b] = [b,a];
// Exercise 2:
let str = prompt("Enter the string: ");
let arr = str.split(" ");
// Exercise 3:
const c = [4, 5, 7, -8];
console.log(...c);
// Exercise 4:
While (true) {
    let ans = prompt("Hi there, welcome to the shop admin panel. What do you want (C, R, U, D)? ");
    if (ans == "C" || ans == "R" || ans == "U" || ans == "D") {
        break;
    } else {
        window.alert("This command is not supported.");
    }
}
let item = ["Jeans", "T-shirt", "Socks"];
while (true) {
    if (ans == "R") {
        console.log("The current item are: ")
        for (i = 1, i < item.length+1; i++) {
            console.log(`${i}. ${item[i-1]}`);
        }
        While (true) {
            let ans = prompt("Hi there, welcome to the shop admin panel. What do you want (C, R, U, D)? ");
            if (ans == "C" || ans == "R" || ans == "U" || ans == "D") {
                break;
            } else {
                window.alert("This command is not supported.");
    } else if (ans == "C") {
        let newItem = prompt("Please enter the new item: ");
        item.push(newItem);
        window.alert('Done');
        While (true) {
            let ans = prompt("Hi there, welcome to the shop admin panel. What do you want (C, R, U, D)? ");
            if (ans == "C" || ans == "R" || ans == "U" || ans == "D") {
                break;
            } else {
                window.alert("This command is not supported.");
            }
        }
    } else if (ans == "U") {
        while (true) {
            let posUp = parseInt(prompt("Enter the position you want to update: "));
            if (posUp > 0 && posUp < item.length+1) {
                item[posUp-1] == prompt("Enter the new name: ");
                window.alert("Done");
                break
            } else {
                window.alert("The position is invalid.");
            }
        }
        While (true) {
            let ans = prompt("Hi there, welcome to the shop admin panel. What do you want (C, R, U, D)? ");
            if (ans == "C" || ans == "R" || ans == "U" || ans == "D") {
                break;
            } else {
                window.alert("This command is not supported.");
            }
        }
    } else {
        while (true) {
            let posDel = parseInt(prompt("Enter the position you want to update: "));
            if (posDel > 0 && posDel < item.length+1) {
                delete item[posDel-1];
                window.alert("Done");
                break
            } else {
                window.alert("The position is invalid.");
            }
        }
        While (true) {
            let ans = prompt("Hi there, welcome to the shop admin panel. What do you want (C, R, U, D)? ");
            if (ans == "C" || ans == "R" || ans == "U" || ans == "D") {
                break;
            } else {
                window.alert("This command is not supported.");
            }
        }
    }
}
// Exercise 5:
let str = prompt("Enter a sequence of number, separated by comma (,): ");
let sum = str.split(", ");
let tong = 0;
for (i = 0; i < sum.length; i++) {
    tong = tong + parseInt(sum[i]);
}
window.alert(`The sum of them is ${tong}`);
// Exercise 6:
let str = prompt("Enter a sequence of number, separated by comma (,): ");
let sum = str.split(", ");
for (i = 0; i < sum.length; i++) {
    sum[i] = parseInt(sum[i]);
}
arr.sort(function(a,b) {return(a-b)} );
window.alert(`The smallest number is ${sum[0]}`);
// Exercise 7:
const arrayRam = [3, 4, 6, -9, 10, -88, 2];
let num = parseInt(prompt("Enter a number: "));
for (i = 0; i < arrayRam.length; i++) {
    if (arrayRam[i] == num) {
        window.alert(`${num} is FOUND in my array`);
    } else {
        window.alert(`${num} is NOT found in my array`);
    }
}
// Exercise 8:
console.log("Hello, my name is Nam Anh, and here is my sheep size:");
let sheepSize = [5, 7, 300, 90, 24, 50, 75];
let month = parseInt(prompt("Where do you want to travel in time?"));
console.log(...sheepSize);
for (i = 1; i < month+1 ;i++) {
    let bigGuy = sheepSize[0];
    for (n = 1; n < sheepSize.length; n++) {
        if (bigGuy < sheepSize[n]) {
            bigGuy = sheepSize[n];
        }
    }
    console.log(`Now my biggest sheep is ${bigGuy}, let's shave it.\nAfter sheering, here is my flock: \n`);
    sheepSize[sheepSize.indexOf(bigGuy)] = 8;
    console.log(...sheepSize);
    console.log(`MONTH ${i}\nOne month has, passed, my flock has grown to: \n`);
    for (m = 0; m<sheepSize.length; m++) {
        sheepSize[m] = sheepSize[m] + 50
    }
    console.log(...sheepSize);
}
let sum = 0;
for (i = 0; i < sheepSize.length; i++) {
    sum = sum + sheepSize[i];
    let money = sum*2;
}
console.log(`My flock has size in total: ${sum} \nI would get ${sum}*2 = ${money}`);
// Exercise 9:
const colors = [‘red’, ‘gray’, ‘blue’, ‘purple’, ‘cyan’];
for (i=0; i<colors.length; i++) {
    color(colors[i]);
    x = 10;
    for (y=0; y<4; y++) {
        go(x);
        turn(90);
    }
    x = x+10;
}
// Exercise 10:
let str1 = "<";
let str2 = ">";
let str = prompt('Enter the list of name, separated with a comma');
let arrStr = str.split(',');
for (i=0; i < arrStr.length; i++) {
    str[i] = str1.concat(str[i],str2);
}
window.alert(...arrStr);
// Exercise 11:
let numStr = prompt('Enter the list of number, separated with a comma');
let arrNum = numStr.split(',');
for (i = 0; i <arrNum.length; i++) {
    if (arrNum[i]%2 == 0) {
        delete arrNum[i];
    }
}
window.alert(...arrNum);