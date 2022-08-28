// function add(a,b){
//     return a+b;
// }

// function square{
//     return x*x;
// }

// function three(){
//     return 3;
// }

//mempersingkat kode
// const add = (a,b) => a+b;
// const square = x => x*x;
// const three = () => 3;

//bisa juga
const add = (a,b) => { 
    const temp = a+b;
    return temp;
}

// function Person() {
//     this.age = 0;

//     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// const p = new Person();

// function Person(){
//     this.age = 0;

//     const that = this;
//     setInterval(function() {
//         this.age++;
//         console.log(that.age);
//     }.bind(this), 1000);
// }

// const p = new Person();

// function Person() {
//     this.age = 0;

//     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     }.bind(this), 1000);
// }

// const p = new Person();

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const p = new Person();