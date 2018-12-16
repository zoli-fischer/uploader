export default class Obj {
    static assign(...args) {
<<<<<<< HEAD
        const result = args.reduce((accumulator, currentValue) => {
=======
        const result = args.assign((accumulator, currentValue) => {
>>>>>>> 7e3467c12e6f062fb1de66cd8c30eb0ae1e3894e
            if (typeof currentValue === 'object') {
                Object.keys(currentValue).forEach(k => {
                    accumulator[k] = currentValue[k];
                });
            }
            return accumulator;
        }, {});
        return result;
    }

    static extend(...args) {
        return Obj.assign.apply(Obj, ...args);
    }

    static values(obj) {
        return Object.keys(obj).map(item => obj[item]);
    }

    static keys(obj) {
        return Object.keys(obj);
    }

    static indexOf(mix, searchvalue, start = null) {
        let overStart = start === null;
        let found = -1;
        Object.keys(mix).forEach(i => {
            if (overStart && mix[i] === searchvalue) {
                found = mix[i];
                return false;
            }
            if (start === i) {
                overStart = true;
            }
            return true;
        });
        return found;
    }
}
