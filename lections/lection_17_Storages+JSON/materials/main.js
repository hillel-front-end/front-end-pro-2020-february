console.log('Lection_20');



window.onload = function() {




// localStorage
// sessionStorage

// localStorage.setItem('lalala', 123); /// setItem(key, value);

// document.body.append(localStorage.getItem('lalala')); /// getItem(key);

var input = document.querySelector('#foo');

input.oninput = function() {
    localStorage.setItem(this.id, this.value);
}

document.querySelector('#foo').value = localStorage.getItem('foo');


// --------- Serialase JSON -----------


// var obj = {
//     "name": "Valera",
//     "age": 123,
//     "isMarried": true,
//     "foo": null
// };

/*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.

*/

// console.log(JSON);// JSON.stringify() JSON.parse()

var obj = {
    name: 'Valera',
    age: 123,
    isMarried: true,
    foo: null
};

console.log(obj, 'obj');

var objAsString = JSON.stringify(obj);

// console.log(typeof objAsString, 'objAsString');
// localStorage.setItem('auth',  objAsString);

var valueFromStorage = localStorage.getItem('auth');
console.log(JSON.parse(valueFromStorage), 'valueFromStorage');

console.log(1);

setTimeout(function(){
    var valueFromStorage = localStorage.getItem('auth');
    console.log(JSON.parse(valueFromStorage), 'valueFromStorage');
    console.log(2);
});

console.log(3);

}


