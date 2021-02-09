import { Bird } from './Bird.js';

class Dragonfly extends Bird {
    constructor(name, color, wingsCount, canFly) {
        super(name, color, wingsCount, canFly);
        this.sound = 'pi pi pi'
        this.imposter = true;
    }
    imposter(){
        this.imposter = true;
    }
    notImposter(){
        this.imposter = false;
    }
}


export { Dragonfly }