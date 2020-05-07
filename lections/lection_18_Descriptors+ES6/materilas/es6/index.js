/*
  let, cosnt - example with setTimeout
  arrow  - example with onclick(when not to use)
*/


// ---------- let const(Object.freeze()) -------------

// var 
// console.log(a, 'a'); error

let a = 12;

// let a = 13; // a

if (true) {
  let z = 13;
}


var boxes = document.querySelectorAll('.good');
// console.log(z, 'z'); error
console.log(boxes, 'boxes'); 
for(let i = 0; i < boxes.length; i++) {

  // boxes[i].onclick = (function(i) {
  //   return function() {
  //     console.log(i, 'i');
  //   }
  // })(i)

  boxes[i].onclick =  function() {
        console.log(i, 'i');
  }

}


// ------------- const ----------
let h = '123';

h = '111';

const PI = 3.14;

// PI = 14;

let _name = 13;

const FULL_NAME = 12;

console.log(FULL_NAME, 'FULL_NAME');

const data = {
  name: 'Valera'
};

// data = {
//   name: 'Pety'
// }

Object.freeze(data);

data.name = 'Pety';

console.log(data, 'data');




// console.log('after loop for', i);


// ---------- arrow -------


// let toDo = () => {
//   console.log('toDo');
// };

// toDo();


// ---- 1 ------
// let toDo = foo => {
//   console.log('toDo');
// };


let toDo = foo => console.log('toDo', foo);

let persons = [
  {
      name: 'Valera',
      age: 12,
      isMarried: true
  },
  {
      name: 'Vaasdera - 2',
      age: 17,
      isMarried: true
  },
  {
      name: 'Vaasdera - 3',
      age: 21,
      isMarried: false
  }
];

const dataSecond = persons
       .filter(person => person.isMarried)
       .map(person => person.name);

console.log(dataSecond, 'data');

// 2 - 3

let a1 = () => {
  // console.log(arguments, 'arguments');/// error
  // console.log(this, 'this');
}

a1();

let obj = {
  z: () => {
    console.log(this, 'this');
  },
  k: function() {
    console.log(this, 'this');

    let a1 = () => {
      console.log(this, 'this'); //this =  SCOPE-K.this
    };


    a1();
  }
}

// obj.z();
obj.k();

// function foo() {
//   let a1 = () => {
//     console.log(arguments, 'arguments');/// error
//   };

//   a1(); 
// }

// foo(1, 2, 3);
