import Obj from './Obj';

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
                if (Obj.indexOf(this._events, event) === -1) {
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
                const index = Obj.indexOf(this._callbacks[event], fn);
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
                event = Events.CustomEvent(type, {
                    bubbles: false,
                    cancelable: true,
                });
                event.originalEvent = originalEvent;
            } else {
                event = Events.CustomEvent(args[0], {
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

    static CustomEvent(type, params = {}) {
        params = Obj.assign({ bubbles: false, cancelable: false, detail: undefined }, params);

        if (typeof window.CustomEvent === 'function') {
            return new window.CustomEvent(type, params);
        }

        const CustomEvent = (type_, params_ = {}) => {
            const event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
            return event;
        };
        CustomEvent.prototype = window.Event.prototype;
        return CustomEvent(type, params);
    }
}
