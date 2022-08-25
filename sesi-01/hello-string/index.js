//tipe data string
alert("Hello dunia, apa kabar?");
let message = "welcome";
alert(message);
message = "Bye, bye";
alert(message);

//teknik manipulasi string 
//menggabungkan string 
let visitor = prompt("Siapakah nama kamu?");
// let message2 = 'haaii' + visitor + ', Selamat datang di kelas modern Javascript.';
// alert(message2);
let message2 = 'Haloww' + visitor;
message2 = message2 + ', Welkam to my room';
message2 += 'sangat senang bisa bertemu dengan kamu.'
//sample umum yang biasa digunakan
//id, nama, jenis kelamin
const objectAngkaKeb = {id:1, name:'Dwi', jenKel:'L'}
objectAngkaKeb.id = 2
objectAngkaKeb.name = "Sam"
objectAngkaKeb.jenKel = "LK"
console.log(objectAngkaKeb);