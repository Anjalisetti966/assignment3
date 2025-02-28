/*1)output is  c and keep working hard 
grade is c because it is greater than 70 and less than 80 (score>70)here in if condition ternary operatore is used (instead of elseif ternanry is used)
so if condition ? is true then it will execute the result if not then it will go  :
here score > 80 is not correct since the score id 75 so it will to false(elseif) and executes keeping working hard */


//2) true && (false || false) == false so the output is limited
 //false && (false || false)  == false so the output is limited
     //true && (true || true) == true so the output will be full access

//3)expect rainsoon because  first codition is false temperature not 
// greater than 30 ,so it goes to next condition here temperature>20 so it
// results  expecy rain soon

//4) here the condition  (userAge >= 18) is true so it the message will be 
// adult content accessable next if conditions   is also true soo the message will
// be message += "with premium feature" so by concating message the output will be
// adult content accesseble with premium access

// 5)
// a = 10;
// b=15;
// c=a;
// cosole output ---path1 no condition meet


// 6) 
let num1=prompt("enter num1 ")
let num2=prompt("enter num2 ")
if (num1>num2) {
    console.log(num1);  
}
else{
    console.log(num2);
    
}
console.log();

//7)
let n=prompt("enter n ")
let m=prompt("enter m")
let o=prompt("enter o")

if (n>m && n>o) {
    console.log("n is greater than m,o", n);  
}
else if(m>n && m>o){
    console.log("m is hreater than n,o", m);
    
}else{
    console.log("o is greater than n,m",o);
    
}
console.log(`m=${m}, n=${n}, o=${o}`);

//8)
let age=prompt("enter age");
      if (age>=18 && age<90) {
         console.log("your are eligible to vote");  
      }
      else{
         console.log("you are not eligible to vote");
         
      }



 //9) 
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

//11)
let ages=20;
license=true;
if (ages>18,license) {
    console.log("you are eligible for driving");    
}
else{
    console.log("you are not eligible");
    
}

//12) 
let score = 85; 
let attendance = 75; 
let extraCredit = true;
if (score>80 && attendance>80 || extraCredit) {
    console.log("congrats you are pass");
    
}else {
    console.log("you are fail");
    
}



//13)
let myage=21;
if (myage>13) {
    console.log("you are child");   
}else if (myage<=13 && myage<=19) {
    console.log("you are teen");
}
else{
    console.log("you are adult");
    
}

//14)
// let score = 85; 
// let attendance = 75; 
// let extraCredit = true;
// if (score>80 && attendance>80 || extraCredit) {
//     console.log("congrats you are pass");
    
// }else {
//     console.log("you are fail");
    
// }

//15)
let temperature=35;
let isHot;
if (temperature>30,hot) {
    console.log("temperature is too hot");
}else{
    console.log("temperature is cool");
    
}



