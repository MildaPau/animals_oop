import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color, wingsCount, canFly) {
        super(name, color, wingsCount, canFly);
        this.sound = 'ko ko ko'
    }
}

export { Chicken }

