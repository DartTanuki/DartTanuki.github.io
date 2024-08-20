'use strict';

class User {
    constructor(name, age, description='') {
        this._name = name;
        this._age = age;
        this._description = description;
    }

    get name() {
        return this._name;
    }

    set name(new_name) {
        this._name = new_name;
    }

    get age() {
        return this._age;
    }

    set age(new_name) {
        this._age = age;
    }
}

module.exports(User);