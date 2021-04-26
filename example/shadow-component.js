const template = document.createElement("template");
template.innerHTML = `
    <style>
        h1 {
            color: red
        }
    </style>
    <h1>
    Hello There!
    </h1>
`;

class ShadowComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content);
    this.shadowRoot.querySelector('h1').innerHTML;
    this.cloneNode(true);
  }
}

window.customElements.define('shadow-component', ShadowComponent);
