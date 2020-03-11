/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/
// data = [1, 2, 3, 4, 5];

// for(i = 0, size = data.length/2; i < size; i++) {
//   buffer = data[i];
//   data[i] = data[data.length - (1 + i)];
//   data[data.length - (1 + i)] = buffer;
// }

// document.write(data.join('!'));

// document.write('<ul>');
// for(i = 0; i < data.length; i++) {
//   document.write('<li>' + data[i] + '</li>');
// }
// document.write('</ul>');

/* ---------------------- */
// document.write('<ul><li>');
// document.write(data.join('</li><li>'));
// document.write('</li></ul>');

/* ---------------------- */
data = [1, 2, 3, 4, 5, 6];
count = data.length % 2 ? 1 : 2;
position = Math.ceil(data.length / 2) - 1;

data.splice(position, count);

console.log(data, 'data');
