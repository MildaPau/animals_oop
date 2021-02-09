import { Bird } from './Bird.js';

class Eagle extends Bird {
    constructor(name, color, wingsCount, canFly) {
        super(name, color, wingsCount, canFly);
        this.sound = 'kli kli kli'
    }
}

export { Eagle }