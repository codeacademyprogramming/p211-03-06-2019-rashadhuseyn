"use strict";

//context
//javascript object notation - json

//p211.json

// const data = {
//   info: {
//     students: [
//       { name: "Samir", surname: "D", scores: [100, 100, 100] },
//       { name: "Aqil", surname: "A", scores: [90, 89, 88]},
//       { name: "Sebuhi", surname: "H", scores: [12, 34, 21]}
//     ],
//     teachers: [
//       {name: "", surname: "", salary: 2390823},
//       {name: "", surname: "", salary: 12323},
//       {name: "", surname: "", salary: 12321}
//     ]
//   }
// }

// var talkToMe = function(){
//   return "My name is RadKjan";
// }

// let talkToAqil = function(){
//   return "My name is Ata";
// }

// let add  = (n1, n2) => n1 + n2;

// let subtract = (n1, n2) => n1 - n2;

// const numbers = [10, 15, 22, 43];

// const filteredNumbers = numbers.filter(number => {
//   return number % 2 === 0;
// });

// const total = numbers.reduce((sum, currentNumber) => (sum += currentNumber));

// const oddNumbers = [11, 15, 93, 25];
// const allNumbers = [8, 10, 24, 88, ...oddNumbers, 43, 23, 56];

// const sumNumbers = (...numbers) => {
//   console.log(numbers);
// }


// sumNumbers(10, 15, 20, 34, 4, 12, 2);

// const allMains = Array.from(document.querySelectorAll(".wrapper .main"));
// const allMains2 = [...document.querySelectorAll(".wrapper .main")];

// allMains2.map(main => {
//   return main.style.backgroundColor = "maroon";
// })

//null undefined Symbol


const mainImg = document.querySelector(".main-img-wrapper img");

const allImages = [...document.querySelectorAll(".list img")];

allImages.forEach(function(el){
  el.onclick = function(){
    const newImageSrc = el.getAttribute("src");
    mainImg.setAttribute("src", newImageSrc);

    const oldActive = document.querySelector(".list li.active");
    oldActive.classList.remove("active");
    el.parentElement.classList.add('active');
  }
})
