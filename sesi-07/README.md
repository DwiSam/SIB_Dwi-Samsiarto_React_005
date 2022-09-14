    [Lifecycle]
Lifecycle merupakan urutan kejadian atau keadaan yang terjadi secara default dan berjalan secara teratur
Lifecycle pada React, berarti urutan kejadian atau keadaan yang terjadi ketika kita meng-implementasikan React

	[Class Component]

[Mounting]
Constructor()
constructor akan dipanggil pertama kali saat proses inisialisasi sebuah instance. Biasanya kita mendefinisikan state awal sebuah komponen dan melakukan deklarasi variable dan binding class method

Render()
Class method ini harus bersifat pure function dan jangan ada proses perubahan state disini

ComponentDidMount()
Akan dipanggil ketika sebuah komponen selesai diletakkan di DOM sebuah browser. Method yang tepat untuk melakukan async request untuk mengambil data dari API. Hasil data yang didapat disimpan kedalam internal state dan akan men-trigger render()Component Lifecycle - Sesi 7Class Component

[Updating]
shouldComponentUpdate (nextProps, nextState)
	default behavior dari React adalah selalu re-render setiap ada perubahan state / props
	function ini bisa membatasi keadaan / kejadian apa saja yang bisa men-trigger re render
	default return value dari function ini adalah true

componentDidUpdate (prevProps, prevState)
	dipanggil tepat setelah render dipanggil
	bisa digunakan untuk operaso DOM / request async untuk data berikutnya disini (misal : prefetch)


componentWillUnmount ()
	dipanggil sebelum menghapus komponen dari DOM.
	bisa bersih-bersih di class method ini

componentDidCatch ()
	Mulai react 16  bisa menggunakan class method ini untuk menampilkan pesan error yang lebih baik

	[Function Component]
Effect Hook, useEffect, menambahkan kemampuan untuk melakukan “efek samping” dari sebuah function component. Hook ini memiliki fungsi yang sama dengan componentDidMount, componentDidUpdate, dan componentWillUnmount pada kelas React, tetapi disatukan menjadi satu API
