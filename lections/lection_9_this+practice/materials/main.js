



// var z = 25;
// function foo() {

//     //LE = { a: undefined, scope:window}

//     var a = 12;

//       //LE = {scope:window, a: 12}
//     console.log(z, 'z');

//     //[[Scope]] -> window
// }

// function z() {
//     //[[scope]] -- window
// }


// function b() {
//     var z = 15;
//     foo();

//     function z() {
//         //LE = {scope: LE-b }

//         //[[scope]] --> LE-b
//     }
    
// }

// b();


// ------- Замыкание -----------

//  function sum(a, b) {
//     //  LE = {}
//     return a + b;
//     // LE = null
//  }

//  sum(1, 2);
//  sum(2, 2);


// function counter() {
//      //LE = {scope: LE-Cointer, index: 0 }
//     var index = 0;

//     return function() {
//         //LE = {scope: LE-Cointer }
//         console.log(++index, 'index');
        
//     };
// }

// console.log(counter());

// var iterator = counter();
// counter = null;

// console.log(counter, 'counter');

// iterator();
// iterator();
// iterator();
// iterator();

// function a() {
//     // LE-A = {scope: window}

//     //[[Scope]] = window
// }

// a();

// a = undefined;


// var a = 12;

// b = 13;





// ------------- this ---------
// window.hello = 'World';

function foo() {
    function a() {
        //[[Scope]] = LE-FOO
    }
    
    // console.log(this.hello, 'this');// this === window,
}

// foo();


// function a1() {
//     foo();
// }

// a1();
// //obj.foo()

function getFullName() {
    console.log(this, 'this');
    return this.name + ' ' + this.sureName;
}

var name = 'Global Name'; // window.name
var sureName = 'Global sureName'; // window.sureName

console.log(getFullName());// this == window

var personOne = {
    name: 'Valera',
    sureName: 'ABc',
    getFullName: getFullName,
    children: {
        c1: 1,
        c2: 2
    }
};

var personTwo = {
    name: 'Pety',
    sureName: 'Aaaa',
    getFullName: getFullName
};

console.log(personOne.getFullName());
console.log(personTwo.getFullName());

// console.log(personOne, personTwo);
