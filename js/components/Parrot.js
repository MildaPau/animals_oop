import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color, wingsCount, sound, canFly) {
        super(name, color, wingsCount, sound, canFly);
    }
}

export { Parrot }