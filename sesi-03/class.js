// Class in ES6 ---------------------------------------------------------------------
// Mendefinisikan Class
class Employee {
    doWork() {
        return 'complete!'
    }
}

let scott = new Employee()
console.log(scott.doWork()) // complete!

// ---------------------------------------------------------------------------------

// Contructor
class EmployeeCons{
    constructor (name){
        this._name = name;
    }
    doWorkCons() {
        return this._name;
    }
    getName() {
        return this._name;
    }
}

let scottCons = new EmployeeCons('this getName')
let scottCons2 = new EmployeeCons('this do Work')
console.log(scottCons.getName()) // this getName
console.log(scottCons.doWorkCons()) // this do Work

// ---------------------------------------------------------------------------------

// Class Inherintance
class PersonIn {
    constructor(name, title){
        this._name = name
        this._title = title
    }
    getName(){
        return this._name + ' is ' + this._title
    }
}

class EmployeeIn extends PersonIn{
    // employe 'is-a' person
}

let scottIn = new EmployeeIn('Alfredo', 'Inherintance')
console.log(scottIn.getName()) // Alfredo Inherintance

// ---------------------------------------------------------------------------------

class PersonIn1 {
    constructor(name){
        this._name = name
    }
    getName (){
        return this._name
    }
}

class EmployeeIn1 extends PersonIn1 {
    doWork(){
        return this._name + 'is Working'
    }
}

let scottI1 = new EmployeeIn1('Alfredo Inherintance 1 ')
console.log(scottI1.getName()) // Alfredo Inherintance 1
console.log(scottI1.doWork()) // Alfredo Inherintance 1 is Working

const rial = new PersonIn1('rial')
console.log(rial.doWork()) // undefined

// ---------------------------------------------------------------------------------

// Contructor
class PersonIn1 {
    constructor(name){
        this._name = name
    }
    getName (){
        return this._name
    }
}

// Method super
class EmployeeS extends PersonIn1 {
    constructor (name, title){
        super(name)
        this._title = title
    }
    doWork() {
        return this._name + " is working";
    }
    getTitle() {
        return this._name + " is " + this._title;
    }
}