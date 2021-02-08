import{ Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, color,) {
        super(name, color);
        this.sound = 'miau miau';
    }
}

export { Cat }