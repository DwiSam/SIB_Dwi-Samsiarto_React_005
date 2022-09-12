    [Data Flow di React]
Aliran data flow di react bersifat satu arah (Action>Store>View)

    [State dan Props]
Digunakan untuk interaksi antar komponen. State digunakan untuk menyimpan kondisi saat ini untuk komponen. Props digunakan untuk mengirimkan data (property) ke komponen lainnya

    [State]
Deklarasi state kita perlu membuat konstruktor dan memanggil method super, lalu menuliskan this.state dan valuenya. Cara memanggil atau membaca state dengan menggunakan this.
Sangat tidak disarankan untuk mengupdate state langsung dengan syntax (hardcode). Untuk mengupdate state bisa menggunakan fungsi setState. 

    [Props]  
Digunakan untuk mengirim data ke komponen lainnya. Props juga bisa digunakan untuk mengirim state ke komponen lainnya. Pemanggilan props hanya perlu memanggil this.props.nameval

    [PropTypes]
PropTypes adalah library tambahan
Proptypes biasanya digunakan untuk memvalidasi  berbagai tipe data mulai dari tipe data scalar hingga ke struktur data seperti array. Bisa digunakan untuk memvalidasi sesuai dari bentuk dari sebuah objek

    [Atomic Design]
Atomic Design adalah pendekatan design yang memecah elemen aplikasi web menjadi bagian bagian paling kecil. Atomic Design sangat berguna sekali karena komponen komponen yang dibuat akan reusable.

