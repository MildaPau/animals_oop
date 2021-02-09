import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(name, color) {
        super(name, color);
        this.wingsCount = 2; 
        this.canFly = true; 
        this.sound = 'cir cir'
    }
    canFly() {
        this.canFly = true;
    }

    canNotFly() {
        this.canFly = false;
    }

    flyAway() {
        if(this.canFly === true) {
            console.log(`${this.name} flys away`);
        } else {
            console.log(`${this.name} do not flys away`);
        }
    }
}

export { Bird }