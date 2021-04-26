# Web Components

Set of web platform API's that allow us to create custom, reusable and encapsulated html tags to use in web pages and web apps.

Web components do not require any 3rd party libraries but can be used next to them. 

## Three main building blocks

1. **Custom Elements**

The capability of creating custom HTML tags by extending them. 

```
class CustomTag extends HTMLElement {
    ...
}window.customElements.define('custom-tag', CustomTag)

```
```
<custom-tag />
```

Custom elements have life cycle methods:
`constructor()`: Called when an instance of the element is created or upgraded.

`connectedCallback()`: called when element is inserted into the DOM.

`disconnectedCallback()`: called when an element is removed from the DOM.

`attributeChangedCallback(attributeName, oldValue, newValue)`: called when attribute is added, removed, updated, or replaced.

2. **Shadow DOM**
- Used for self-contained components, encapsulating styles and markup. 
- created with `element.attackShadow({ mode: open })`
- creates a `shadowRoot` that we can reference and interact with. 

3. **HTML Templates**
- Define the contained markup of web component.
- Template tag stores markup on page. 
- Include both HTML and CSS in templates.
- Use slots to add custom text. 


#### See the [/example](https://github.com/jaqarrick/web-components-info/tree/main/examples) folder for a simple demo of how web components can be used.

# Attributions
These notes are entirely sourced from Traversy Media's [Web Components Crash Course](https://youtu.be/PCWaFLy3VUo).