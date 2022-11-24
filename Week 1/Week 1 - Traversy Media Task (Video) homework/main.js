// many different console output variations.

console.log("Sveiki");
console.error("Cia klaida");
console.warn("Ispejimas");

// let and const (no more VAR), Always use "const", unless you will reasign values.

let age = 250;
age = 15;

console.log(age);

const score = 50;

console.log(score);

// Data Types - Directly assigned to memory (String, Numbers, Booleran, null, undefined, symbol)

const pavadinimas = 'King';
const metai = 58;
const valdovas = true;
const x = null;
const y = undefined;
let p;

console.log(pavadinimas, metai, valdovas);


console.log('tikras:', pavadinimas); // more used concetantion...
console.log('pavadinimas' + ' ' + pavadinimas); //Concatenation - Old version (not usable)


// String properties and methods.

const c = 'Sveiki, Labas, Hi, Konnichiwa';

console.log(c.toUpperCase);
console.log(c.substring(3, 5)); // Chooses specific symbol or interval between symbols.


console.log(c.split(', ')); //defines array value in specified variable with multiple strings.
 

// Arrays. - hold multiple variables.

const skaiciai = new Array(1,2,3,4,5);

console.log(skaiciai);

const spalvos = ['geltona', 'raudona', 'melyna', 'juoda', 'aqua'];

spalvos[4] = 'balta'; // adding the new value in array if proper numeration.

spalvos.push('zalia');

spalvos.unshift('violetine'); // Pushing new variable at the start of the array, making it 0.

console.log(Array.isArray('obuolys')); // Checking if value is in array with false/true property.

console.log(spalvos.indexOf('melyna')); // indicates correct index of the value in array. 

console.log(spalvos[2]); //Array numeration starts from [0, 1, 2, 3, 4, 5....].



//Object Litterals.

const namas = {
    spalva: 'pilka',
    kvadratura: 120,
    pastatytas: true,
    tipas: 'kotedzas',
    stiklas: ['langai', 'durys', 'terasa', 85, false],
    adresas: {
        gatve: 'burunduku g. 20',
        miestas: 'Ne Kaunas',
        pKodas: 4888,
    }
}

console.log(namas);
console.log(namas.spalva, namas.adresas.gatve); //define specific value inside other value.
console.log(namas.stiklas[2]); 

const { spalva, kvadratura, adresas: {miestas}} = namas;

namas.aukstis = 10; // adding new values to object.


//Array of objects


const todos = [
    {
        id: 1,
        text: 'Ismest siuksles',
        padaryta: true,
    },
    {
        id:2,
        text: 'isplauti indus',
        padaryta: true,
    },
    {
        id: 3,
        text: 'pakurti pecka',
        padaryta: false,
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // Converts the lists into JSON format within the script.

//For Loops

for(let i = 0; i <= 10; i++) {
    console.log('For Loop number: ${i}');
}

//While loops

let i = 0;
while(i < 10) {
    console.log('While loop Number ${i}')
    i++;
}

for(let todo of todos) {
    console.log(todo.text);
}

//forEach loops , map, filter

todos.forEach(function(todo) { //forEach loop example...
    console.log(todo.text);

});

const todoText =  todos.map(function(todo) { // map - returning each key value in array.
    return todo.text;
});

console.log(todoText);

const todoPadaryta = todos.filter(function(todo) {
    return todo.padaryta === true;
}).map(function(todo) {
     return todo.text;
})

console.log(todoPadaryta);


//Conditionals

const v = 12;
const b =  15;

if(v > 11 || b > 15) {
    console.log('v is more than 11 or b is more than 15');
}

// Ternarry Operator

const o = 10;

const color = o > 10 ? 'red' : 'green';

console.log(color);


//switches

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


// Functions!!!

function addNums(num1 = 1, num2 = 1)  {
    console.log(num1 + num2);

}

addNums(5 , 5) //overwritign the values ogf original input.

//Object oriented programming ---- Constructior function.

function Namas(spalva, kvadratura) {
    this.spalva = spalva;
    this.kvadratura = kvadratura;
}

Namas.prototype.getFullName = function() {
    return '${this.spalva} ${this.kvadratura}';
}


// instatiate the object -------
const namas1 = new Namas('pilka', 120);
const namas2 = new Namas('juoda', 150);

console.log(namas2.getFullName());
console.log(namas1);

//Class

class Namas1 {
    constructor (spalva, kvadratura) {
        this.spalva = spalva;
        this.kvadratura = kvadratura;
    }
    getFullName() {
        return '${this.spalva} ${this.kvadratura}';
    }
}


console.log(window);

//Single elements
console.log(document.getElementById("my-form"))
console.log(document.querySelector("h1"));

//multiple elements

console.log(document.querySelectorAll(".container")); // Stick to this!!

//Loop through

const items = document.querySelectorAll(".container");


const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Babilonas';
ul.lastElementChild.innerHTML = '<h1>STIPRUUUUS</h1>';


const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        alert('Enter Rice Fields Mfka');
        setTimeout(() => msg.remove(), 3);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}