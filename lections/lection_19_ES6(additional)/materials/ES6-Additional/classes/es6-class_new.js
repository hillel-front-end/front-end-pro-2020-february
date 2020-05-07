class Component{
    static logs = [];

    static printLogs() {
        document.querySelector('#logs').innerHTML += `
        <ul>
            ${this.logs.map(log => `<li>${ log }</li>`).join('')}
        </ul>
        `
    }

    constructor(cssClassName = '') {
        this.cssClassName = cssClassName;
    }

    render(selector) {
        if (this.element) {
            document.querySelector(selector).append(this.element);
        }
        
        Component.logs.push(`Render component in tag with selector = ${selector}`);
        return this;
    }

    set element(element) {
        if (this._element) return;
        this._element = element;
    }

    get element() {
       return this._element;
    }


    addStyles() {  
        if (this.element) {
            this.element.classList.add(this.cssClassName);
            Component.logs.push(`Added className = ${this.cssClassName}`);
        }
    
        return this;
    }

    makeComponent(type) {
        let element = document.createElement(type);
        this.element = element;
        Component.logs.push(`Making component with type = ${type}`);
        return this;
    };
}



let component = new Component('box');

component
    .makeComponent('table')
    .addStyles()
    .render('#app');

Component.printLogs();


console.dir(Component, 'Component');