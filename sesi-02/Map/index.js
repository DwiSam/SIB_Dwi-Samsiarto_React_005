const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"}
];

// let names = [];
// for (let i = 0; i < animals.length; i++){
//     names.push(animals[i].name);
// }
// console.log(names);

//atau bisa menggunakan method map
let names = animals.map((animal) => animal.name);
console.log(names);