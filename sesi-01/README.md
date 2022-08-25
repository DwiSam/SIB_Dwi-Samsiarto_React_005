Apa itu variable?
    Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola di dalam sebuah program.

Apa pentingnya variabel?
    variabel sangat penting, karena digunakan untuk menampung data di memori.

mendeklarasikan variabel
    var firsName = "Dwi Sam"

Mengisi variabel dengan nilai atau variabel
    let numberToBeAdded = 7;

Memberi nama variabel yang baik 
    kita tidak bisa menggunakan let sebagai nama variabel.
    let let = 0;

Apa itu tipe data?
    tipe data merupakan klasifikasi variabel untuk menentukan data yang akan disimpan ke dalam memori.

Berbagai Jenis tipe data 
    -Undefined : Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai
    -Numbers : Nilai dari tipe data number adalah angka
    -Strings : string ini dasarnya adalah sebuah teks.
    -Boolean : Boolean hanya dapat memiliki dua nilai, yakni true atau false.
    -Null :  Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel.

Tipe data number dan pengoperasiannya
    JavaScript variabel bertipe data number dituliskan seperti ini:
    let x = 10;
    Pada tipe data number kita juga dapat melakukan perhitungan aritmatika seperti 
    penambahan, pengurangan, perkalian, dll.

Tipe data string dan cara memanipulasinya
    menggabungkan string ini istilahnya concatenate atau singkatnya concat. contoh:
    let visitor = prompt("Siapakah nama kamu?");
    let message2 = 'haaii' + visitor + ', Selamat datang di kelas modern Javascript.';
    alert(message2);

Tipe data boolean value
    tipe data boolean ini sedikit unik karena hanya memiliki 2 nilai, yaitu true atau false.
    contoh penggunaan tipe data boolean, misalkan jika sedang hujan maka dituliskan
    let isRaining = true;

Dan bagaimana mengetahui tipe data dari sebuah variable
    kita bisa memastikan tipe data dari sebuah variable dengan menggunakan kata kunci typeof.
    Type-of spasi nama variabelnya. misalnya kita pakai variabel 
    let menuOpen = "true";

Apa itu Array
    array adalah tipe data yang bisa menampung tipe data lain di dalamnya.

Apa itu jenis Array
    terdapat 3 jenis array di javaScript yaitu :
    - array numerik
    - array assosiatif
    - array campuran

Mengisi Array
    Array bisa diisi dengan cara menggabungkan 2 array, dengan cara menggunakan metode push.apply. contohnya :
    const arrayNumber = [1,2,3,4,5]
    arrayNumber.push(6)
    arrayNumber.push(7)
    console.log(arrayNumber);
