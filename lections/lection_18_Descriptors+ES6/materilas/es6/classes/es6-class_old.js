function Component(cssClassName) {
    const __element = null;
    this.cssClassName = cssClassName;


    this.setElement = function(element) {
        if (__element) return;
        __element = element;
    }

    this.getElement = function(element) {
       return __element;
    }
}

Component.prototype.render = function(selector) {
    if (this.getElement()) {
        document.querySelector(selector).append(this.element);
    }

    return this;
};
Component.prototype.addStyles = function() {
    let element = this.getElement();

    if (element) {
        element.classList.add(this.cssClassName);
    }

    return this;
}

Component.prototype.makeComponent = function(type) {
    let element = document.createElement(type);
    this.setElement(element);
    return this;
};


let component = new Component(100, 200);

component
    .makeComponent('table')
    .render('#app');