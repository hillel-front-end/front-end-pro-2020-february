// ---------- template string -----
let person  = {
    name: 'Valera',
    age: '25',
    sureName: 'Vaaa'
};

const personInfo = person.name + " " + person.age + " " + person.sureName;

let block = {
    width: '200px',
    height: '200px',
    content: 'tetewt asdas asd as dasd',
    getContent(end) {
        return `${this.content + end}`
    }
};

let htmlBlock = '<div style="width:' + block.width + ';' + 'height:' + block.height +  ';"' + '>' +  block.content + '</div>';

// console.log(htmlBlock, 'htmlBlock');
document.body.innerHTML = htmlBlock;



let str = `<div style="width:${block.width}; height:${block.height}">
                ${block.getContent("Hello world")}
           </div>`;

document.body.innerHTML += str;

const goods = [
    { name: 'juice', coast: 1, isBougth: false },
    { name: 'cola', coast: 2, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: true }
];

const markup = `
 <div class="goods">
    ${ 
        goods
        .map(good => `<div class="good ${good.isBougth? 'dissable' : ''}"> ${good.name},  ${good.coast} </div>`)
        .join('<br />')
     }
 </div>
`;

// console.log(markup, 'markup');

document.body.innerHTML = markup;



// ---------- default params, destructuring, ----
console.log('---------- default params, destructuring, ----');

let foo = {
    width: '200px',
    height: '200px',
    content: 'tetewt asdas asd as dasd',
    z: {
        hello: 123
    },
    getContent(end) {
        return `${this.content + end}`
    }
};

// const width = foo.width;
// const height = foo.height;
// const content = foo.content;

const {width:go, height, content, z: {hello}} = foo;

console.log(go, 'go');
console.log(hello, 'hello');
console.log(foo.z.hello, '');
// console.log(width, height, content);


function getTemplate({width, height, getContent}, c1) { // const {width, height, content} = foo;
    console.log(arguments[0], 'arguments[0]');

     return `<div style="width:${width}; height:${height}">
        ${getContent.call(arguments[0], "Hello world")}
    </div>`;
}

console.log(getTemplate(foo, 'aaaaa'));

const arr = ['first', 'second', 'c1', 'c2', 'c3', [1 , 2]];

let first = arr[0];
let second = arr[1];


const [a, b, , c2, c3, [o, b2]] = arr; // a = arr[0], b = arr[1]

console.log(a, b, 'a, b');
console.log(c2, c3);
console.log(o, b2);

const data = ['first', 'second'];

[data[1], data[0]] = [data[0], data[1]]; //data[1] ='first', data[0] = 'second' 

var swap = data[0];
data[0] = data[1];
data[1] = swap;

console.log(data, 'data');
const arr = [1,2,3];

// ----------   ----