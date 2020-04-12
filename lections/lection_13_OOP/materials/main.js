
// console.log('Lection 12');

// function a() {
//     console.log(this)
// }

// obj = {
//     name: 'valera'
// }

// // a = a.bind(obj);

// a();


function Component (a) {
    this.a = a;
}

// var component = new Component(1);

// var mass = new Array();


// console.dir(Component, 'Component');


function HTMLElements(type) {
    this.type = type;

    if (type == 'a') {
        this.redirect = function() {
            console.log('redirect');
        }
    } else if (type == 'img') {
        this.showPicture = function() {
            console.log('show picture');
        }
    } else {
        console.log(type + ' is not difined');
    }
}

console.log(HTMLElements.prototype , 'prototype');



HTMLElements.prototype.render = function() {
    console.log('render');
};

HTMLElements.prototype.click = function() {
    console.log('click ..');
};

var a = new HTMLElements('a');
var a1 = new HTMLElements('a');
var img = new HTMLElements('img');


// console.log(img.click());
console.log(a , 'a ');
console.log(a1 , 'a11 ');
console.log(img , 'img ');






