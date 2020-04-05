// call apply bind


var personOne = {
    name: 'Valer',
    lastName: 'Avaaca'
};


var personTwo = {
    name: 'Halera',
    lastName: 'Aaaa'
};

// function run(a, b) {
//     console.log(a, b, 'a, b');
//     console.log(this.name + ' ..running');
// }

// personOne.run = run;
// personTwo.run = run;

// personOne.run();
// delete personOne.run;

// personTwo.run();
// delete personTwo.run;

// console.dir(run, 'run');

// run.call(personOne); //  personOne.run();

// run.call(personTwo, 1,2);// personTwo.run(1, 2)

//--------- apply -----------


function run(a, b, c) { // var a = data[0], b = data[1], c = data[2]
    console.log(arguments, 'arguments');

    // console.log(this.name + ' ..running');
    this.foo = '123';
    return this.name;
}

console.log('call:');

//1)run(); this == window
//2) personTwo.run(1,2,3) // this === personTwo
//3) run.call/apply(obj) this == obj

// obj.a = function() {
//     console.log('from a');
// }

// obj.a.call(personOne);

// console.log(personOne)

// var a = obj.a;
// a.call(personOne);

// var result = run.call(personOne, 1, 2); // === personOne.run(1, 2);
// console.log(result, 'result');


// console.log('apply with data = [1,2 ]:');
// var data = [1, 2];
// run.apply(personTwo, data);

// data.push(3);

// console.log('apply with data = [1,2, 3]:');
// run.apply(personTwo, data); //  === personTwo.run(1,2,3)

// console.log(personOne);



// function run(a, b, c) { 
//     this.foo = '123';
// }

// run.call(personOne);


// console.log(personOne, 'personOne');