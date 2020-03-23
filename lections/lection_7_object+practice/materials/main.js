// for(i = 3, b = []; i <= 6; i++) {
//     b[b.length] = i;
// }


// console.log(b, 'b');

// // arr = new Array(new Array(4), new Array(3),  new Array(new Array(6), new Array(3)));
// arr = new Array(new Array(4), new Array(3),  new Array(new Array(new Array(3)), new Array(3)));


// function arrayFiller(mass) {
//     console.log(mass, 'mass enter')

//     for (var i = 0, max = mass.length; i < max; i++) {
//         if (mass[i] && mass[i].splice) {
//             arrayFiller(mass[i]);
//         } else {
//             mass[i] = Math.random() * 10;
//         }
//     }

//     console.log(mass, 'mass exet');
// }

// arrayFiller(arr);


// ------------------ Object --------------

b = ['Valera',' Ternavsky', 20];
// console.log(b[1]);
// console.log(b[2]);

// person = {
//     name: 'Valera',
//     age: 25
// };
// console.log(person['name'], 'name');
// console.log(person['age'], 'age');
// console.log(person.name, 'person.name');
// key = 'name';
// isName = confirm();

// if (isName) {
//     key = 'name';
// } else {
//     key = 'age';
// }

// console.log(person[key], key,'key');

// console.log(person.key, 'key');


person = {
    name: 'Valera',
    age: 25,
    childrens: ['a', 'b'],
    isMarried: false,
    run: function() {
        console.log(person.name, 'running...');
    },
    b: {
        name: '123'
    }
};

function run() {

}
run();


person.run();

console.log(person.childrens);
// data = person.childrens;

// console.log(person.b.name);


// person.name = 'Petro';

// console.log(person, 'person');

// console.log(++person.age);

// console.log('age' in person, 'person');


// console.log('age2' in person, 'person');

// for(key in person) { // (key in object)
//     console.log(key, person[key], 'key');
// }

// team = [];

// for(i = 0; i < 3; i++) {
//     name = prompt('input name');
//     age = prompt('age');

//     player = {
//         name: name,
//         age: +age
//     };

//     team.push(player);
// }

// console.log(team);

a = {
    a1: 213,
    b1: '123'
}

b = {};

a.z = function() {

}

console.log(b, 'b');

for(key in a) {
    b[key] = a[key];
}

console.log(b, 'b');




console.log(b, 'b');
console.log(a, 'a');





//------------ -----------------

