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


// box.onmouseover = function(event) {
//     console.log('onmouseover', this);
//     this.classList.add('over');
// };

// box.onmouseout = function() {
//     console.log('onmouseout', this);
//     this.classList.remove('over');
// };

// box.oncontextmenu = function(){
//     console.log('contextmenu', this);
// };

// function handlerFirst() {
//     console.log('to do something handlerFirst');
// }

// function handlerSecond() {
//     console.log('to do something handlerSecond');
// }

// box.onclick = handlerFirst;
// box.onclick = handlerSecond;

// box.addEventListener('click', handlerFirst);
// box.addEventListener('click', handlerSecond);

/*
Coords
*/

// function handlerFirst(event) {
//     console.log(event.type);
//     console.log(event.clientX, 'clientX');
//     console.log(event.clientY, 'clientY');

//     console.log(event.pageX, 'pageX');
//     console.log(event.pageY, 'pageY');

//     console.log(event.offsetX, 'offsetX');
//     console.log(event.offsetY, 'offsetY');

// }

    var boxes = document.querySelectorAll('.box');

    function initDragAndDrop(box) {
        var state = {
            shiftX: 0,
            shiftY: 0
        };

        var draggable = {
            onDrag: function(event) {
                console.log('drag START');
                state.shiftX = event.offsetX;
                state.shiftY = event.offsetY;
                document.addEventListener('mousemove', this.onMove);
            },
            onMove: function(event) {
                var x = event.clientX - state.shiftX;
                var y = event.clientY - state.shiftY;
                box.style.backgroundColor = getRandomColor();
                box.style.top = y + 'px';
                box.style.left = x + 'px';
            },
            onDrop: function() {
                console.log('drag STOP');
                document.removeEventListener('mousemove', this.onMove);
            }
        };

        box.addEventListener('mousedown', draggable.onDrag.bind(draggable));
        box.addEventListener('mouseup', draggable.onDrop.bind(draggable) )
    }

    [].forEach.call(boxes, function(box) {
        initDragAndDrop(box);
    });

    function getRandomColor() {
        return 'rgb(' +  getRandom(0, 256) + ',' + getRandom(0, 256) + ',' + getRandom(0, 256) + ')';
    }

    function getRandom(min , max) {
        return Math.ceil(Math.random() * (max - min) + min); 
    }

}




