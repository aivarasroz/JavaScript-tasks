console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
          this.name = name;
          this.age = age;
              this.height = height;
              this.weight = weight;
        }
        
        getAge(allPlayers) {
            return `${this.name} is age ${this.age}`;
        }
    
        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }
            
        getWeight() {
        return `${this.name} weighs ${this.weight}kg`;
        }
    }		
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add(x, y){
            return x + y
        }
        
        subtract(x, y){
            return x - y
        }
        
        multiply(x, y){
            return x * y
        }
        
        divide(x, y){
            return x / y
        }
    }
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor (firstname, lastname) {
            this.firstname = firstname
            this.lastname = lastname
        }
    
        get fullname() {
            return `${this.firstname} ${this.lastname}`;
        }
        
        get email() {
            return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
        }
    }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    compareAge(other) {
        if (this.age < other.age){
            return `${other.name} is older than me.`
        }else if (this.age > other.age){
            return `${other.name} is younger than me.`
        }else{
            return `${other.name} is the same age as me.`
        }
    }
}
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Rectangle {
        constructor(sideA, sideB) {
          this.sideA = sideA
          this.sideB = sideB
        }
        getArea(){return this.sideA*this.sideB}
        getPerimeter(){return (this.sideA + this.sideB) *2}
      }
      
      
      class Circle {
          constructor(radius) {
              this.radius = radius;
          }
          getArea() {
              return (Math.PI * (Math.pow(this.radius, 2)))
          }
          getPerimeter() {
              return (Math.PI * this.radius) * 2
          }
      
      }
      
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{

    // Padariau 6 uzduoti su solutions pagalba. Nesugebejau ismastyti teisingo sprendimo budo.
    class Name {
        constructor(fname,lname){
          this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
          this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
        }
        get fullname() {
          return this.fname + " "+ this.lname;
        }
        get initials() {
          return this.fname.charAt(0) + "." + this.lname.charAt(0);
        }
      }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    function sweetestIcecream(arr) {
		let iceFlavors = {
		Plain: 0,
		Vanilla: 5,
		ChocolateChip: 5,
		Strawberry:	10,
		Chocolate: 10
		};
	return Math.max(...arr.map(outcome => outcome['numSprinkles'] + iceFlavors[outcome['flavor']]))	
}
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(number) {
            this.number = number;
        }
        set ones(number) {
            this.number = number
        }
        get ones() {
            return this.number / 1
        }
        set threes(number) {
            this.number = number
        }
        get threes() {
            return Math.floor(this.number / 3)
        }
        set nines(number) {
            this.number = number
        }
        get nines() {
            return Math.floor(this.number / 9)
        }
    }
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        static userCount=0;
        constructor(name){
            this.username = name;
            User.userCount++;
        }
    }
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
        
        getTitle() {
            return `Ttile: ${this.title}`
        }

        getAuthor() {
            return `Authtor: ${this.author}`
        }
    }
    
    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book('Hamlet', 'Williaam Shakespeare');
    const WP = new Book('Waw and Peace', 'Leo Tolstooy');
}
console.groupEnd();