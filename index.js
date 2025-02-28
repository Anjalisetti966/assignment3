/* 1. Basic Variables
Create three different variables using `var`, `let`, and `const`. Assign them your favorite
 color, number, and name respectively.*/
 var colour="red";
 console.log(colour);
 let NAME="Anjali";
 console.log(NAME);
 const number=1223;
 console.log(number);
 
 
 /*2. Data Types
 What is the data type of each value? Write them down:
 "42"
 42
 true
 undefined
 ["apple", "banana"]
 null*/
 "42"-String;
 42-number;
 true-Boolean;
 undefined-undefined;
 ["apple", "banana"]-Array;
 null- null;
 
 /*3. Numbers
 Create two number variables and show:
 - Their sum
 - Their difference
 - Their product
 - Their division result*/
 let num1 =10;
 let num2 =20;
 // sum
 console.log(num1+num2);
 // difference
 console.log(num1-num2);
 // product
 console.log(num1*num2);
 // division
 console.log(num1/num2);
 
 
 // 4. Strings
 // Create a variable with your first name and another with your last name. How can you
 // combine them to create your full name with a space in between?
 let firstname="ANJALi"
 let secondname=" setti"
 console.log(firstname+secondname)
 
 // 5. Booleans
 // Create three variables:
 // - isJavaScriptFun = true
 // - isCodeHard = false
 // - isLearning = true
 // What happens when you use the AND operator (&&) between isJavaScriptFun and
 // isCodeHard?
 // What happens when you use the OR operator (||) between isCodeHard and isLearning?
 let isJavaScriptFun = true;
 let isCodeHard = false;
 let isLearning = true;
 // when we use && between true and false the output will be false
 console.log(isJavaScriptFun && isCodeHard);
 // when we use || between false and true the output will be true
 console.log(isCodeHard||isLearning);
 
 
 // 6. Arrays
 // Create an array of your three favorite foods. Then:
 // - What is the first food in your array?
 // - How many items are in your array?
 // - Add one more food to your array
 let favfood=["biryani","icecream","fruits","drinks"];
 // What is the first food in your array?
 console.log(favfood[0]);
 // - How many items are in your array?
 console.log(favfood.length);
 // Add one more food to your array
 console.log(favfood[4]="name")
 // final result
 console.log(favfood)
 
 
 // 7. Simple Math
 // Create a variable called temperature = 35. Write code to:
 // - Add 5 to it
 // - Subtract 2 from it
 // - Multiply it by 3
 // - Divide it by 2
 
 let temperature=35;

//  console.log(temperature = tempature + 5)

 // - Add 5 to it
 temperature+=5;
 console.log("temperature=",temperature);
 // - Subtract 2 from it
 temperature-=2
 console.log("temperature=",temperature);
 // - Multiply it by 3
 temperature*=3
 console.log("temperature=",temperature);
 // - Divide it by 2
 temperature/=2
 console.log("temperature=",temperature);
 
 // 8. Variable Names
 // Which of these variable names are valid in JavaScript?
 // - user name
 // - _firstName
 // - 3colors
 // - my-variable
 // - $price
 // - let
 
 // // user name is not valid in js because of variable name should not include space between
 // let user nam="anjali";--notvalid
 
 
 // // _ is allowed to use at starting while writting a variable name in js
 // let _firstName="anjali";--valid
 
 // // numbers also not allowed to use at the begining of a variable name in js
 // let 3colors="anjali"-not valid
 
 // // dollar symbol can use as a variable name in js
 // let $price=230;-valid
 
 // // variables keywords are reserved so can't be used as the variable name in js
 // let let="anjali";--not valid
 
 
 
 // 9. Comments
 
 // java scrpit is invented in 1995 by netscape company
 /*javascript is a synchronous,singlethread  and interpreted language,
 java script is both script and programming language and every thing in javascript is an object
 */
 /*Var-is a function or global  scope it can be redeclared and REINTILIZED or reassigned
 Let- it is a block scope it can be redeclared but cannot reassigned 
 Const-it is also blockscope cannot be redeclared and reassign*/
 
 
 
 // 10. Data Type Checking
 // Use typeof to find the data type of:
 // - "Hello World"
 // - 42
 // - true
 // - [1, 2, 3]
 // - undefined
 console.log(typeof("hello world"))
 console.log(typeof(42))
 console.log(typeof(true))
 console.log(typeof([1,2,3]))
 console.log(typeof(undefined))
 
 
 // 11. Basic Console
 // Write code to display "Hello, JavaScript!" in the console in three different ways.
 console.log("hello javascript");
  let word="hello javascript";
  console.log(word);
  let word2="javascript";
  console.log(`hello ${word2}`)
 
 // 12. Variables and Numbers
 // Create two number variables and combine them with each mathematical operator (+, -,
 // *, /). What happens if you divide by zero?
 let number1 =20;
 let number2 =30;
 console.log(number1+number2);
 console.log(number1-number2);
 console.log(number1*number2);
 console.log(number1/number2);
 console.log(number1/0);
 
 
 
 
 
 
 
 
 
 
 