/*
    +
    bool
    typeof
    isNaN()
    if else
    logical operators [>,<, >=, <=, ==, ===, !] 
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){} (прим. не парн.)
    for(){for(){}}
*/

/*
  Важно помнить что  такие значения как: 
    1)Число 0, 
    2)пустая строка "", //Любая строка, кроме пустой, в логическом контексте является true.
    3)null 
    4)undefined,
    5)NaN
  - При преобразовании в булевое значние будет === false;
  - Все остальное === true.
 */

// --------------------------------


// a = 12;
// b = '123';

// console.log(!b, '!b');


// console.log(typeof a, typeof '123', typeof true);


// console.log(!!a);


// a = '2';
// b = 2;

// console.log(a, b, 'a, b');;

// console.log(a > b, 'a > b');
// console.log(a < b, 'a < b');
// console.log(a >= b, 'a >= b');
// console.log(a <= b, 'a <= b');
// console.log(a != b, 'a != b');

// console.log(a == b, 'a == b');

// console.log(a === b, 'a === b');


// ------------- if -------------

// value = confirm();

// console.log(value, 'value');

// if (value) {
//   console.log('Хочу войти в класс');
// } else {
//   console.log('Не хочу войти в класс');
// }

// znak = prompt();
// a = 1;
// b = 3;
// if (znak == '+') {
//   console.log(a + b);
// } else if(znak == '-') {
//   console.log(a - b);
//   if (a > b) {
//     console.log(a - b);
//   } else if (b > a) {
//     console.log(b - a);
//   }
// } else {
//   console.log('Invalid value');
// }

// ----- isNaN() && || ----
console.log(isNaN(+'123'), 'isNan');
age = 35;
login = 'notAdmin'

// if ((age > 18 && age < 45) || login === 'admin') {
//   console.log('Входите');
// } else {
//   console.log('else');
// }

// if (age > 18 || login == 'admin') {

// }

// -- --- loops ---------

// do {
//   value = confirm();
//   console.log('send ajax');
// } while(value)

// i = 0;

// do {
//   console.log('send ajax', index);
//   index += 1;
// } while(index < 5);

// while(i < 5) {
//   i += 1;// i = i + 1;
//   console.log(i, 'i');
// }
  

// for(i = 0, res = 0; i < 5; i++) { // i++ == i +=1 == i = i + 1
//   res += i;
// }

// sum = 0;

// for(i = 1, sum = 0, foo = 0;i <= 150; i++) {
//   console.log(i);
//   sum = sum + i; // sum += 1;

//   if (i % 2 == 0) {
//     foo += i;
//   }
// }

do {
  value = prompt('Input value');
  console.log(isNaN(+value));
} while(isNaN(+value))