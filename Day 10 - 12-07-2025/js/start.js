const btnSave = document.getElementById('btn-save')
btnSave.onclick = function () {
    alert("save btn clicked")
}

console.log("Welcome to js", 50, true)
document.writeln("text")
document.writeln("<h1> welcome to js </h1>")

// alert("helo")

document.body.innerHTML = "<h1> Hello <h1>"

console.log(btnSave);

// x = y + 20;

// Variables 
/*
multi
line
comment
*/

let lastName = "Ali";
console.log(firstName, lastName);
var firstName = "Omar";

var firstName = "Ahmed";
lastName = "sm,gdjk";

// block scope [if , loop , switch]
var a1 = 10;
let b1 = 10;
console.log("\na1: ", a1, "\nb1: ", b1, "\n---------------");

if (true) {
    var a1 = 20;
    let b1 = 20;
    console.log("\na1: ", a1, "\nb1: ", b1, "\n---------------");
}

console.log("\na1: ", a1, "\nb1: ", b1, "\n---------------");

let x;
x = 20;

const PI = 30;

// Operators 
//  1- Assignment [= += *= -= /= %= ]

let res = 20;
res += 10;  // res = res + 10 => res = 30
res -= 5;  // res = 25
res *= 5;  // 125

// Arthmetic [+ - * / % ** ++ -- ]

a = 10, b = 20;
c = a + b;

// comarison Operators [ > >= < <= == != === !==]  > try / false

// Logical Operators

// operators order /

res = 10 + 20 * 3 - 5 * 4 / 2
// () -> ** -> * / %  -> + - 
// && -> || 

console.log(a1);


let a3 = a1++
console.log(a3);

let a4 = ++a1
console.log(a4);


res = true + +"10"
console.log(res);
res = true - +"10"
console.log(res);


let fullName = firstName + " " + lastName
console.log(fullName);
a1 = 10
b1 = 15
res = a1 += 2 + --b1
console.log(res);
res = a1 + b1
console.log(res);

// let x1 = prompt("enter you first number: ")
// console.log(x1);

res = Number("10A")
console.log("res= ", res);

res = parseInt("10dnjhgfkdfhgk")
console.log(res);

// age 
