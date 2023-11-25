'use strict';
import { fileURLToPath } from 'url';

class Contact {

    #name
    #email
    #city

    constructor(name, email, city) {
        this.#name = name;
        this.#email = email;
        this.#city = city;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set email(email) {
        this.#email = email;
    }

    get email() {
        return this.#email;
    }

    set city(city) {
        this.#city = city;
    }

    get city() {
        return this.#city;
    }
}

export { Contact }