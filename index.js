//--------------- 26. Spread oprator  --------------------------------------------------------------


// function sum(...number){
//     let result = 0;
//     for (const element of number) {
//         result += element;
//     }
//     return result;
// }
// function avrage(...number){
//     let result = 0;
//     for (const element of number) {
//         result += element;
//     }
//     return result / number.length;
// }

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const total = sum(1,2,3,4,5,6);
// const avg = avrage(1,2,3,4,5,6);
// const fullName = combineStrings("Mr.","vrushabh","panchal");
// console.log("Your total is " + total);
// console.log("Your Avrage is " + avg);
// console.log(fullName);

// function openFridge(...food){
//     console.log(...food);
// }

// function getFood(...foods){
//     return foods
// }


// const food1 = "pizza";
// const food2 = "burgur";
// const food3 = "fafda";
// const food4 = "jalebi";
// const food5 = "bhel";

// openFridge(food1,food2,food3,food4,food5);

// const food = getFood(food1,food2,food3,food4);

// console.log(food);

//--------------- 26. Spread oprator  --------------------------------------------------------------

// let fruits = ["apple","banana","coconut","orange"];
// let vegitables = ["potato","bringle","onion","spinech"];
// let food = [...fruits , ...vegitables , "milk"];

// console.log(food);


// let name = "Vrushabh";

// let letters = [...name].join("-");
// console.log(letters);

// let num = [1,2,3,4,5];
// let max = Math.max(...num);
// let min = Math.min(...num);

// console.log(max);
// console.log(min);






//--------------- 25. Arrays  --------------------------------------------------------------

// let fruits = ["apple","banana","coconut","orange"];

// fruits.pop();
// fruits.push("graps");
// fruits.unshift("graps");
// fruits.shift();


    // console.log(fruits.sort().reverse());
// for (const fruit of fruits) {
//     console.log(fruit);
// }
// for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
// }


//--------------- 24. Temprature converter  --------------------------------------------------------------

let inputTemp = document.getElementById("inputTemp");
let toFehrenhite = document.getElementById("toFehrenhite");
let toCelsius = document.getElementById("toCelsius");
let result = document.getElementById("result");
let temp;

function convert(){
    event.preventDefault();
    if(toFehrenhite.checked){
        temp = Number(inputTemp.value);
        temp = temp * 9/5 + 32;
        // result.textContent = "You selected C to F";
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(toCelsius.checked){
        temp = Number(inputTemp.value);
        temp = (temp - 32) * (5/9);
        // result.textContent = "You selected F to C";
        result.textContent = temp.toFixed(1) + "C";
    }
    else{
        result.textContent = "Select Unit";
    }

}



//--------------- 23. Variable scope  --------------------------------------------------------------

// let x = 3;

// function1();
// function2 ();
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// function function2(){
//     console.log(x);
// }



//--------------- 22. Functions  --------------------------------------------------------------

// function wishMe(name,age){
//     console.log("Happy birthday ");
//     console.log("Happy birthday ");
//     console.log(`Happy birthday ${name}`);
//     console.log(`You are now ${age}`);
//     console.log("Happy birthday ");
// }

// function add(x,y){
//     return x + y;
// }

// function isEven(number){

//     return number % 2 === 0 ? true : false;

//     // if(number % 2 ===  0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// }
// // wishMe("vrushabh",25);
// console.log(isEven(10).isEven ? "Even" : "Odd");

// console.log(add(1,2));


//--------------- 21. Number guessing game  --------------------------------------------------------------

// let min = 1;
// let max = 100;
// let answer = Math.floor(Math.random() * (max - min + 1)) + min;
// let attempt = 0;
// let guess;
// let running = true;
// console.log(answer);
// while (running) { 
//     guess = window.prompt(`Enter your number between ${min} - ${max}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert('Please enter valid input');
//     }
//     else if(guess < min || guess > max){ 
//         window.alert(`Please enter valid number`);
//     }
//     else{
//         attempt++;
//         if(guess < answer){
//             window.alert('Too Low enter smaller number ');
//         }
//         else if(guess > answer) {
//             window.alert('Too High enter higher number ');
//         }
//         else{
//         running = false;
//         window.alert(`Congratulations the answer was ${answer} in ${attempt}`)
//         }
//     }
// }




// console.log(random);



//--------------- 20. For loop  --------------------------------------------------------------

// for (let i = 1; i < 10; i++) {

//     if(i < 7){
//         console.log(i);
//         break;
//         // continue;
//     }
//     else{
//         console.log(i);
        
//     }
    
// }



//--------------- 19. While loop  --------------------------------------------------------------

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter Your Username");
//     password = window.prompt("Enter Your Password");

//     if(username === "vrushabh" && password === "vrushabh007"){
//         console.log("You are loggedin");
//     }
//     else{
//         console.log("Invalid credintiaal");
//     }

// }


// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt(`Enter Your Username :`)
// }

// console.log(username);


//--------------- 18. Strict operator  --------------------------------------------------------------

// const PI = "3.14";

// if(PI !== "3.14"){
//     console.log("this is not PI");
// }
// else{
//     console.log("this is PI");
// }


//--------------- 17. Logicl chainign  --------------------------------------------------------------

// const temp = 25;
// let isSunny = true;


// if(temp > 0 && temp <= 30 || isSunny ){
//     console.log(`Todays weather is Good`);
// }
// else{
//     console.log("Todays weather is Not Good");
    
// }



//--------------- 16. Method chainign  --------------------------------------------------------------

// --------- NO METHOD CHAINING-----------
// let username = window.prompt("What is your name :");

// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let endChar = username.slice(1);
// endChar = endChar.toLowerCase();
// username = letter + endChar;

// console.log(username);

// --------- METHOD CHAINING-----------

// username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();





//--------------- 15. String sliceing  --------------------------------------------------------------
 
// let fullName = "vrushabh panchal";

// let firstName = fullName.slice(0,fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstName = fullName.slice(0,8);
// let lastName = fullName.slice(9,16);
// let lastName = fullName.slice(9);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);


// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);




//--------------- 14. String methods  --------------------------------------------------------------
// let name = "vrushabh panchal";


// console.log(name.padEnd(20, "0"));
// console.log(name.padStart(20, "0"));
// console.log(name.replaceAll(" ", "-"));
// console.log(name.includes(" "));
// console.log(name.endsWith("h"));
// console.log(name.startsWith(" "));
// console.log(name.repeat(3));
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.trim());
// console.log(name.length);
// console.log(name.lastIndexOf('h'));
// console.log(name.indexOf('h'));
// console.log(name.charAt(0));



//--------------- 13. switch case  --------------------------------------------------------------

// let testScore = 70;
// let grade;

// switch(true){
//     case testScore >= 90 :
//         grade = "A"
//         break;
//     case testScore >= 80 :
//             grade = "B"
//         break;
//     case testScore >= 50 :
//         grade = "C"
//         break;
//     default:
//         console.log("Not a valid input");
//         break;
// }

// console.log(grade);


//--------------- 12. Ternary operator --------------------------------------------------------------
// let age = 20;

// let msg = age < 20 ? `You are not a adult` : `You are a adult` ;

// console.log(msg);


//--------------- 11. Checked prpoerty --------------------------------------------------------------

// let myCheckBox = document.getElementById("myCheckBox");
// let visaBtn = document.getElementById("visaBtn");
// let mastercardBtn = document.getElementById("mastercardBtn");
// let gpayBtn = document.getElementById("gpayBtn");
// let submit = document.getElementById("submit");
// let submitResult = document.getElementById("submitResult");
// let cardResult = document.getElementById("cardResult");

// submit.onclick = function(){

//     if(myCheckBox.checked){
//         submitResult.textContent = `You are subscribed`;
//     }
//     else{
//         submitResult.textContent = `You are NOT subscribed`;
//     }
//     if(visaBtn.checked){
//         cardResult.textContent = `You selected visa card for payment`
//     }
//     else if(mastercardBtn.checked){
//         cardResult.textContent = `You selected Master card for payment`
//     }
//     if(gpayBtn.checked){
//         cardResult.textContent = `You selected G PAY for payment`
//     }
// }



//--------------- 10. If Else --------------------------------------------------------------

// let age;
// let lable  = document.getElementById("age");
// let h3 = document.getElementById("h3");
// let myButton = document.getElementById("myButton");

// myButton.onclick = function(){
//     age = lable.value;
//     age = Number(age);
// if(age < 18){
//     if(age <= 15 && age >= 12){
//         h3.textContent =  `Your not aligible for geared driving license you can try gearless`;
//     }
//     else{
//     h3.textContent =  `Your not aligible for driving license`;
//     }
// }
// else if(age >= 18) {
//     h3.textContent =  `Congratulations !!!! You are aligible for driveing licence`;
// }
// }




//--------------- 9. Random number genrator --------------------------------------------------------------

// let button = document.getElementById("myButton");
// let lable1 = document.getElementById("label1");
// let lable2 = document.getElementById("label2");
// let lable3 = document.getElementById("label3 ");
// let min = 1;
// let max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// button.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     lable1.textContent = randomNum1;
//     lable2.textContent = randomNum2;
//     lable3.textContent = randomNum3;
// }


// const min = 50;
// const max = 100;

// // let randomNum = Math.floor(Math.random(6) * 100) + 1 ;
// let randomNum = Math.floor(Math.random() * (max - min)) + min ;

// console.log(randomNum);






//--------------- 8. Math object --------------------------------------------------------------

// let x = 45;
// let y = 2;
// let z = 3;

// z = Math.round(x); // Round up value
// z = Math.floor(x); // Round down value
// z = Math.ceil(x); // Round up all time value
// z = Math.trunc(x); // elemeinated . value
// z = Math.pow(y,x); // power of the value
// z = Math.sqrt(x); // sq root of the value
// z = Math.log(x); // log of the value
// z = Math.sin(x); // sin of the value
// z = Math.cos(x); // cos of the value 
// z = Math.tan(x); // tan of the value
// z = Math.abs(x); // absoulte of the value
// z = Math.sign(x); // tan of the value
// let max = Math.max(x,y,z)
// let min = Math.min(x,y,z)

// console.log(z);

//--------------- 7. Counter example --------------------------------------------------------------
// const incerement = document.getElementById("increment");
// const decerement = document.getElementById("decrement");
// const reset = document.getElementById("reset");
// const counter = document.getElementById("counter");
// let count = 0;


// reset.onclick = function(){
//     count = 0;
//     counter.textContent = count;
// }
// incerement.onclick = function(){
//     count ++;
//     counter.textContent = count;

// }
//     decerement.onclick = function(){
//         if(count > 0){
//             count -- ;
//             counter.textContent = count;
//         }
//     }
        


//--------------- 6. Constaints --------------------------------------------------------------

// const pi = 3.14159;

// let radius;
// let circumferance;

// // radius = window.prompt(`Enter the Radius of a circle :`);



// document.getElementById("submit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumferance = 2 * pi *radius;
//     document.getElementById("myH3").textContent = circumferance + "CM";
// }

// console.log(circumferance);


//--------------- 5. Type conversion    --------------------------------------------------------------

// let age = window.prompt("How old are you"); 
// age += 1;
// let x = "0";
// let y = "alskjd";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x ,typeof x);
// console.log(y ,typeof y);
// console.log(z ,typeof z);



//--------------- 4. UserInput from user    --------------------------------------------------------------

// let username;
// // username = window.prompt(`Whats your user name : ${username}`);

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("text").value;
//     document.getElementById("title").textContent = `hello ${username}`;
//     // console.log(username);
    
// }


// console.log(username);





//--------------- 3. Arithmatic Operators    --------------------------------------------------------------

// let students = 30;
// let result = 12 % 5 + 8 / 2;
// let result = 6 / 2 ** (2 + 5);

// students = students + 1;
// students = students - 1;
// students = students / 2;
// students = students * 2;
// students = students ** 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students /= 2;
// students *= 2;
// students **= 2;
// students %= 2;



// console.log(result);


//--------------- 2. Variables   --------------------------------------------------------------

// let fullName = "Vrushabh Panchal";
// let age  = 22;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your full name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled ${isStudent}`;

// let age = 20;
// let floatVal = 12.2;
// let name = "Vrushbah";
// let online = true;

// console.log(typeof name );
// console.log(age);
// console.log(floatVal);
// console.log(`your name is ${name}` );
// console.log(`${name}is onlne ${online}` );



//--------------- 1. Intoduction   --------------------------------------------------------------

// console.log("hello");
// console.log("I Like Pizza");

// window.alert("Hello");
// window.alert("I like to eat pizza");

// document.getElementById("myH1").textContent = "hello";
// document.getElementById("myP").textContent = "THis is the pragaraph";