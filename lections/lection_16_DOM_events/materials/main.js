/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
*/


window.onload = function() {

    var block = document.querySelector('#block');


    // console.log(block.id, 'id');
    // console.log(block.hello, 'hello');
    // console.log(block.getAttribute('id'), 'id');
    // console.log(block.getAttribute('hello'), 'hello');
    // block.setAttribute('hello', 'world');

    // console.log(block.dataset, 'dataset');

    // this.console.log( block.dataset.value, 'value');

    // for(var key in block.dataset) {
    //     console.log('data-' + key + ' = ' + block.dataset[key]);
    // }

    //--------- create Element --------

  var span =  document.createElement('span');

  console.log(span, 'span');

  span.classList.add('valera');
  span.style.color = 'red';

    // ---------- append ----------------
    block.before(span);
    // span.innerText = '<a>another span</a>';
    span.innerHTML = '<a>another span</a>'; 
    // this.setTimeout(function(){
    //     // block.prepend(span);
    //     // block.after(span);
    //     block.before(span);

    //     setTimeout(function(){
    //         block.append(span);
    //     },2000)
    // }, 1000);

    setTimeout(function(){
        span.remove();
    }, 2000);

    var spans = document.querySelectorAll('span');

    for(var i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            console.log('click on span');
        }
    }


}