import $ from 'jqry';

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
                if ($.indexOf(this._events, event) === -1) {
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
                const index = $.indexOf(this._callbacks[event], fn);
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
            let event;
            if (typeof args[0] === 'object') {
                let { type } = args[0];
                let originalEvent = args[0];
                if (args[0] instanceof Array) {
                    type = args[0][0];
                    originalEvent = args[0][1];
                }
                event = $.CustomEvent(type, {
                    bubbles: false,
                    cancelable: true,
                });
                event.originalEvent = originalEvent;
            } else {
                event = $.CustomEvent(args[0], {
                    bubbles: false,
                    cancelable: true,
                });
                event.originalEvent = null;
            }
            if (typeof this._callbacks[event.type] !== 'undefined') {
                args.shift();
                args.unshift(event);
                this._callbacks[event.type].forEach(fn => {
                    fn.apply(this, args);
                });
            }
        }
        return this;
    }
}
