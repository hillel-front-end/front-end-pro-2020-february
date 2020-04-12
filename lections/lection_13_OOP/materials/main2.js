function HTMLElements() {}

HTMLElements.prototype.render = function() {
    console.log('render', this.id);
};

HTMLElements.prototype.click = function() {
    console.log('click .. method from HTMLElements',  this.id);
};


function HTMLAnchor(url, id, className) {
    this.url = url;
    this.id = id;
    this.className = className;
}

// var obj = {
//     __proto__: HTMLElements.prototype
// }

HTMLAnchor.prototype = Object.create(HTMLElements.prototype);
HTMLAnchor.prototype.constructor = HTMLAnchor;

HTMLAnchor.prototype.redirect = function() {
    console.log('redirect to ', this.url);
}
HTMLAnchor.prototype.click = function() {
    console.log('click .. method from HTMLAnchor');
    this.redirect()
}


// console.log(HTMLAnchor.prototype, 'HTMLAnchor.prototype.');


var a1 = new HTMLAnchor('https://site.com', 'a-1', 'link');
var a2 = new HTMLAnchor('https://site-2.com', 'a-2', 'link-2');

console.log(a1, 'a1');
console.log(a2, 'a2');

// a1.redirect();
a2.click();
a1.click();
// a1.render();

