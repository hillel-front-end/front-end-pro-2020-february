class Component{
    static logs = [];

    constructor(cssClassName = '') {
        this.cssClassName = cssClassName;
    }

    set element(element) {
        if (this.__element) return;
        this.__element = element;
    }

    get element() {
       return this.__element;
    }

    static printLogs() {
        document.querySelector('#logs').innerHTML += `
        <ul>
            ${this.logs.map(log => `<li>${ log }</li>`).join('')}
        </ul>
        `
    }

    render(selector) {
        if (this.element) {
            document.querySelector(selector).append(this.element);
        }
        
        Component.logs.push(`Render component in tag with selector = ${selector}`);
        return this;
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