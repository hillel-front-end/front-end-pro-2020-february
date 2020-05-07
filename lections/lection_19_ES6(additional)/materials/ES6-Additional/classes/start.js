// function Car(model) {
//     this.model = model;
// }

// var car = new Car('seat');

// Car.prototype.drive = function() {

// };

class Car {
    a = null;

    constructor(model) {
        this.model = model;
        this.drive = function() {
            
        }
    }

    drive() {

    }
}

console.dir(Car, 'Car');

const vw = new Car('vw');

console.log(vw, 'vw');