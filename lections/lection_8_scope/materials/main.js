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

// var a = 12
// b = 15;

// function todO() {

// }

// console.log(window, 'window'); //var obj = {}

// console.log(window.a, a, 'b');
// console.log(window.b, 'b');


// local scope --> LE
g = 12;// window.g

// function sum() {
//     /* LexicalEnviroment = {
//         a:undefined, 
//         b: unedefined, 
//         exp: undefined,
//         toDO: function(){}
//     } (LE)
//     */
//     g = 15;
//     var a = 2;
//         /* LexicalEnviroment = {
//         a:2, 
//         b: unedefined, 
//         exp: undefined,
//         toDO: function(){}
//     } (LE)
//     */

//     var b = 13;
//        /* LexicalEnviroment = {
//         a:2, 
//         b: 13, 
//         exp: undefined,
//         toDO: function(){}
//     } (LE)
//     */
//     var exp = function() {};
//     /* LexicalEnviroment = {
//         a:2, 
//         b: 13, 
//         exp: function() {},
//         toDO: function(){}
//     } (LE)
//     */
//     function toDo(){}

//     /* LexicalEnviroment = {
//         a:2, 
//         b: 13, 
//         exp: function() {},
//         toDO: function(){}
//     } (LE)
//     */
//     console.log(a, b);
// }

// sum();

// console.log(a, 'a');

// --------- [[scope]] ---------
// var g = 14;

// function foo() {
//     //LE = {a: undefined, z: function(){}, scope: window}
//     var a = 12;
//     //LE = {a: 12, z: function(){}, scope: window}
//     function z() {}
//     console.log(a, 'a');
//     // g = 15;
    

//     console.log(g, 'g'); // window.g
//     var sum = a + g;

//     h = function() {

//     }
//      //LE = null;
// }

// foo();
// foo();

// var j = 17;

// function sum (a, b) {
//     // LE = {a:1, b:2, scope: window }
//     var j = 15;
//     // LE = {a:1, b:2,j: 15, scope: window }

//     console.log(j, 'j');// 
// }

// function z() {
//     var j = 12;
//     sum()
// }

// z();

// var z = 12;
// // z = 12;

// function a1() {
//     // LE-a1= {z: 16 scope: window}
//     // var z = 16;
//     //  z = 12;
//     function a2() {
//         var a = 'abc';
//         //LE-a2 = {a: 'abc', scope: LE-a1}
//         // z = 21;

//         console.log(z, 'z');// LE-a2.z

//     }

//     a2();
// }

// a1();

var a = 12;

function z1() {
    // LE = { scope: window}
    console.log(a, 'a'); // 17(4) undeifined(3) 12(3)

     a = 17;

}
z = [[1,2,3,3.1,3.2,3.3, 3.4], 4, 5];
arr(z); // [1,2,3,4,5,6,7,8]
window.i = 6;

function arr(data, newArr) {
    i = 0;
    console.log(i, 'i enter');
    for(; i < data.length; i++) {
    
        if (Array.isArray(data[0])) {
            arr(data[i], newArr)
        } else {
            newArr = data[i];
        }
    }

    console.log(i, 'i exit');
}