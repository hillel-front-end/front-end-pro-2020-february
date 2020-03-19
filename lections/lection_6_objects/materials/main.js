// a(2,4,5);
// a(3,4,6); 

// +'13abc'
// parseInt('13abv')



// function foo(callback) {

// }

// function b() {

// }

// foo(function(){});

// c = function() {

// }

// function foo() {
//     return function() {
//         a = 1;
//         b = 2;
//         res = a + b;
//         return res;
//     };
// }

// c = foo();

// console.log(c, 'c');
// console.log(c());

// value = (function(a, b) {
//     res = a + b;
//     return [a, b, res];
// })(1, 2);

// console.log(value);

//-------------------------


// function a() {
//     a();
// }


// a();

function getNumberValue(index) {
    numberValue = prompt();


    if (index < 2 && isNaN(numberValue)) {
        return getNumberValue(++index);
        // do {
        //     numberValue = prompt();
        // } while (isNaN(numberValue));
    }

    return numberValue;
}

// console.log(getNumberValue(0));

//----------- Object Links type -----------

a = [1];
b = a;

a.push(2);

console.log(a, 'a');
console.log(b, 'b');

b.push(3);

c = function() {

}

b = c ;

console.log(a, 'a');
console.log(b, 'b');


function foo(h) {
    h.push('abc');
    console.log(h);
}

g = [123];
console.log(g, 'g');
foo(g)

console.log(g, 'g');

// -------------------------

for(i = 0, res = 0; i < 10; i++) {
    res += i;
}

// 10 + 9 + 8 + 7.. 1


function sum(n) {
    if (n == 1) {
        return 1;
    } 

    return n + sum(--n);
}

sum(3);

arr = new Array(new Array(4), new Array(3),  new Array(new Array(6), new Array(3)));

console.log(arr);