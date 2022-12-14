    [Reat]
React merupakan library javascipt untuk membangun user interface. React dapat memiliki cara 
khusus yang dapat membantu kita membangun user interface dengan cara yang simpel, deklaratif dan intuitif. 
React berporos kepada komponen. Di React kita membangun komponen komponen yang membentuk sebuah aplikasi web. layaknya lego mungkin secara satuan tidak berarti namun jika di gabungkan dapat menjadi sebuah bangunan yang indah.

Selain membuat aplikasi Web, kita juga dapat mengembangkan aplikasi mobile dengan React Native, aplikasi VR dengan React VR, aplikasi CLI atau terminal dengan React Blessed, aplikasi smart tv dengan React-tv dan lain sebagainya.

Konsep utama React yaitu berbasis Komponen, kita membangun user interface dengan cara menyusun satu komponen dengan komponen lain, bukan membuat halaman web atau membuat template. dengan menerapkan konsep komponen sebagai mental dan visual tool dapat mengarahkan kita untuk mendesain dan membangun desain yang lebih intuitif.

Aliran Data dari React berbeda dengan framework lain seperti Angular yang menerapkan aliran data dua arah.
Sedangkan di React hanya mengalir satu arah. dan perubahan data menjadi lebih mudah di mengerti dan lebih mudah di prediksi.

View adalah kumpulan komponen yang sudah kita bahas di bagian sebelumnya. di view juga ada berbagai action seperti onClick ketika button di klik, onChange ketika pengguna memasukkan data di form dan banyak lagi.

Di React, semua data di simpan kedalam sebuah wadah yang di sebut dengan store atau state, uniknya jika terjadi perubahan data, katakanlah seorang pengguna mengklik button atau action yang lainnya, view tidak bisa mengubah data atau apapun juga. 

View harus menghubungi action memberitahu bahwa ada sebuah action yang di trigger oleh pengguna. dan tugas action lah yang kemudian menghubungi store untuk kemudian store untuk kemudian mengubah data sesuai actionnya. dan setelah itu baru kemudian store mengubah view hingga sesuai dengan data yang baru saja berubah. jadi satu jalur, dari view ke action ke store dan kembali ke view. dan tidak bisa sebaliknya. untuk mengubah data, view harus selalu melalui action dan seterusnya.

masih berhubungan dengan alur data satu arah sebelumnya setiap kali terjadi perubahan data yang terjadi di store, React atau dalam hal ini view akan selalu melakukan proses render ulang. React di desain untuk mempermudah workflow kita sebagai developer. hal ini menyebabkan React tidak membutuhkan data binding yang aneh-aneh.

Kalau di React tidak merender ulang DOM-nya langsung, yang kita render ulang adalah virtual DOM

Virtual DOM hanyalah sebuah struktur data yang menyimpan informasi lengkap tentang DOM. seperti blue print kalau kita mau membangun rumah atau ruangan. jadi setiap kali terjadi perubahan data dan harus mengubah DOM, React melakukan perubahan data harus mengubah DOM, React melakukan perubahan tersebut di virtualDOM terlebih dahulu yang sudah berubah dengan DOM yang sebenarnya. Jika ada yang berbeda, VirtualDOM akan mengubah DOM yang berubah saja, jadi tidak semuanya di ganti sehingga tidak seberat jika harus mengubah seluruh pohon DOM. Mengubah VirtualDOM jauh lebih ringan karena VirtualDOM sederhananya hanyalah struktur data atau kerangkanya saja jadi perubahan akan lebih cepat dan ringan.

    [JSX]
JSX dari awal merupakan bagian dari React. Banyak orang yang tadinya tertarik dengan React ketika melihat JSX banyak yang enggan dan akhirnya mengurungkan niat untuk mencoba React.

JSX pada dasarnya adalah javascipt dengan tambahan fungsi. dengan JSX kita dapat menulis kode yang sangat mirip dengan HTML atau lebih tepatnya XML sehingga menjadi sebuah 'templating language' yang sangat powerful.

ketika ada permintaan untuk memunculkan sebuah halaman melalui browser dan pengguna mengunjungi halaman tertentu atau dengan istilah yang lebih teknis, pengguna mengakses route tertentu dan route tersebut memanggil controller, yang kemudian akan merender halaman berdasarkan template yang berkaitan dengan controller dan route tersebut. proses render tersebut sederhananya adalah melakukan concat terhadap string dengan menambahkan data data yang di sertakan di route atau controller tersebut. proses append string template dengan data tersebut bukanlah operasi yang ringan apalagi ketika template sudah cukup kompleks dan besar ukurannya. setelah proses append string dan rendering selesai baru kemudian string yang sudah di tambahkan data tesebut di kirimkan kembali ke pengguna.

sementara ketika kita menggunakan JSX, proses menjadi lebih simpel. framework tidak lagi perlu melakukan proses rendering dalam bentuk append string yang butuh tenaga komputasi cukup besar. framework tinggal menterjemahkan hasil dari JSX yang di transpalasi menjadi fungsi fungsi (bukan string) menjadi tag-tag html dan langsung mengirimkan hasilnya kembali ke pengguna.

    [Node & NPM]
Node JS dan NPM merupakan platform yang di butuhkan untuk mengembangkan aplikasi React jenis apapun.

    [Webpack]
Webpack di gunakan untuk module packanging development, serta memproduksi alut automation.

    [Babel]
Babel adalah kompiler javascipt dan transpiler yang di gunakan untuk mengubah satu source code ke source code yang lain. Babel mengkompilasi React JSX dan ES6 ke ES5 javascipt yang dapat di jalankan di semua browser.
