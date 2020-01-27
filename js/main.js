
// function filterRange(arr, a, b) {
// let brr = arr.filter(num => num > a && num < b) 
//  console.log(brr);
// }

// let array = [1,4,5,8,3,4,2];
// filterRange(array, 1, 6);

// function filterRangeInPlace(arr, a, b) {
//   arr.forEach(function(num, index){
//     if (num > a && num < b) {}
//       else{
//          arr.splice(index, 1);
//       }
//   }) 
//   console.log(arr)
// }
// let array = [1,4,5,8,3,4,2, 3,3,3,3,3,3,3];

// filterRangeInPlace(array, 2, 6)

// let arr = [5, 2, 1, -10, 8];
// arr.sort();
// arr.reverse();

// alert(arr);

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(array) {
  
//   return array.slice().sort();
// }


// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



// function Calculator(){
//   this.calculate = function (str) { 
//     let a = str.split(" ");
//     let c;
//   if (a[1] == "+") {
//      c = (+a[0] + +a[2]);
//     } else {
//        c = (+a[0] - +a[2]);
//     }
//     return c;
//   }

//   this.addMethod = function(name, func) {
//     return this.name = this.func;
//     }
     
  
  
// }

// let calc = new Calculator;

// alert( calc.calculate("3 - 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);


  
 

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.forEach(item=> fullName = item.name + item.surname )

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// console.log(usersMapped);
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин



// function sumSalaries(array) {
//   let babki = Object.values(array);
//   let sam = 0;
//   for (let sum of babki) {
//     sam = sum + sam; 
//   }
//   return sam;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//    return (Object.keys(obj)).length;
// }

// let user = {

//   age: 30
  
// };

// alert( count(user) ); // 2
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//    return (Object.keys(obj)).length;
// }

// let user = {

//   age: 30
  
// };

// alert( count(user) ); // 
// alert( count(user) ); // 2
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//    return (Object.keys(obj)).length;
// }

// let user = {

//   age: 30
  
// };

// alert( count(user) ); // 
// alert( count(user) ); // 2
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function count(obj) {
//    return (Object.keys(obj)).length;
// }

// let user = {

//   age: 30
  
// };

// alert( count(user) ); // 


// let a = (1.5 - 1) * 2;

// alert(a);


let a = (1.5 - 1) * 2;

alert(a);