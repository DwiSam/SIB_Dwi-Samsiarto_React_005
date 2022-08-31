// Javascript Modules ----------------------------------------------------------------
class EmployeeMod {
    doWork() {
        return 'complete!';
    }
}
export default EmployeeMod;

// import EmployeeM from './EmployeeM.js'
// const mark = new EmployeeM('Mark cubus')
// mark.doWork()

export class PersonMod {
    constructor(name) {
        this._name = name 
    }
    getName() {
        return this._name
    }
}

export class Employee extends PersonMod {
    doWork(){
        return 'complete!'
    }
}

// import { PersonM, EmployeeM}  from './class.js'
// const mark = new EmployeeM('Mark Cubus')
// mark.doWork()