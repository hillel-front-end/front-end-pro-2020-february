// var obj = {
//     name: 'Valera',
//     getName: function(a, b, c) {
//         console.log(this.name, 'name');
//         console.log(a + b);
//     }
// };


// function getSecondName(a, b, c, d) {
//     console.log(this.name, 'name');
//     for(var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i], 'i');
//     }
// }

// var objSecond = {
//     name: 'Pety'
// };

// obj.getName(1, 2);
// obj.getName.call(objSecond, 1, 2);

// var data = [1,3,4];
// data.push({a:2})

// getSecondName.apply(obj, data);

// -------- bind -----------

// var objSecond = {
//     name: 'Pety'
// };



// function bind(context) { 
//     var fn = this;

//     return function(arg) {
//         return fn.call(context, arg);
//     }
// }




// function getSecondName(a, b, c, d) {
//     console.log(this, 'name');
// }

// var _getSecondName = getSecondName.bind(objSecond);

// _getSecondName();
// _getSecondName();
// getSecondName.call(objSecond);


// var obj = {
//     name: 'Valera',
//     getName: function() {
//         console.log(this, 'this');
//     }
// };

// function _setTimeout(callback, ms) { ///callback = obj.getName, callback === obj.getName
//     callback();
// }
// console.log(obj.getName.bind(obj), '(obj.getName.bind(obj)');



// setTimeout(obj.getName, 5000);
// setTimeout(obj.getName.bind(obj), 5000);

// --------------------------------------------------

// function foo() {
//     console.log(arguments, 'arg');
//     // var mass = [];
//     // var slice = mass.slice;

//     // var data = slice.call(arguments); // argument.slice = slice; argumets.slice(); delete argumets.slice
//     // console.log(data, 'data');
//     var data = [].slice.call(arguments);
//     console.log(data, 'data');
// }

// foo(1, 2, 3);

// ----------------------------------- OOP ----------------------


/*
    class User {
        contructor() {

        }
    }
*/

// var person = {
//     name: 'Valera',
//     lastName: 'Ternavsky',
//     age: '25'
// }

function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.play = function() {

    }
}

var pety = new User('Pety', 'Ternavskiy', 25); 
/*
1) new -> {}(*)
2)call User()
3)this == (*), this == {}

*/

var valera = new User('Valera', 'Ternavskiy', 25);

console.log(pety, 'person');
console.log(valera, 'valera');

var team = [];
team.length = 2;

for(var i = 0, max = team.length; i < max; i++) {
    var name = prompt('Name');
    var lastName = prompt('LasName');
    var age = prompt('age');

    team[i] = new User(name, lastName, age);
}

console.log(team, 'team');

