class CustomComponent extends HTMLElement {

    constructor(){

        super();
        this.innerHTML = `Hello World`;

    }

}

// Registers the custom component so we can use it as a standalone html node
window.customElements.define('custom-component', CustomComponent);