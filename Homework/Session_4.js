// while (true) {
//     let ans = prompt("Hi there, welcome to the phone admin panel. What do you want (C, R, U, D)? ");
//     if (ans == "C" || ans == "R" || ans == "U" || ans == "D" || ans == "E") {
//         var contact = {
//             name: '',
//             phone: 090,
//         }
//         let phonelist = [
//             {
//                 name: 'Nguyen Nam Anh',
//                 phone: 092638262,
//             },
//             {
//                 name: 'Tang Bao Dan',
//                 phone: 093739276,
//             }
//         ]
//             if (ans == "R") {
//                 console.log("The current contact are: ");
//                 for (i = 1; i < phonelist.length+1; i++) {
//                     console.log(`${i}. ${phonelist[i-1].name} \n      ${phonelist[i-1].phone}`);
//                 }
//                 while (true) {
//                     let ans = prompt("Hi there, welcome to the phone admin panel. What do you want (C, R, U, D)? ");
//                     if (ans == "C" || ans == "R" || ans == "U" || ans == "D" || ans == "E") {
//                         break;
//                     } else {
//                         window.alert("This command is not supported.");
//                     } 
//                 }
//             } else if (ans == "C") {
//                 let newCon = Object.create(contact);
//                 newCon.name = prompt('Enter the name contact:');
//                 newCon.phone = prompt('Enter the phone number:');
//                 phonelist.push(newCon);
//                 window.alert('Done');
//                 while (true) {
//                     let ans = prompt("Hi there, welcome to the phone admin panel. What do you want (C, R, U, D)? ");
//                     if (ans == "C" || ans == "R" || ans == "U" || ans == "D" || ans == "E") {
//                         break;
//                     } else {
//                         window.alert("This command is not supported.");
//                     }
//                 }
//             } else if (ans == "U") {
//                 while (true) {
//                     let posUp = parseInt(prompt("Enter the position you want to update: "));
//                     if (posUp > 0 && posUp < item.length+1) {
//                         let infUp = prompt('Enter the infomation you want to update');
//                         if (contact[infUp] == null || contact[infUp] == undefined) {
//                             alert("There is no such infomation.");
//                         } else {
//                             phonelist[posUp-1][infUp] = prompt('Enter the content:')
//                             window.alert("Done");
//                             break
//                         }
                        
//                     } else {
//                         window.alert("The position is invalid.");
//                     }
//                 }
//                 while (true) {
//                     let ans = prompt("Hi there, welcome to the phone admin panel. What do you want (C, R, U, D)? ");
//                     if (ans == "C" || ans == "R" || ans == "U" || ans == "D" || ans == "E") {
//                         break;
//                     } else {
//                         window.alert("This command is not supported.");
//                     }
//                 }
//             } else {
//                 while (true) {
//                     let posDel = parseInt(prompt("Enter the position you want to update: "));
//                     if (posDel > 0 && posDel < phonelist.length+1) {
//                         delete phonelist[posDel-1];
//                         window.alert("Done");
//                         break
//                     } else {
//                         window.alert("The position is invalid.");
//                     }
//                 }
//                 while (true) {
//                     let ans = prompt("Hi there, welcome to the phone admin panel. What do you want (C, R, U, D)? ");
//                     if (ans == "C" || ans == "R" || ans == "U" || ans == "D" || ans == "E") {
//                         break;
//                     } else {
//                         window.alert("This command is not supported.");
//                 }
//             }
//         }
//         break;
//     } else {
//         window.alert("This command is not supported.");
//     }
// }

// // Exercise 1: property - for (let prop in arr) {console.log(prop)};
// // Exercise 2: 
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// var {subject, dueDate, assignTo} = task;
// // Exercise 3:
// // Outmostlayer is Object, hits is array, use array.indexOf()
// // Exercise 4:
// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
//     ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels', 
// };
// alert('Hi this is the dictionary');
// while (true) {
//     let ans = prompt('Enter a key work');
//     let ans = temp;
//     if (dictionary[ans] == null || dictionary[ans] == undefined) {
//         dictionary[ans] = prompt(`We cannot find your word, leave your explanation: `);
//         alert('Done')
//     } else {
//         console.log(`${ans}\n${dictionary[ans]}`);
//     }
// }
// // Exercise 5:
// var product = {
//     name: "",
//     brand: '',
//     price: 0,
//     color: '',
//     catagory: '',
// };
// Xiaomi = Object.create(product)
// Xiaomi = {
//     name: 'Xiaomi portable charger 20000mah',
//     brand: 'Xiaomi',
//     price: 428,
//     color: 'White',
//     catagory: 'Charger',
// }
// VSmart = Object.create(product);
// VSmart = {
//     name: 'VSmart Active 1',
//     brand: 'VSmart',
//     price: 5487,
//     color: 'Black',
//     catagory: 'Phone',
// };
// IPhone = Object.create(product);
// VSmart = {
//     name: 'IPhone X',
//     brand: 'Apple',
//     price: 21490,
//     color: 'Gray',
//     catagory: 'Phone',
// };
// Samsung = {
//     name: "Galaxy A9",
//     brand: 'Samsung',
//     price: 8490,
//     color: 'Blue',
//     catagory: 'Phone',
// };	
// itemArr = [Xiaomi, VSmart, IPhone, Samsung];
// for (item of itemArr) {
//     for (prop in item) {
//         console.log(item[prop]);
//     }
// }
// for (i = 1; i < itemArr.length+1; i++) {
//     console.log(`${i}. ${itemArr[i-1].name}\n${itemArr[i-1].price}`)
// }
// let pos = prompt('Enter the position:');
// if (pos >= 0 && pos < itemArr.length) {
//     console.log(itemArr[pos]);
// };
// let cat = prompt('Enter the catagory:');
// for (item in itemArr) {
//     if (item.catagory == cat) {
//         console.log(`${item.name}\n${item.price}`)
//     }
// };
// Xiaomi.provider = 'Charger Phukienzero';
// VSmart.provider = 'Tgdd Ddghn VhStore';
// IPhone.provider = 'XTgdd';
// Samsung.provider = 'Tgdd';
// for (item in itemArr) {
//     console.log(`${item.name}\n${item.price}\n${item.provider}`);
// };
// // Exercise 7: penup(); go(50); turn(90); go(100); pendown();
// // Exercise 8: penup(); go(50); turn(90); go(100); pendown(); 
// //             for i in range (0,4): go(20); turn(90);
// // Exercise 9: penup(); go(50); turn(90); go(100); pendown(); 
// //             for i in range (0,2): go(20); turn(90); go(40); turn(90);
// // Exercise 10: penup(); go(8); turn(90); go(70); pendown();
// //              for i in range (0,2): go(20); turn(90); go(40); turn(90); home();
// //              penup(); go(20); turn(90); go(40); pendown();
// //              for i in range (0,4): go(50); turn(90);
// // Exercise 11: penup(); go(100); turn(90); go(80); pendown();
// //              for i in range 360:
// //                  turn(1); go(pi/6);
// // Exercise 6:
var code = {
    name: '',
    process: false,
};
let _HTML = Object.create(code);
_HTML = {
    name: 'HTML',
    process: false,
}; 
let  _CSS = Object.create(code);
_CSS = {
    name: 'CSS',
    process: false,
};
let _JS = Object.create(code);
_JS = {
    name: 'Basics of JavaScript',
    process: false
};
let _PM = Object.create(code);
_PM = {
    name: 'Package Manager (npm of yarn)',
    process: true,
};
let git = Object.create(code);
git = {
    name: 'Git',
    process: false
};
let _ReJS = Object.create(code);
_ReJS = {
    name: 'ReactJS',
    process: false,
};
codeArr = [_HTML, _CSS , _JS, _PM, git, _ReJS];
console.log("Hi there, this is your learning tasks to front-end developer career:");
for (item of codeArr) {
     if (item.process == true) {
         console.log(`[ x ] ${item.name}`);
     } else {
         console.log(`[   ] ${item.name}`);
     }
}
function newCode(code) {
    codeArr[codeArr.length] = Object.create(code);
    codeArr[codeArr.length].name = prompt('Enter a new name:');
};
function upCode(code) {
    let n = prompt('Enter the position:');
    codeArr[n-1].name = prompt('Enter a newe title:'); 
};
function comCode(code) {
    let n = prompt("Enter the position:");
    codeArr[n-1].process = true;
};

while(true) {
    let cmd = prompt('Enter the command(New, Update, Delete, Complete');
    if (cmd == 'New' || cmd == 'new') {
        newCode(); break;
        console.log(codeArr);
    } else if (cmd == 'Update' || cmd == 'update') {
        upCode(); break;
    } else if (cmd == 'complete' || cmd == 'Complete') {
        comCode(); break;
    } else {
        let n = prompt('Enter the position: ');
        delete codeArr[n-1];
        break;
    }
}

