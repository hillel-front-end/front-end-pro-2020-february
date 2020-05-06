

// ---- geetter| setter ---------


// function getValue() {
//     return '!!';
// }

// var info = {
//     house: '12',
//     street: 'Obolon',
//     get address() {
//      return this.house + " " + this.street + ' ' + getValue();
//     },
//     set address(value) {
//         var _address = value.split(' ');
//         this.house = _address[0];
//         this.street = _address[1];
//     }
// };

// console.log(info.street, 'steet');

// console.log(info.address, 'address');

// info.address = '21 Obolon';

// console.log(info, 'info');


// descriptors
/* 
    Object.defineProperty(obj, prop, descriptor)
        obj - Объект, в котором будум настраивать свойство.
        prop - имя настраемого свойства
        descriptor - объект настройки свойства.


    descriptor: {
        value: значение свойства. по умолчанию undefined,
        writable: значение свойства можно менять, если true. По умолчанию false,
        configurable: если true, то свойство можно удалят/менять его в
                       дальнейшем при помощи новых вызовов defineProperty.
                       По умолчанию false,
        enumerable: если true, то свойство просматривается 
                    в цикле for..in и методе Object.keys(). По умолчанию false.,
        get – функция, которая возвращает значение свойства. По умолчанию undefined
        set – функция, которая записывает значение свойства. По умолчанию undefined.
    }

    Запрещено использовать:
    * одновременно get/set и value
    * указывать writable при наличии get/set-функций.
*/

// var info = {
//     house: '12',
//     street: 'Obolon'
// };

// Object.defineProperty(info, 'address', {
//     // value: '123',
//     // writable: false, 
//     configurable: false,
//     enumerable: false,
//     get() {
//         return this.house + " " + this.street;// this.street? getStreet() : getHouse()
//     }, 
//     set(value) {
//         var _address = value.split(' ');

//         if (_address && _address.length > 1) {
//             var _address = value.split(' ');
//             this.house = _address[0];
//             this.street = _address[1];
//         } 
//     }
// });

// for(var key in info) {
//     console.log(key, 'in info');
// }

// console.log(info.address, 'info.address ');

// info.address = '21 Obolon';

// console.log(info, 'info');


// Object.defineProperty(info, 'address', {
//     writable: true, 
// });


// function Cat(name) {
//     Object.defineProperty(this, 'name', {
//         value: name,
//         writable: false
//     });
// }


// var cat = new Cat('Sharik');

// cat.name = 'Murzik';

// console.log(cat, 'cat');

/* 
 forEach
 filter, 
 map, 
 some, 
 every
*/

//--------------- forEach, Filter, Map, [Reduce,some, every(HW)],  -- ES-5 -----------------

var persons = [
    {
        name: 'Valera',
        age: 12,
        isMarried: true
    },
    {
        name: 'Vaasdera - 2',
        age: 17,
        isMarried: true
    },
    {
        name: 'Vaasdera - 3',
        age: 21,
        isMarried: false
    }
];


persons.forEach(function(item, index) {
    console.log(item, index, 'item');
});


// var newData = persons.map(function(item, index) {
//     if (item.isMarried) {
//         return item.isMarried;
//     } else {
//         return 'empty';
//     }
// });

// var newData = persons.filter(function(item, index) { // []
//     return item.age > 18;
// });

// console.log(persons, 'persons');
// console.log(newData, 'newData');

// var a = persons
//  .filter(function(item) {
//     return item.isMarried;
//  })
//  .map(function(item) {
//      return item.age;
//  });




//  console.log(a, 'a');