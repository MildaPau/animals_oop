import { Animal } from './Animal.js';

class Pet extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
}

export { Pet }