/*
+ Глобальные обьекты Window, Document
+ setTimeout,  setInterval
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
*/

// DOM - Document Object Model
// Browser object model

//

window.onload = function() {
    // var content = document.getElementById('content');
    // console.dir(content, 'content');

    // var footers = document.getElementsByClassName('footer');

    // // console.log(footers, 'footer');
    // var divs = document.getElementsByTagName('div');

    // console.log(divs, 'divs');

    // var queryFooter  = document.querySelector('.footer');
    // console.dir(queryFooter, 'queryFooter');
    // var queries = document.querySelectorAll('.footer');

    // console.log(queries, 'queries');

    // queryFooter.className = 'foo';


    // this.setTimeout(function() {
    //     // queryFooter.className += ' foo';
    //     queryFooter.classList.add('foo');
    // }, 2000);

    // this.setTimeout(function() {
    //     // queryFooter.className += ' foo';
    //     queryFooter.classList.remove('foo');
    // }, 4000);



    // console.log(queryFooter.classList.contains('footer'));

    // queryFooter.classList.toggle('footer');


    // setInterval(function() {
    //     queryFooter.classList.toggle('footer');
    // }, 1000);

    
    var queries = document.querySelectorAll('.footer');
    console.log(queries, 'queries');

    console.dir(queries[0], 'queries');
    console.log(window.innerHeight, 'innerHeight');
    console.log(window.innerWidth, 'innerWidth');
 
    this.setInterval(function() {
        for(var i = 0; i < queries.length; i++) {
            var maxL = window.innerWidth -  queries[i].clientWidth;
            var maxT = window.innerHeight - queries[i].clientHeight;
            queries[i].style.left = getRandom(0 , maxL) + 'px';
            queries[i].style.top = getRandom(0 , maxT) + 'px';
            queries[i].style.backgroundColor = getRandomColor();
            queries[i].style.width = getRandom(0 , 500) + 'px';
            queries[i].style.height = getRandom(0 , 500) + 'px';
        }
    }, 1000);


    function getRandom(min , max) {
        return Math.ceil(Math.random() * (max - min) + min); 
    }

    function getRandomColor() {
        return 'rgb(' +  getRandom(0, 256) + ',' + getRandom(0, 256) + ',' + getRandom(0, 256) + ')';
    }

    console.log(getRandomColor());
};
 
