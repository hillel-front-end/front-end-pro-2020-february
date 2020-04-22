console.log('Lection_1');
window.onload = function() {
// var box = document.getElementById('box');
var box = document.querySelector('.box');

console.dir(box, 'box');

/*
Dom navigation
*/

/*events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
], 

*/

function handler() {
    console.log('event', this);
}

// box.onclick = handler;
// box.onmousemove = handler;
// box.onmousedown = function() {
//     console.log('onmousedown');
// };

// box.onmouseup = function() {
//     console.log('onmouseup');
// };


box.onmouseover = function() {
    console.log('onmouseover', this);
    this.classList.add('over');
};

box.onmouseout = function() {
    console.log('onmouseout', this);
    this.classList.remove('over');
};

box.oncontextmenu = function() {
    console.log('contextmenu', this);
};


/*
Coords
*/




}

