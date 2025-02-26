/* 1. Explain the difference between var, let, and const in terms of scope, and
reassignment capability. Give one practical example where choosing the wrong
one could cause a bug.*/

/*var is a global or function scope in it can be reassigned and redeclared in JavaScript
let is blockscope in can be redeclared  but cannot be reintilised in JavaScript
const is also blockscope cannot be redeclared and reassigned in JavaScript*/
// let mess= "Initial message";

// if (true) {
//   var mess= "Changed message"; 
// }
// console.log(mess); // Output: 
// here var over writes the message of let 

// this is the debug program
// let mess="initial message";
// if (true) {
//     let mess="changed message"
    
// }
// console.log(mess);



// 2. JavaScript has primitive and reference data types. List three of each type and
// explain how they behave differently when assigned to a new variable?

// 1) primitive--- 
// string-text inside a single or double qoutations (eg "text"),
// number-numbers are numeric value (eg 123),
// boolean-true/false
// when primitive datatypes are assigned to a new variable, if one variable changes ,it don't effect or change other variable 
// variables sores values in different memory address
let m="anjali";
let n=m;
 m="sai";
 console.log(n);
 console.log(m);
 console.log(n === m);


 
 

// 2)nonprimitive/refernce data type---
//  object-it represents key:value pairs {name:"anjali",phn:123},
// function function name(){}
// array-it is collection of different types of data [1,"name",true]
// when we assign reference datatype to a new variable, if one variable changes then the 
// other variable value also changes beacuse of the same memory location

var v=[1,2,3];
var w=v;
v=[7,6,0] 

 console.log(v);
 console.log(w);
 
// 3.Without running the code, determine the output of:
// let result = 3 + 4 * 5 - 6 / 2 && 10 || 5;
// Explain the order of operations that leads to this result.

let result = 3 + 4 * 5 - 6 / 2 && 10 || 5; //(&& consider 2nd operand bcz 
// first operand is true and second one is also true  while || consider 1st operand bcz 
// first operand is true)
// output: 10

// 4) Explain the difference between null and undefined in JavaScript. How are
// they similar? In what scenarios might you encounter each one?

/*1)undefined means a variable has been declared but not intialised eg:- let name="";,
null means a variable is declared  and assigned a value as null eg:- let name=null;,
2)null-results null as a value where as undefined results undefined as a value .
3)both null and undefined represent a variable with no meaningful value or Absence of value.
4)null is assigned by the programmer where as undefined is assigned by the javascript engine */

/* undefined can be seen when programmer forgots to assign a value or  acessing
  a property from the object that doesn't exist*/
/*when wantedly clear the value of a variable especially in objects eg:- 
let name="anjali"
name="null"*/

/*5) Write code that swaps the values of two variables without using a temporary third
variable.
let a = 5;
let b = 10;
// Your code here
console.log(a); // Should output 10
console.log(b); // Should output 5*/

let a = 5;
let b = 10;
console.log(a=a+b,b=a-b,a=a-b);
console.log(a,b);

/*6) For each of these expressions, predict the resulting value and data type:
let result1 = "5" + 3; o/p= 53 , string
let result2 = "5" - 3; o/p= 2  , string
let result3 = "5" * "3"; o/p= 15 , string
let result4 = 10 / "2";  o/p=  5 , string
let result5 = 8 * null;  o/p=  0 , number (because null cosidered as 0)
let result6 = "five" * 2;o/p=  NAN , number 
let result7 = "5" == 5;  o/p= true
let result8 = "5" === 5; o/p= false */


/*7) Given these variables:
let str1 = "Hello";
let str2 = "World";
let num1 = 5;
let num2 = 10;
Write expressions to:
● Concatenate str1 and str2 with a space between
● Calculate the average of num1 and num2
● Check if str1 is longer than str2
● Determine if num1 plus num2 is greater than the length of both*/
let str1 = "Hello";
let str2 = "World";
let num1 = 5;
let num2 = 10;
console.log(str1+" "+str2);
console.log((num1+num2)/2);
let str3 =str1.length>str2.length;
console.log(str3);
let num3=num1+num2;
let num4="10"+5;
let ans=num3.length>num4.length
console.log(ans);

/*8) Write conditions to check if a number is:
Divisible by both 2 and 3
Divisible by either 2 or 3
Divisible by neither 2 nor 3*/

function name(num) {
    if (number%2==0 && number%3==0){
        console.log("number is divisible by 2 and 3 ");
        
    }
    else if( number%2==0 || number%3==0){
        console.log("number is divisible by either 2 or 3");
        
    }
    else {
        console.log("number is divisible by nither 2 or 3");
        
    }
    console.log(num);
    

    
}

/*9)What is the value of each variable after these operations?
let a = 10;
let b = 3;
let addition = a + b; o/p=13
let subtraction = a - b; o/p=7
let multiplication = a * b; o/p=30
let division = a / b; o/p= 3.33
let modulus = a % b; o/p= 1
let exponentiation = a ** b; o/p=1000
let increment = a++; o/p=10
let decrement = --b;  o/p=2*/ 

/*10.What will be the boolean result of these expressions?
let p = true; o/p=1
let q = false; o/p=true
p && q o/p=false
p || q o/p=true
!p o/p=false
!q o/p=true  
p && !q  o/p=true */  


//11)
let person = {
    nam: "Alex",
    "favorite color": "blue",
    123: "numeric key",
    address: {
    city: "Techville",
    country: "Codeland"
    }
   };
   console.log('1111111111111');
   
   console.log(person.nam);
   
   console.log(person["favorite color"]);
   console.log(person[123]);
   console.log(person.address.country);
   person.age=25;
//    console.log(person["age"] = 25);
   console.log(person["city"]= "programton");
   console.log(person);
   

//12)
let x = 5;
let y = x++;
let p = 5;
let q = ++p;
console.log(y);

/*value of x is  6
value of y is 5
value of p is 6
value of q is 6*/

   
   
// 13) Predict the final value of variable num after these operations:
let num = 10;
num += 5;
num *= 2;
num -= 7;
num /= 3;
num %= 4; 
// o/p is 3.6

//14)
let greeting = "Hello";
let na = "JavaScript";
console.log(greeting + " " + na);//Hello javascript
greeting += "!";
console.log(greeting);//Hello!

//15) Calculate the result of these expressions:
let result1 = 2 + 3 * 4; //14
let result2 = (2 + 3) * 4; //20
let result3 = 20 / 4 - 2; //3
let result4 = 20 / (4 - 2); //10
let result5 = 5 + 10 / 2 * 3 - 1;//19
console.log(result5);




   
   
 
 


 


 
