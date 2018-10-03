class QueryObject {
    constructor(selector) {
        let elements = [];
        if (typeof selector === 'object') {
            if (selector instanceof QueryObject) {
                selector.forEach(element => {
                    elements.push(element);
                });
            } else {
                elements = Array.isArray(selector) ? selector : [selector];
            }
        } else if (typeof selector === 'string') {
            selector = selector.trim();
            if (selector.indexOf('<') === 0) {
                const template = document.createElement('template');
                template.innerHTML = selector;
                elements = [template.content ? (template.content.firstElementChild || template.content.firstChild) : (template.firstElementChild || template.firstChild)];
            } else {
                Object.values(document.querySelectorAll(selector)).forEach(queryElement => {
                    elements.push(queryElement);
                });
            }
        }

        this.elements = [];
        let i = 0;
        Object.values(elements).forEach(element => {
            if (element instanceof Element || element instanceof Window || element instanceof Document) {
                this.elements.push(element);
                this[i++] = element;
            }
            if (element instanceof Element && !document.body.contains(element)) {
                document.body.appendChild(element);
                element.remove();
            }
        });
        this.length = this.elements.length;
    }

    find(selector) {
        const elements = [];
        Object.values(this.elements).forEach(element => {
            Object.values(element.querySelectorAll(selector)).forEach(queryElement => {
                elements.push(queryElement);
            });
        });
        return new QueryObject(elements);
    }

    appendTo(selector) {
        let parents = false;
        if (selector instanceof Element) {
            parents = new QueryObject(selector);
        } else if (selector instanceof QueryObject) {
            parents = selector;
        } else if (typeof selector === 'string') {
            parents = new QueryObject(selector);
        }

        if (parents) {
            parents.forEach(parentElement => {
                Object.values(this.elements).forEach(element => {
                    parentElement.appendChild(element);
                });
            });
        }
        return this;
    }

    detach() {
        Object.values(this.elements).forEach(element => {
            element.remove();
        });
        return this;
    }

    css(styles, value) {
        const css = {};
        if (typeof styles === 'string') {
            if (typeof value !== 'undefined') {
                css[styles] = value;
            } else {
                const element = this.length > 0 ? this.elements[0] : false;
                const style = element ? element.style : false;
                if (element && style) {
                    return style[styles];
                }
                return undefined;
            }
        } else if (typeof styles === 'object') {
            Object.keys(styles).forEach(key => {
                css[key] = styles[key];
            });
        }

        Object.values(this.elements).forEach(element => {
            Object.keys(css).forEach(key => {
                // Don't set styles on text and comment nodes
                if (element.nodeType === 3 || element.nodeType === 8 || !element.style) {
                    return;
                }
                try {
                    element.style[key] = css[key];
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e);
                }
            });
        });

        return this;
    }

    forEach(callback) {
        Object.values(this.elements).forEach(callback);
        return this;
    }

    on(event, fn) {
        Object.values(this.elements).forEach(element => {
            element.addEventListener(event, fn, false);
        });
        return this;
    }

    off(event, fn) {
        if (typeof event === 'undefined' && typeof fn === 'undefined') {
            Object.values(this.elements).forEach(element => {
                const newElement = element.cloneNode(false);
                while (element.hasChildNodes()) {
                    newElement.appendChild(element.firstChild);
                }
                element.parentNode.replaceChild(newElement, element);
            });
        } else {
            Object.values(this.elements).forEach(element => {
                element.removeEventListener(event, fn, false);
            });
        }
        return this;
    }

    trigger(event, data) {
        const eventObject = new CustomEvent(event, {
            bubbles: true,
            cancelable: true,
            detail: data || {},
        });
        Object.values(this.elements).forEach(element => {
            element.dispatchEvent(eventObject);
        });
        return this;
    }

    click() {
        Object.values(this.elements).forEach(element => {
            element.click();
        });
        return this;
    }

    get(index) {
        return this.elements[index];
    }

    prop(...args) {
        if (args.length > 0) {
            const element = this.get(0);
            if (element) {
                if (args.length === 2) {
                    this.get(0)[args[0]] = args[1];
                }
                return this.get(0)[args[0]];
            }
        }
        return this;
    }
}

function Query(selector) {
    return new QueryObject(selector);
}

export default Query;
