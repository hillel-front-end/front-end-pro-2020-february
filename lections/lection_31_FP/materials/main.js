// const R = require('ramda');  npm i ramda


//0. --------------- Импертивность и Декларативность  ---------------------

const data = [1, 2, 3, 4];
const isOdd = x => x % 2 != 0;
// const newArr = [];

// for(const i = 0; i < data.length; i++) {
//     if (isOdd(data[i])) {
//         newArr[newArr.length] = data[i];
//     }
// }

const newArr = data.filter(isOdd);



// 1. -------------- Чистота ----------------

/*
    http://joxi.ru/RmzwjZlSRBKox2

    1)Чистые функции не имеют побочных эффектов.(не влияет на свое окружене)
    2)Все полезные чистые функции должны возвращать что-нибудь.
    3)Чистая функция всегда возвращает одинаковые значения для одинаковых входных данных.
*/

// var c = 12;



// function a() {
//     c = 22;
// }


// a()


// bad
// function sum(a, b) {
//     return a + b + c;
// }

// const c = 12;
const c = Object.freeze({
    g: 12
});


c.g = 14;

function sum(a, b) {
    return a + b + c.g;
}

// sum(1, 2); // 3
// sum(1, 2) // 3

// sum(1, 2) // 25
console.log(sum(1, 2))

console.log(sum(1, 2))

    
/*
    Цель чистоты — не сделать полностью весь код чистым, а оптимизировать там где это возможно,
    так как  все чистым сделать не получится

    sendAjax('add-new-user'), fetch('/get-user-info-by-id', id)
    fs.writeFile('file.json' callback) 
    // element.addEventListener
    // Math.random()
    // Date.now
*/


// 2. -------------- Неизменяемость ----------------


/* 
  2.1)В функциональном программировании нет переменны 
  инными словами, все переменные являются const, вместо этого делаются копии переменных
*/

// let, var , for, while, do while, push, pop, shift, unshift

// for(const j = 0, res = 0; j < 5; j++) {
//     res += j;
// }

// mutation 
 
function sumRange(j, to, res) {
    if (j < to) {
        return res;
    }

    sumRange(from + 1, to, result + j);
}

sumRange(0, 5, 0);

const obj = Object.freeze({
    key: 12,
    f: 12
});


const obj2 = Object.freeze({
    ...obj,
    key: 12,
});


const fooData = [1, 2, 3];
// const fooData2 = [ // push
//     ...fooData,
//     5
// ]
// fooData.length -= 1; // bad

// const fooData2 = fooData.slice(0, -1); // pop -- >good
// const fooData2 = fooData.concat(4,5,6); // good --> unshift
// const fooData2 = fooData.slice(1); // good -> shift
// console.log(fooData, 'fooData');
// console.log(fooData2, 'fooData2');

// const increment = (i, step) => i + step;
// const i = increment(0, 1);

// console.log(i, 'i');

// console.log(increment(i, 1));


// --------------- Функции высшего порядка  ------------
/*

* Функции высшего порядка либо принимают функции как параметры, либо возвращают их, 
    либо и то, и другое одновременно.

* Замыкание — область видимости функции, которая сохраняется благодаря ссылке на эту функцию.
*/


// function toDo(a, b, callback) {
//     return callback(a, b);
// }

// toDo(1, 2, (a, b) => a + b)

// map, filter, reduce -- представители ф-й высшего порядка в JS

// ------------- Композиция функций((f ∘ g)(x)) --------------


// const toDo = (value) => ((value + 1) * (value + 1)).toString();

const sumPlusOne = x => x + 1;
const square = x => x * x;
const getString = x => x.toString();

const toDo = (value) =>  getString(square(sumPlusOne(value)));

console.log(toDo(5));
console.log(toDo(5));


const compose = (x, y, z) => v => x(y(z(v)));
const pipe = (x, y, z) => v => z(y(x(v)));

console.log(
    compose(
        getString,
        square,
        sumPlusOne
    )(2)
);

// R.compose()
// R.pipe()

//Ramda

// универсальные ф-ии compose и pipe

let compose = (...fns) => x => fns.reduce((v, f) => f(v), x);

let pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// console.log(typeof toDo(2), 'todo');
// ------------- Каррирование --------------

// const sum2 = (a, b) => a + b;

const sumCary = a => {
    return b => a + b 
}; 

const a = sumCary(1)(2);

// console.log(a(2), 'a(2)');
/*
 Каррированная функция (*) — это функция, принимающая один аргумент за раз.
*/


/*  
    Мы можем очень легко решить эту проблему, уменьшив количество входных данных до одного для всех функций.
    При помощи (*) мы можем легко решить эту поблему:
*/





// ---------- частичыное применение (HW) -------------

/*
    ЧПФ - превращает ф-ю в ф-ю с меньшим числом параметров
*/















