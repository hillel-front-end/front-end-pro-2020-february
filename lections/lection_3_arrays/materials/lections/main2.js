/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
*/

// ----------------------- Math -------------

// i = i + 1;
// // i += 1;
// i = 0;
// //++i , i++

// // sum = i++; --i, i--
// sum = ++i;
// console.log(sum, 'sum');

// for(i = 0; i < 5; i++) {

//   for (j = 0; j < 5; j++) {
//     document.write(i + ' ' + j);
//   }

//   document.write('<br />')
// }

/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.

  Math.random() - получени случайного числа от 0 - 1

  Форумула получени случайного числа в диапазоне от min (включительно) до max 
  (не включительно):
  
  Math.random() * (max - min) + min;
*/

// console.log(Math.round(1.5), 'Math.round(1.5)');
// console.log(Math.round(1.4), 'Math.round(1.4)');
// console.log(Math.floor(1.5), 'Math.floor(1.5)');
// console.log(Math.ceil(1.5), 'Math.ceil(1.5)');

// console.log(Math.round(Math.random() * (20 - 10) + 10), 'random');

// ----------------------- Array -----------------
// g = 'ggg';

// arr = ['aaa', 'bbb', 'ccc', g];

// console.log(arr, 'arr');

// b = arr[1]; // 'bbb'

// console.log(arr.length, 'length');

// console.log(arr[0], 'first');

// console.log(arr[arr.length - 1], 'length - 1');


// // arr.length = 20;


// console.log(arr[30], 'arr[30]');
// // arr[30] = '111';

// console.log(arr, 'arr');


// mass = new Array(10, 10);

mass = new Array(3);

console.log(mass, 'mass');

// for(i = 0; i <= mass.length; i++) {
//     mass[i]= Math.round(Math.random() * (20 - 10) + 10);
// }

// mass[mass.length - 1] = 4;

console.log(mass, 'mass');

