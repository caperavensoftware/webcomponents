/**
 * Created by caperaven on 2016/06/07.
 */

class HelloWorldComponent extends HTMLElement {
    createdCallback() {
        // todo: load this from a html file
        this.innerHTML = "<h1>Hello there world</h1>";
    };

    attachedCallback() {
        console.log('attached');
    }

    detachedCallback() {
        console.log('detached');
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(`attribute ${attrName} changed from ${oldValue} to ${newValue}`);
    }
}

document.registerElement('hello-world', HelloWorldComponent);