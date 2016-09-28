'use strict';

class PromiseChain extends Promise {
    constructor(resolver = resolve => resolve()) {
        super(resolver);
        this.promise = Promise.resolve();
    }
    set then(fn) {
        this.promise = this.promise.then(fn);
    }
    set catch(fn) {
        this.promise = this.promise.catch(fn);
    }
    get then() {
        return this.promise.then.bind(this.promise);
    }
    get catch() {
        return this.promise.catch.bind(this.promise);
    }
}

module.exports = PromiseChain;
