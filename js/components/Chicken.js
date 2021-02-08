import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color, wingsCount, sound, canFly) {
        super(name, color, wingsCount, sound, canFly);
    }
}

export { Chicken }

