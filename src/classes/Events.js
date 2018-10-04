export default class Events {
    constructor(events) {
        this._events = [];
        this._callbacks = [];
        this.appendEvents(events);
    }

    events() {
        return this._events;
    }

    appendEvents(events) {
        if (events instanceof Array) {
            events.forEach(event => {
                if (this._events.indexOf() === -1) {
                    this._events.push(event);
                    this._callbacks[event] = [];
                }
            });
        }
    }

    on(event, fn) {
        if (typeof this._callbacks[event] !== 'undefined') {
            this._callbacks[event].push(fn);
        }
        return this;
    }

    off(event, fn) {
        if (typeof this._callbacks[event] !== 'undefined') {
            if (typeof fn !== 'undefined') {
                const index = this._callbacks[event].indexOf(fn);
                if (index > -1) {
                    this._callbacks[event].splice(index, 1);
                }
            } else {
                this._callbacks[event] = [];
            }
        }
        return this;
    }

    trigger(...args) {
        if (args.length > 0) {
            const event = args[0];
            if (typeof this._callbacks[event] !== 'undefined') {
                const newEvent = new CustomEvent(event, {
                    bubbles: false,
                    cancelable: true,
                });
                newEvent.originalEvent = typeof args[1] !== 'undefined' ? args[1] : {};

                if (args.length >= 2) {
                    args.shift();
                    args.shift();
                } else {
                    args.shift();
                }
                args.unshift(newEvent);

                this._callbacks[event].forEach(fn => {
                    fn.apply(this, args);
                });
            }
        }
        return this;
    }
}
