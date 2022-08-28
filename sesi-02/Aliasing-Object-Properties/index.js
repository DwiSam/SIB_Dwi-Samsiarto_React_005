const user = {
    n: 'Adi Nugroho',
    h: '@adinugroho',
    l: 'Jakarta, Indonesia'
}

//extraction
const { n: name, h: handle, l: location } = user;
console.log(name, handle, location);