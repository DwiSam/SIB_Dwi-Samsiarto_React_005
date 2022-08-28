const getUser = () => {
    return{
        name: 'Adi Nugroho',
        handle: '@adinugroho',
        location: 'Jakarta, Indonesia '
    }
}
// extraction
const { name, handle, location } = getUser ();
console.log (name, handle, location);