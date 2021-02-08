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
            console.log('${name} flys away');
        } else {
            console.log('Do not flys away');
        }
    }
}

export { Bird }