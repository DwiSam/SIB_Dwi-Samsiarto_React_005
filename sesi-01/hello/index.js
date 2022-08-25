//variable declaration
let score = 50;
console.log("Hasil Variabel Score "+score);

//deklasari variabel dengan let
let playerName = "Budi";
console.log("Hasil Variabel playerName "+playerName);
/* alert(playerName); */
playerName = "Dwi Sam";
console.log("Halo playerName "+playerName);
/* alert(playerName) */

//deklasari variabel dengan const
const pi = 3.14
/* pi = 5.12 */
console.log(pi);

//tipe data number
let originalNum = 23;
// let newNum = originalNum + 7;
let numberToBeAdded = 7;
let newNum = originalNum + numberToBeAdded;
alert(newNum)

//bukan berupa object atau array > tidak bisa diganti
const angkaKeberuntungan = 10;

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

//tipe data boolean
let menuOpen = 'true';
let isFinished = true;

//array
const arrayNumber = [1,2,3,4,5]
arrayNumber.push(6)
arrayNumber.push(7)
console.log(arrayNumber);

var fruits = ['anggur', 'durian', 'semangka', 'apel'];
fruits.splice(0, fruitNumber.length);
console.log(fruits);