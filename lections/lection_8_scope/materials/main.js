// -------- hoisting --------------
// z = undefined;
// b = undefined;
// foo = undefined;
/*
    function toDo(str) {
        console.log('to Do ' + str);
    }
*/
// console.log(z, 'z');
// console.log(b, 'b');
// console.log(foo, 'foo');

// console.log(toDo, 'toDo declaration');

// toDo(123);



// var z = 'abc';
// var b = 10;

// console.log(foo()); // undefined() -> Error

// var foo = function() {
//     console.log(123);
// };

// foo(); // 123


// toDo('before');// before

// function toDo(str) {
//     console.log('to Do ' + str);
// }

// var toDo = function() {
//     console.log('expression');
// }

// toDo('after');//after


// Global scope --> window 

var a = 12
b = 15;

function todO() {

}

console.log(window, 'window'); //var obj = {}

console.log(window.a, a, 'b');
console.log(window.b, 'b');

