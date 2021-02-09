import { Animal } from './Animal.js';

class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.canswim = true; 
        this.sound = 'bul bul bul'
    }
    canSwim() {
        this.canswim = true;
    }

    canNotSwim() {
        this.canswim = false;
    }

    swimAway() {
        if(this.canswim === true) {
            console.log(`${this.name} swims away`);
        } else {
            console.log(`${this.name} do not swims away`);
        }
    }
}

export { Fish }