import { Fish } from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color, sound, canswim)  {
        super(name, color, sound, canswim);
        this.grantsWishes = true;
    }
    grantswishes() {
        this.grantsWishes = true;
    }

    doNotGrantswishes() {
        this.grantsWishes = false;
    }

    makeWish() {
        if(this.grantsWishes === true) {
            console.log(`${this.name} makes wish`);
        } else {
            console.log(`${this.name} do not makes wish`);
        }
    }
}

export { Goldfish }