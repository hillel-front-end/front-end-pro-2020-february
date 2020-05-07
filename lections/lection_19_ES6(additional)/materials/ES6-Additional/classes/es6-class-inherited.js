class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }

    drink() {
        this.thirst -= 10;
        return this.thirst;
    }

    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log('Bark bark I\'m a dog');
    }
}

const bim = new Animal('Bim');
const sharik = new Dog('Sharik');