// const user = {};
// user.name ='Adi Nugroho';
// user.handle = '@adinugroho';
// user.location= 'Jakarta, Indonesia' ;

const user = {
    name: 'Adi Nugroho',
    handle: '@adinugroho',
    location: 'Jakarta, Indonesia'
}

//extraction
// const name = user.name;
// const handle = user.handle;
// const location = user.location;
// console.log(name, handle);

const { name, handle, location } = user;
console.log(name, handle, location);