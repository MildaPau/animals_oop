class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    
    voise() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}, my color is ${this.Color} and speak like this: ${this.sound}!`);
    }
}

export { Animal }