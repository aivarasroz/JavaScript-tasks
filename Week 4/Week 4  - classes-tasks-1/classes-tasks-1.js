/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina
  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price
2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);
3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);
5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???
6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.
*/
console.group('1 - 2 - 3: Uzduotys');

class Automobilis {
    brand;
    model;
    price;

    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const car1 = new Automobilis('BMW', '730d', 12000);
const car2 = new Automobilis('Mercedes-Benz', 'G Wagon', 130000);
const car3 = new Automobilis('Toyota', 'Supra', 40000);

const allCars = [
    car1,
    car2,
    car3
]

console.log(allCars);

console.groupEnd();

console.group('4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus) modelius');


console.log('%cModels:', 'font-size: 35px')
console.log(`%c${car1.model}`, 'color: red; font-size: 20px;');
console.log(`%c${car2.model}`, 'color: red; font-size: 20px;');
console.log(`%c${car3.model}`, 'color: red; font-size: 20px;');


console.groupEnd();

console.group('4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus) markes');

console.log('%cBrands:', 'font-size: 35px')
console.log(`%c${car1.brand}`, 'color: blue; font-size: 20px;');
console.log(`%c${car2.brand}`, 'color: blue; font-size: 20px;');
console.log(`%c${car3.brand}`, 'color: blue; font-size: 20px;');

console.groupEnd();

console.group('4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus) kaina');

console.log('%cPrices:', 'font-size: 35px')
console.log(`%c${car1.price}`, 'color: green; font-size: 20px;');
console.log(`%c${car2.price}`, 'color: green; font-size: 20px;');
console.log(`%c${car3.price}`, 'color: green; font-size: 20px;');

console.groupEnd();


console.group('5 - 6 . Padidinti automobilio kainas 100 ir atspausdinti pakitimus');

car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;

// Spausdinu ir pakitima .allCars ir pakitima individualu.
console.log(allCars);
console.log(car1.brand, car1.model, car1.price);
console.log(car2.brand, car2.model, car2.price);
console.log(car3.brand, car3.model, car3.price);



console.groupEnd();






