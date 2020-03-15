// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

foo = function () {

}


function fooSecond () {

}



// function arrayFiller(size) {
//   mass = new Array(size);

//   for(i = 0; i < mass.length; i++) {
//     mass[i] = new Array(size);

//     for(j = 0; j < mass[i].length; j++) {
//         mass[i][j] = Math.random() * (10 - 5) + 5; 
//     }
//   }

//   console.log(mass, 'mass');
// }


// alert('123')
//prompt()

// arrayFiller(5);
// arrayFiller(6);



// function process() {
//     function sum() {

//     }

//     function mul() {

//     }

    
//   mul();
// }


// process();


// function alert() {
//   console.log('custom alert');
// }


// alert();// bad]



// function process(a, b, callback) { // callback = function(a, b) {}

//   if (typeof callback === 'function') {
//     z = callback(a, b);
//     console.log(z, 'z');

//   } else {
//     console.log(callback, 'callback');
//   }

// }

// div = function(a, b) {
//   console.log(a / b);

//   return a / b;
// }

// console.log(div, 'div outer');

// result = div(6, 2);

// process(6, 5, div);




// ------------------ arguments -----------


// function sum(a, b) { // arguments = [1, 2, 'ab', 4, 5, 6]
//   console.log(arguments, 'arguments');

//   for(k = 0, res = 0; k < arguments.length; k++) {
//     if (isNaN(arguments[k])) {
//       return false;
//     }

//     res += arguments[k];
//   }
//   return a + b;
// }


// sum(1, 2, 'ab', 4, 5, 6);


function test() {
   console.log(1 + 1);
   return 'abc';

   console.log('after return');
}

foo = test();
console.log(foo, 'foo');