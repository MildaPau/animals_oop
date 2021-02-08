import{ Animal } from './components/Animal.js';
import{ Pet } from './components/Pet.js';
import{ Dog } from './components/Dog.js';
import{ Cat } from './components/Cat.js';
import{ Bird } from './components/Bird.js';
import{ Chicken } from './components/Chicken.js';

const rexas = new Dog('Rexas', 'black');
const rainis = new Cat('Rainis', 'white');
const paukstis = new Bird('Paukstis', 'colourful', 2, true);
const vistas = new Chicken('Vistas', 'brown');

console.log(rexas);

console.log(rainis);

paukstis.flyAway();
console.log(paukstis);

console.log(vistas);