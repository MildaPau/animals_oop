import{ Animal } from './components/Animal.js';
import{ Pet } from './components/Pet.js';
import{ Dog } from './components/Dog.js';
import{ Cat } from './components/Cat.js';
import{ Bird } from './components/Bird.js';
import{ Chicken } from './components/Chicken.js';
import{ Parrot } from './components/Parrot.js';
import{ Eagle } from './components/Eagle.js';
import{ Dragonfly } from './components/Dragonfly.js';
import{ Fish } from './components/Fish.js';
import{ Goldfish } from './components/Goldfish.js';
import{ Nemo } from './components/Nemo.js';

const rexas = new Dog('Rexas', 'black');
const rainis = new Cat('Rainis', 'white');
const paukstis = new Bird('Paukstis', 'colourful', 2, true);
const vistas = new Chicken('Vistas', 'brown');
const papugas = new Parrot('Papugas', 'colourful');
const erelis = new Eagle('Erelis', 'gray');
const laumzirgis = new Dragonfly('Laumzirgis', 'green');
const zuvis = new Fish('Zuvis', 'blue');
const auksineZuvele = new Goldfish('AuksineZuvele', 'gold');
const nemukas = new Nemo('Nemukas', 'striped');

console.log(rexas);

console.log(rainis);

paukstis.flyAway();
console.log(paukstis);

console.log(vistas);

papugas.introduce();
console.log(papugas);

erelis.introduce();
console.log(erelis);

console.log(laumzirgis);

zuvis.swimAway();
console.log(zuvis);


zuvis.canNotSwim();
console.log(zuvis);

auksineZuvele.introduce();
console.log(auksineZuvele);


auksineZuvele.doNotGrantswishes();
auksineZuvele.makeWish();
console.log(auksineZuvele);

console.log(nemukas);