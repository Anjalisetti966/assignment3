

let num=3;
if(num%2==0){
    console.log("even");
    
}
else{
    console.log("odd");
    
}


let numb=0;
if (numb>0){
    console.log("positive");
}
else if (numb<0){
    console.log("negitive");
    
}else {
    console.log("zero");
    
}


const numbe=15;
if(numbe%5==0 && numbe%3==0)  {
    console.log("fizzbuzz");
    
}else if (numbe%5==0) {
    console.log("buzz");
    
}else if (numbe%3==0){
    console.log("fizz");
    
}else{
    console.log("failed");
    
}

let year=2016;
if (year%4==0 || year%100==0 && year%400==0) {
    console.log("leap year");   
    
}
    else {
    console.log("not a leap year");
    
}

let number=12;
switch (number) {
    case number=1:
        console.log("january");
        break;
        case number=2:
            console.log("feb");
            break;
            case number=3:
                console.log("march");
                break;
                case number=4:
                    console.log("april");
                    break;
                    case number=5:
                        console.log("may");
                        break;
                        case number=6:
                            console.log("june");
                            break;
                            case number=7:
                                console.log("july");
                                break;
                                case number=8:
                                    console.log("august");
                                    break;
                                    case number=9:
                                        console.log("september");
                                        break;
                                        case number=10:
                                            console.log("october");
                                            break;
                                            case number=11:
                                                console.log("november");
                                                break;
                                                case number=12:
                                                    console.log("december");
                                                    break;
                                                    
    default:console.log("fail");
    
        break;
}


let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
} else if (score >= 70) {
 grade = "C";
} else if (score >= 60) {
 grade = "D";
} else {
 grade = "F";
}
console.log(grade);
if (grade !== "F" ? score > 80 : false) {
 console.log("Excellent performance");
} else {
 console.log("Keep working hard");
}


let book ={title:"javascriptbook",author:"jhon",pages:300}
console.log(book.title);
console.log(book.pages);
console.log(book.isavailable=true);
console.log(book);
console.log(book.author=["anr"],["njs"],["abjbku"]);
console.log(book);







