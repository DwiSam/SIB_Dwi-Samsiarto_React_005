
    [ CLASS ]
Javascript adalah bahasa OOP (Object Oriented Programming) yang bersifat prototype based. 
Cara Mendefinisikan Class di Javascript mirip dengan kodingan di bahasa pemrograman Java.
yaitu cukup menuliskan Class lalu menuliskan nama kelas nya yang dimulai dari huruf kapital.
    
Untuk pengunaannya juga mirip dengan Java, kita harus membuat sebuah instance dari class 
dan kemudian kita bisa menggunakan atau memanggil method method yang disediakan.

Untuk mengelola data dan state, ktia butuh inisialisasi logika awal atau inisialisasi object dengan method yang
dinamakan construktor. mirip dengan deklarasi method namun construktor akan otomatis berjalan pada saat inisialisasi class. 

Pada OOP (Object Oriented Programming), ada 3 pialr utama yaitu encapsulation, polymorphism, dan inheritance. Di ES6 menyediakan sintaks untuk 
menghubungkan kelas induk dan turunannya atau dengan kata lain inheritance. 

Pada inheritance, kita bisa membuat kelas turunan dengan menuliskan extends pada deklarasi kelas turunannya. 
kita juga bisa menggunakan method yang ada pada induknya, serta konstruktor nya (dengan method super). 
method yang ada pada kelas turunan tidak bisa dipanggil dengan memanggil kelas induknya.

    [ Javascript Modules ]

Pada javacript Modules, kita bisa membuat kode js kita lebih modular dengan menggunakan beberapa cara.
Yang pertama menggunakan IIFE (immediately-invoked function expression) yang membungkus tanda kurung langsung untuk dieksekusi.

kita bisa menggunakan import dan module export. dengan menggunakan export pada suatu file js (export default ...),
kita bisa menggunakannya di file lain dengan memanggilnya (import ... from '/...) sehingga memudahkan kita agar tidak menuliskan kode berulang ulang. 

    [ Promise ]

Promise adalah sebuah objek yang hasilnya ada dua yaitu resolve dan reject pada masa mendatang. 
biasanya digunakan dengan fungsi, jika promise berhasil maka yang dijalankan yang di resolve, dan jika gagal maka yang dijalankan yang di reject.

biasanya digunakan untuk fetching api sehingga kita bisa mengetahui apakah fetching data kita berhasil atau gagal
Penggunaan implicit return di arrow function berguna agar kodingan menjadi lebih singkat

jika sebuah fungsi belum mendukung promise, kita harus membungkus fungsi tersdebut kedalam sebuah promise baru.

kita juga bisa menggunakan fungsi setTimeout agar kita bisa memanggil fungsi dengan interval yang berbeda

    [ Async / await ]
fitur ini biasanya digunakan untuk menangani proses asinkronus. biasanya digunakan agar penulisan koding lebih efisien.
Javascript await digunakan membuat kode itu berhenti sementara sampai promise nya me return response lalu akan dijalankan lagi.
cara pengunaannya pada kode yang tidak berada didalam fungsi > kita hanya perlu membungkusnya kedalam fungsi async.