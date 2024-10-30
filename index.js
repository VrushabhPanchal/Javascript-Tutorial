//--------------- 57. Error handling --------------------------------------------------------------

try {

    const divident = Number(window.prompt("Enter the divident : "));
    const divisor = Number(window.prompt("Enter the divisor :  "));
    
    if(divisor == 0){
        throw new Error("You can't be divide by zero");
    }
    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("Values must be an number");
    }


    const result = divident / divisor ;
    console.log("The result is : " + result);

} catch (error) {
    console.error(error);
}
console.log("You have reached the end!");

// try {
//     console.log(e);
    
//     // console.log("hello");
    
// } catch (error) {
//     console.error(error);
// }
// console.log("You have reached the end!");


//--------------- 56. Asynchronous code --------------------------------------------------------------

// setTimeout(() => {
//     console.log("Task 1"); 
// }, 3000);
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// function func1(callback){
//     setTimeout(()=> {
//         console.log("Task 1");
//         callback();
//     } , 2000);
// }
// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
    
// }

// func1(func2);

//--------------- 55. ES6 modules --------------------------------------------------------------

// import {PI,getCircumference,getArea,getVolume} from './mathutils.js';

// console.log(PI);
// const circumferance = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);
// console.log(`${circumferance.toFixed(2)} cm`);
// console.log(`${area.toFixed(2)} cm^2`);
// console.log(`${volume.toFixed(2)} cm^3`);


//--------------- 54. Stopwatch program --------------------------------------------------------------
// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update,10);
//         isRunning = true;
//     }
// }
// function stop(){

//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }

// }
// function reset(){
//     clearInterval(timer);
//  startTime = 0;
//  elapsedTime = 0;
//  isRunning = false;
//  display.textContent = "00:00:00:00"
// }
// function update(){
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;
//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let miliseconds = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2,"0");
//     minutes = String(minutes).padStart(2,"0");
//     seconds = String(seconds).padStart(2,"0");
//     miliseconds = String(miliseconds).padStart(2,"0");

//     display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
// }
//--------------- 53. Clock project --------------------------------------------------------------

// function updateClock(){

//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12 ;
//     hours = hours.toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;

// }

// updateClock();
// setInterval(updateClock,1000);
//--------------- 52. setTimeOut --------------------------------------------------------------

// let timeoutId;

// function startTimer(){
//     timeoutId=  setTimeout(()=> window.alert("hello") , 3000);
//     console.log("STARTED")
// }
// function clearTimer(){
//     clearTimeout(timeoutId)
//     console.log("CLEARED")
// }

// function sayHello(){
//     window.alert("hello")
// }
// setTimeout(sayHello,3000)
// setTimeout(function(){window.alert("hellow ")},3000);
// setTimeout(()=> window.alert("hello"),3000);



//--------------- 51. Closure --------------------------------------------------------------


// function createGame(){
//     let score = 0;

//     function incrementScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }
//     function decrementScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }
    
//     function getSecore(){
//         return score;
//     }
  
//     return {incrementScore,decrementScore,getSecore}
// }

// const game = createGame();
  
// game.decrementScore(2);
// game.incrementScore(5);
// console.log(`the final score is ${game.getSecore()} pts`);



// function createCounter(){
//     let count = 0 ;

//     function getCount(){
//         return count;
//     }

//     function incerement(){
//         count++;
//         console.log(`Count increased to ${count}`);   
//     }
//     return {incerement,getCount};
// }

// const counter = createCounter();
// counter.incerement();
// counter.incerement();
// counter.incerement();
// counter.incerement();

// console.log(`The current count is ${counter.getCount()}`);

// function outer(){
//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();


//--------------- 50. Dates --------------------------------------------------------------

// const date = new Date();
// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if(date2 > date1){
//     console.log("HAPPY NEW YEAR");
// }


// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(4);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(date);


// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const min = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(min);
// console.log(seconds);
// console.log(dayOfWeek);

//--------------- 49. Shuffle an array --------------------------------------------------------------
// const card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];

// shuffle(card);
// console.log(card);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i-- ){
//         const random = Math.floor(Math.random() * (i+1));
//         [array[i],array[random]] = [array[random],array[i]]; 
//     }
// }

//--------------- 48. Sorting  --------------------------------------------------------------

// const pepole = [
//     {name : "Sagar",age : 24, gpa : 3.0},
//     {name : "Bhavik",age : 25, gpa : 4.0},
//     {name : "Vrushabh",age : 26, gpa : 5.0},
//     {name : "morgan",age : 24, gpa : 3.0}
// ];

// pepole.sort((a,b) => a.name.localeCompare(b.name));
// pepole.sort((a,b) => a.gpa - b.gpa);

// console.log(pepole);

// let number = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9];

// number.sort((a,b) => a - b);

// console.log(number);

//--------------- 47. Array of object  --------------------------------------------------------------

// const fruit = [
//     {
//        name : "apple",
//        color : "red",
//        calories : 95 
//     },{
//         name : "banana",
//         color : "yellow",
//         calories : 45
//     },{
//         name : "coconut",
//         color : "white",
//         calories : 95
//     },{
//         name : "orange",
//         color : "orange",
//         calories : 105
//     },{
//         name : "pinaple",
//         color : "yellow",
//         calories : 37
//     }
// ];

// const maxFruit = fruit.reduce((max,fruit) => fruit.calories > max.calories  ? fruit  : max);
// const minFruit = fruit.reduce((min,fruit) => fruit.calories < min.calories  ? fruit  : min);
// console.log(maxFruit);
// console.log(minFruit);


// const yellowFruit = fruit.filter(fruit => fruit.color === "yellow");
// const lessCalorieFruit = fruit.filter(fruit => fruit.calories < 100);
// const highCalorieFruit = fruit.filter(fruit => fruit.calories >= 100);
// console.log(yellowFruit);
// console.log(lessCalorieFruit);
// console.log(highCalorieFruit);
// const fruitName = fruit.map(fruit => fruit.name);
// const fruitColor = fruit.map(fruit => fruit.color);
// const fruitCalories = fruit.map(fruit => fruit.calories);
// console.log(fruitName);
// console.log(fruitColor);
// console.log(fruitCalories);
// fruit.forEach(fruit => console.log(fruit.calories)); 
// fruit.shift();
// fruit.unshift();
// fruit.shift({name : "grapes",color: "green",calories : 100});
// fruit.pop();
// fruit.push({name : "grapes",color: "green",calories : 100});
// console.log(fruit);
// console.log(fruit);


//--------------- 46. Nested Objrct  --------------------------------------------------------------

// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address)
//     }
// }
// class Address {
//     constructor(state,city,pin) {
//         this.state = state;
//         this.city = city;
//         this.pin = pin;
//     }
// }

// const person1 = new Person("Vrushabh",24,"Gujarat","ahmedabad",382418);
// const person2 = new Person("Bhavik",24,"Gujarat","ahmedabad2",382418);
// const person3 = new Person("Sagar",24,"Gujarat","ahmedabad3",382418);

// console.log(person2.address);


// const person = {
//     fullname : "Vrushabh panchal",
//     age : 24 ,
//     isStudent : true ,
//     hobbies : ["Music","Movies","Games"],
//     address : {
//         state : "Gujarat",
//         city : "ahmedabad",
//         pincode : 382418
//     }
// }

// for(const prpoerty in person.address){
//     console.log(person.address[prpoerty]);
// }
// console.log(person.address.city);
// console.log(person.hobbies[2]);



//--------------- 45. Destructuring  --------------------------------------------------------------

//------------- Example5 ----------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName,lastName,age,job= "Unemployed"}){
//     console.log(`Name : ${firstName} ${lastName}`);
// console.log(`Age : ${age}`);
// console.log(`Job : ${job}`);

// }

// const person1 = {
//     firstName : "vrushabh",
//     lastName : "panchal",
//     age : 24,
// }
// const person2 = {
//     firstName : "sagar",
//     lastName : "khatri",
//     age : 24,
//     job : "Django dev"
// }
// displayPerson(person1);




//------------- Example4 ----------------------
// EXTRACT VALUES FROM OBJECT
// const person1 = {
//     firstName : "vrushabh",
//     lastName : "panchal",
//     age : 24,
// }
// const person2 = {
//     firstName : "sagar",
//     lastName : "khatri",
//     age : 24,
//     job : "Django dev"
// }

// const{firstName,lastName,age,job= "Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//------------- Example3 ----------------------
// ASSIGN ARRAY ELEMENT TO VARIABBLE

// const color = ["red", "green", "blue", "black", "white"];

// const[firstColor,secondColor,thirdColor,...extraColors] = color;


// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(thirdColor);
// console.log(extraColors);


//------------- Example2 ----------------------
// SWAP THE ELEMENT IN ARRAY 

// const color = ["red", "green", "blue", "black", "white"];

// [color[0],color[4]] = [color[4],color[0]];

// console.log(color);s


//------------- Example1 ----------------------
// SWAP THE VALUE OF TWO VARIABLE
// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);


//--------------- 44. Getters Setters  --------------------------------------------------------------

// class Person {

//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("First name must be a non-empty string");
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("Last name must be a non-empty string");
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a non-nagative number");
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
//     get fullName(){
//         return `My Full Name is ${(this._firstName +" " +this._lastName)} and my age is ${this._age}`;
//     }

// }

// const person = new Person("Vrushabh","Panchal",24);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);


// class Rectangle {

//     constructor(width,height) {
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             return console.error("Width must be an positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             return console.error("height must be an positive number")
//         }
//     }

//     get width (){
//         return `${this._width.toFixed(1)} cm`;
//     }
//     get height (){
//         return `${this._height.toFixed(1)} cm`
//     }
//     get area(){
//         return `${(this._width * this._height).toFixed(1)} cm^2`;
//     }

// }

// const ractangle = new Rectangle(52,20);
// console.log(ractangle.width);
// console.log(ractangle.height);
// console.log(ractangle.area);



//--------------- 43. Super Keyword  --------------------------------------------------------------

// class Animal {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`the ${this.name} moves at a speed ${speed} km/h`);
//     }
// }

// class Rabit extends Animal {
//     constructor(name,age,runSpeed) {
//      super(name,age);   
//      this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`The ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal {
//     constructor(name,age,swimSpeed) {
//         super(name,age);   
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`The ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }
// class Hawk extends Animal {
//     constructor(name,age,flySpeed) {
//         super(name,age);   
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`The ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabir = new Rabit("rabbit",2,20); 
// const fish = new Fish("fish",1,30); 
// const hawk = new Hawk("hawk",3,40); 

// console.log(rabir.age);
// console.log(rabir.name);
// console.log(rabir.runSpeed);

// fish.swim();

//--------------- 42. Inheritance  --------------------------------------------------------------

// class Animnal {
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Dog extends Animnal {
//     name = "Dog";
//     run(){
//         console.log(`The ${this.name} can run slower the cat`)
//     }
// }

// class Cat extends Animnal {
//     name = "Cat";
//     fastRun(){
//         console.log(`The ${this.name} can run faster the cat`)
//     }
// }

// const dog = new Dog();
// const cat = new Cat();

// console.log(cat.alive); 
// cat.alive = false
// console.log(cat.alive);

// dog.eat();
// dog.run();
// cat.eat();
// cat.fastRun();

//--------------- 41. Static  --------------------------------------------------------------

// class User {

//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello(){
//         console.log(`Hello my name is ${this.username}`);
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} is online`);
//     }

// }

// const user1 = new User("vrushabh");
// const user2 = new User("Bhavik");
// const user3 = new User("Sagar");

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();

// console.log(user1.userCount);
// console.log(User.userCount);




// class MathUtils {

//     static PI = 3.14159;

//     static getRadious(radius) {
//         return radius * 2;
//     }

//     static getCircumFerence(radius){
//         return  2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.getRadious(10));
// console.log(MathUtils.getCircumFerence(10));
// console.log(MathUtils.getArea(10));

//--------------- 40. Class  --------------------------------------------------------------

// class Product {
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product Name : ${this.name}`);
//         console.log(`Product Price : ${this.price}`);
//     }

//     calculateTax(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const product1 = new Product("shirts", 100.10);
// const product2 = new Product("pants", 180.30);
// const product3 = new Product("jacket", 200.60);
// const tax = 0.18;

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();


// const total = product2.calculateTax(tax);
// console.log(total);


//--------------- 39. Constructor  --------------------------------------------------------------

// function Car(brand, model, year, color){
//     this.brand = brand,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//      this.drive = function (){console.log(`you drive ${this.model} ${this.brand}`);
//      }
// }

// const car1 = new Car("Ford","mustang",2024,"black");
// const car2 = new Car("Toyota","Fourtuner",2024,"black");
// const car3 = new Car("TATA","harrier",2024,"black");

// console.log(car2);
// car2.drive();



//--------------- 38. This keyword  --------------------------------------------------------------

// const person1 = {
//     firstName : "Sagar",
//     lastName : "Khatri",
//     age : 24,
//     isEmployed : true,
//     sayHii : function () {console.log(`Hi my name is ${this.firstName} ${this.lastName}`);},
//     eating : function (){console.log("I would love to eat the pizza");
//     }
// }

// person1.sayHii();

//--------------- 37. Objects  --------------------------------------------------------------
// const person1 = {
//     firstName : "Sagar",
//     lastName : "Khatri",
//     age : 24,
//     isEmployed : true,
//     sayHii : function () {console.log("hii I am saagr khatri");},
//     eating : function (){console.log("I would love to eat the pizza");
//     }
// }
// const person2 = {
//     firstName : "Bhavik",
//     lastName : "Panchal",
//     age : 24,
//     isEmployed : true,
//     sayHii : () => console.log("hii I am Bhavik Panchal"),
//     eating :  () => console.log("I would love to eat the pizza")
// }

// console.log(person1.age);
// console.log(person2.age);
// person1.sayHii();
// person2.sayHii();
// console.log(person2.sayHii);


//--------------- 36. Arrow Function  --------------------------------------------------------------

// const number = [1, 24, 3, 24, 51, 10, 25, 65, 41];

// const square = number.map( (element) => Math.pow(element,2));
// const cube = number.map( (element) => Math.pow(element,3));
// const evenNum = number.filter( (element)=> element % 2 === 0);
// const oddNum = number.filter( (element)=> element % 2 !== 0);
// const total = number.reduce( (accumulator,element)=> accumulator + element);

// console.log("Square " + square);
// console.log("Cube " + square);
// console.log("Even " + evenNum);
// console.log("Odd " + oddNum);
// console.log("Total " + total);


//--------------- 35. Function Expressions  --------------------------------------------------------------

// const number = [1, 2, 3, 4, 40, 20, 30, 50];

// //================== this is the function decoration ============================
// // const squaredNumber = number.map(square);
// //================== this is the function Expressions ============================
// const squaredNumber = number.map(function(element){
//     return Math.pow(element,2);
// });

// const cubedNumber = number.map(function(element){
//     return Math.pow(element,3);
// });
// const evenNumber = number.filter(function(element){
//     return element % 2 === 0;
// });
// const oddNumber = number.filter(function(element){
//     return element % 2 !== 0;
// });
// const total = number.reduce(function(accumulator,element){
//     return accumulator + element;
// });

// console.log(squaredNumber);
// console.log(cubedNumber);
// console.log(evenNumber);
// console.log(oddNumber);
// console.log(oddNumber);
// console.log("$"+total.toFixed(2));


// function square(element){
// return Math.pow(element,2);
// }

// function hello(){
//     console.log("hello");
// }

// setTimeout(
//     function(){
//         console.log("hello from set timout");
// },3000);

// hello();



//--------------- 34. Reduce  --------------------------------------------------------------

// const grade = [12, 13, 20, 50, 40, 60];

// const maximum = grade.reduce(getMax);
// const minimum = grade.reduce(getMin);

// console.log(maximum);
// console.log(minimum);


// function getMax(accumulator,element){
//     return Math.max(accumulator,element);
// }
// function getMin(accumulator,element){
//     return Math.min(accumulator,element);
// }

// const amount = [1, 12, 50, 10, 70];

// const sumAmount =  amount.reduce(sum);

// console.log(`$${sumAmount.toFixed(2)}`);


// function sum(accumulator,element){
//     return accumulator + element;
// }


//--------------- 33. Filter  --------------------------------------------------------------

// const fruits = ["apple","banana","coconut","kiwi","pomograet","orange"];

// const longWords = fruits.filter(longWord);

// console.log(longWords);


// function longWord(element){
//     return element.length > 6;
// }

// const ages = [11, 12, 13, 15, 18, 20, 21, 22, 16, 30];

// const adults = ages.filter(isAdults);
// const childrens = ages.filter(isChild);

// console.log(adults);
// console.log(childrens);

// function isAdults(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

//  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let evenNumber = number.filter(isEven);
//  let oddNumber = number.filter(isOdd);

//  console.log(evenNumber);
//  console.log(oddNumber);
 

//  function isEven(element){
//     return element % 2 === 0;
//  }
//  function isOdd(element){
//     return element % 2 !== 0;
//  }




//--------------- 32. Map  --------------------------------------------------------------

// const dates = ["2024-12-21","2024-11-22","2024-10-23"];
// const formattedDate = dates.map(formatDates);

// console.log(formattedDate);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }



// const students = ["sagar","bhavik","vrushabh"];
// const studentUpper = students.map(upperCase);
// const studentLower = students.map(lowerCase);

// console.log(studentUpper);


// function upperCase(element){
//     return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
// }

// let number = [1, 2, 3, 4, 5];
// let squaredNumber = number.map(square);
// let cubedNumber = number.map(cube);

// console.log(cubedNumber);


// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }


//--------------- 31. forEach  --------------------------------------------------------------


// let fruits = ["apple","banana","coconut","orange",];

// fruits.forEach(capitalize);
// fruits.forEach(displayNumber);

// function lowerCase(element,index,arr){
//     arr[index] = element.toLowerCase();
// }
// function upperCase(element,index,arr){
//     arr[index] = element.toUpperCase();
// }

// function capitalize(element,index,arr) {
//     arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }



   
// let number = [1, 2, 3, 4, 5];
// number.forEach(cube);
// number.forEach(displayNumber);

// function double(element, index, arr){
//     arr[index] = element * 2;
//     // console.log(element);
// }
// function square(element, index, arr){
//     arr[index] = Math.pow(element, 2 );
//     // console.log(element);
// }
// function cube(element, index, arr){
//     arr[index] = Math.pow(element, 3);
//     // console.log(element);
// }

// function displayNumber(element){
//     console.log(element);
// } 

//--------------- 30. Callback  --------------------------------------------------------------

// function hello(Callback , x , y){
//     document.getElementById("myH3").innerHTML = Callback(x,y)
//     return Callback(x,y);
// }

// function add(a,b){
//     return a + b;
// }

// console.log("Sum is " +  hello(add,10,20));

//--------------- 29. Random Password generator  --------------------------------------------------------------

// function generatePassword(passLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbol){

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbolChars = "!@#$%^&*_+-=";
//     let allowChars = "";
//     let password = "";

//     allowChars += includeLowerCase ? lowercaseChars : "";
//     allowChars += includeUpperCase ? uppercaseChars : "";
//     allowChars += includeNumbers ? numbers : "";
//     allowChars += includeSymbol ? symbolChars : "";

//     console.log(passLength);
//     // console.log(allowChars);
//     if(passLength <= 0){
//         return "please enter at least 1 number of password";
//     }
//      if(allowChars.length === 0){
//         return "please select at least 1 char option";
//     }
//     for (let i = 0; i < passLength; i++) {
//        const randomIndex = Math.floor(Math.random() * allowChars.length);
//        password += allowChars[randomIndex];
//        console.log(password);
       
//     }
//     return password;
// }


// let passLength = 12;
// let lowercaseChars = true;
// let uppercaseChars = true;
// let numChars = false;
// let symChars = false;

// let passwords = generatePassword(passLength,lowercaseChars,uppercaseChars,numChars,symChars);

// console.log("This is the password "+passwords);





// function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSpecial){

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const numbers = "0123456789";
//     const symbolChars = "*&^%$#@!_+-=";

//     let allowChars = "";
//     let password = "";

//     allowChars += includeLowerCase ? lowercaseChars : "";
//     allowChars += includeUpperCase ? uppercaseChars : "";
//     allowChars += includeNumbers ? numbers : "";
//     allowChars += includeSpecial ? symbolChars : "";

//     console.log(allowChars);
//     if(length <= 0){
//         return`(Password length must be at least 1)`
//     }
//     if(allowChars.length === 0){
//         return`(At least 1 set of charactor needs to be selected)`
//     }
//     for (let i = 0; i < length; i++) {
//         const rendomIndex = Math.floor(Math.random() * allowChars.length);
//         password += allowChars[rendomIndex];
        
//     }
//     console.log(length);
    
//     return password;

// }

// const passLength = 12; 
// const includeLowerCase = true; 
// const includeUpperCase = true; 
// const includeNumbers = true; 
// const includeSpecial = false;

// const password = generatePassword(passLength,includeLowerCase,includeUpperCase,includeNumbers,includeSpecial);
// console.log(password);


//--------------- 28. Dice Roller program  --------------------------------------------------------------

// function rollDice() {

//     const numOfDice = document.getElementById("numOfDice").value;
// const diceResult = document.getElementById("diceResult");
// const diceImage = document.getElementById("diceImage");
// const values = [];
// const image = [];

// for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     // console.log(value);
//    values.push(value);
//    image.push(`<img src = "image/${value}.png" alt = "Dice ${value}">`);
// } 
// diceResult.textContent = `dice ${values.join(", ")}`;
// diceImage.innerHTML = image.join("");
// }



//--------------- 27. Rest oprator  --------------------------------------------------------------


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

// let inputTemp = document.getElementById("inputTemp");
// let toFehrenhite = document.getElementById("toFehrenhite");
// let toCelsius = document.getElementById("toCelsius");
// let result = document.getElementById("result");
// let temp;

// function convert(){
//     event.preventDefault();
//     if(toFehrenhite.checked){
//         temp = Number(inputTemp.value);
//         temp = temp * 9/5 + 32;
//         // result.textContent = "You selected C to F";
//         result.textContent = temp.toFixed(1) + "F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(inputTemp.value);
//         temp = (temp - 32) * (5/9);
//         // result.textContent = "You selected F to C";
//         result.textContent = temp.toFixed(1) + "C";
//     }
//     else{
//         result.textContent = "Select Unit";
//     }

// }



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