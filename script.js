// console.log("Hello World");
// document.write("Hi Abhay");

var num = 10;
console.log(num);
console.log(typeof num);

num = false;
console.log(num);
console.log(typeof num);

num = "Abhay";
console.log(num);
console.log(typeof num);

num = null;
console.log(num);
console.log(typeof num);

num = undefined;
console.log(num);
console.log(typeof num);    


let sayHello = function(name){
    alert("Hello " + name);
}

// array
let numberArray = [1, 2, 3, 4, 5];
let animals = new Array("Dog", "Cat", "Elephant" , "Lion");

// object
let person = {
    name: "Abhay",
    age: 20,
    city: "Delhi"
}

const symbl = Symbol(4);
console.log(symbl);

const symbl2 = Symbol(4);
console.log(symbl2);    

console.log(symbl === symbl2);

if(symbl === symbl2){
    console.log("Same Symbol");
}

else{
    console.log("Different Symbol");
}

let a = 100, b = 13 , c = 10;
var linebreak = "<br>";
document.write("a + b + c = " + (a + b + c) + "<br>");

result = a + b + c;

document.write("The sum of " + a + " , " + b + " and " + c + " is: " + result);
document.write(linebreak);




