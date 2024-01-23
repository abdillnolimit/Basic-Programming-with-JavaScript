console.log("Hello World!");
var x = "Hey There!"
    console.log(x)

var x = 1
var y = x + 1;
    console.log(y);

/*
Pada seri kali ini, kita akan belajar dasar-dasar pemrograman menggunakan bahasa pemrograman JavaScript sebagai pengantarnya, 
bukan tutorial JavaScript! Tutorial JavaScript akan dibahas beberapa saja. 
 
Konsep-konsep dasar pemrograman mengandung istilah-istilah berikut : 
Variael, tipe data, pengondisian,pengulangan, object, array, function, etc... 
 
 
Objektivitas: Program - Pemrograman - Bahasa pemrograman


Mengapa harus belajar pemrograman???
	1. Belajar teliti (karena pemrograman memerlukan ketelitian yang tinggi agar program dapat dibuat sebagaimana yang diinginkan 
    tanpa adanya kesalahan/penyimpangan), disiplin (karena pemrograman memiliki disiplin yang banyak, seperti pada tiap bahasa 
    pemrograman pasti memiliki kaidah-kaidah tertentu untuk dapat digunakan sesuai dengan kebutuhan), abstrak(berpikir abstrak adalah 
    cara berpikir tentang bagaimana caranya kita menyembunyikan kesulitan pada masalah yang kompleks dalam memandang sebuah masalah 
    sehingga masalah menjadi lebih mudah terselesaikan).
	2. Mengubah komputer menjadi alat yang powerfull (yang semulanya kita menggunakan aplikasi maka sekarang kita dapat menggunakan 
    aplikasi yang dapat menyelesaikan masalah),
	3. Membentuk pola pikir komputasional (dekomposisi, pengenalan pola, generalisasi, algoritma, dll...)



*/


//Apa itu Pemrograman??? (Title)
/*
Secara sederhana, program adalah kumpulan / serangkaian instruksi.
Secara umum, program adalah urutan instruksi terstruktur, yang dirancang agar komputer dapat berperilaku sesuai dengan ketentuan, 
dengan tujuan untuk menyelesaikan sebuah pekerjaan. 

Program bisa sederhana yang terdiri dari 1 instruksi saja, misal seperti penulisan hello world, atau bisa juga program kompleks 
sehingga dapat menjadi produk, misalkan game, website, Microsoft, aplikasi-aplikasi pada hp, laptop, PC, dll sebagainya.

Contoh instruksi (kompleks & terstruktur/memperhatikan urutan)
Masuk Kompleks -> Belok Kanan -> Lurus terus 200m -> Rumah ke-3 sebelah kiri -> Masuk Rumah


Ingat, instruksi harus terstruktur/memperhatikan urutan!

Instruksi Komputer bagaimana?
-Memberi perintah pada komputer,
-Melalui bahasa pemrograman,
-memecah tugas jadi instruksi sederhana.

Selain itu, kita perlu memahami perilaku komputer, komputer yang dimaksud disini ialah CPU yang ada di setiap perangkat seperti desktop, 
laptop, PC, konsol game, dsb...,
	1. Komputer tidak begitu pintar,
	Komputer hanya dibatasi dengan keahlian tertentu saja, misalkan konsol game, maka tidak dapat digunakan untuk program lain misalnya IoT, dll..
	2. Penurut
	Komputer pasti melakukan perintah/instruksi/program yang user berikan kepadanya, terlepas baik itu programnya benar maupun salah, 
    pasti dijalankan.
	3. Tidak kenal Lelah
	Komputer dapat digunakan dalam skala waktu yang cukup lama dan dapat digunakan berulang kali.
	

Statement
Adalah perintah/instruksi untuk komputer dalam bahasa pemrograman.
Setiap statement harus memperhatikan bahasa pemrograman apa yang digunakan karena bisa saja aturan penulisan statement berbeda pada 
bahasa pemrograman satu dengan lainnya.

summmary :
-Cara kita untuk memberikan intstruksi yang simple dan terstruktur pada komputer,
-Instruksi yang kita berikan harus benar dan masuk akal,
-Instruksi yang kita berikan harus sesuai dengan aturan pada bahasa pemrograman tertentu.

*/



//Bahasa Pemrograman (Title)

/*
Saat ini ada banyak bahasa pemrograman, dan bahasa pemrograman sendiri sudah ada sejak pertama kali komputer diciptakan. 
Akan tetapi, yang populer/banyak digunakan beberapa bahasa pemrograman saja.
Mengapa? Karena didasarkan pada :
	1. Kemudahan sintaks
	2. Banyak komunitasnya
	3. Digunakan pada aplikasi-aplikasi terkini
	4. Banyak keahlian yang membutuhkan bahasa tersebut.

Mengapa ada banyak bahasa pemrograman? Bukankah pemrograman dilakukan dengan membuat statement/source code dengan bahasa pemrograman? 
Mengapa tidak 1 bahasa pemrograman saja?

Nah....sebenarnya di dunia ini ada 1 bahasa pemrograman yang dijalankan oleh komputer/CPU kita, yaitu bahasa mesin.
Namun, bahasa mesin sulit dibaca dan dipahami oleh manusia sehingga dibutuhkan bahasa yang menjembatani antara bahasa mesin dengan 
bahasa manusia, yaitu bahasa pemrograman banyak sekarang ini.

Mengapa ada banyak bahasa pemrograman yang menjembatani antara bahasa mesin dengan bahasa manusia?
Alasannya sederhana, karena didasarkan pada keinginan manusia itu sendiri layaknya seperti bahasa manusia yang berbeda-beda pada 
setiap negara. Selain itu, pada tiap era juga memerlukan bahasa pemrograman yang sesuai sehingga memudahkan pekerjaan manusia 
(didesain secara khusus untuk tipe program yang spesifik).

Semakin ke atas (higher level) maka bahasanya semakin mudah dipahami manusia serta semakin mudah penulisan/sintaks nya, 
tetapi performa kecepatan pemrograman nya semakin lambat walaupun sekarang manusia tidak memedulikan karena hardware/CPU sudah semakin canggih.
Jadi, sederhana nya, apa yang kita tuliskan dalam bahasa pemrograman disebut sebagai source code yang nantinya diterjemahkan ke bahasa 
mesin sehingga dijalankan oleh komputer.

Objektivitas :
1. Bagaimana menulis source code
2. Bagaimana Source code dikonversi ke bahasa mesin,
3. Bagaimana mengeksekusi source code.


Bagaimana cara menulis Source Code?
Sebenarnya bahasa pemrograman ditulis dengan menggunakan text sederhana yang dinamakan plain text, berbeda dengan text yang digunakan 
pada Microsoft atau sosmed.
Untuk menuliskan source code ini, bisa menggunakan text editor sederhana yang sudah ada di OS kita, misal di windows menggunakan notepad, 
sedangkan MAC menggunakan textedit.


Selain itu, terdapat text editor lainnya yang dibuat untuk mempermudah programmer yang bernama code editor.
Selain itu, terdapat IDE(integrated development enviroment) yang mirip dengan code editor tetapi terdapat fitur tambahan.


*/


//Compiler vs Interpreter (Title)
/*
19.29

Sebelumnya kita telah mempelajari alur pemrograman, yaitu instruksi/program -> source code(dalam bahasa pemrograman tertentu) 
-> eksekusi program.
Sekarang, perlu diketahui bahwa pada eksekusi program(menerjemahkan bahasa pemrograman menjadi bahasa mesin) memiliki 3 metode, 
yaitu interpreted, Compiled, dan hybrid(menggabungkan kelebihan Interpreter dan Compiler).

Metode Compiler ialah metode yang menerjemahkan bahasa pemrograman menjadi bahasa mesin secara compiling menggunakan Compiler yang 
ada pada bahasa pemrograman itu sendiri serta menghasilkan executable(file eksekusi) yang dijalankan oleh komputer secara terpisah 
dengan source code.
Jika dilihat pada diagram di atas, user A melakukan compiling pada source sehingga menghasilkan file executable untuk dikirimkan ke 
user lain(B) tanpa disertai source code nya sehingga user B hanya menjalankan file executable yang telah dicompiled oleh user A.

Pada metode interpreter, user A membuat source code, tetapi bukan me-compile source code nya, melainkan menduplikat source code nya 
untuk dikirimkan ke user lain (B), yang nantinya user lain (B) menggunakan Interpreter untuk menerjemahkan program/source code yang 
sudah diberikan oleh user sebelumnya (A) lalu menjalankan Interpreter nya sekaligus menjalankan programnya. Interpreter menjalankan 
program secara real time berurutan sesuai urutan source code (baris per baris).
Contohnya ialah pada website, hampir semua website yang ada sekarang itu ada source code JavaScript di dalamnya , ketika website nya 
diakses sebenarnya ada sebuah interpreter yang terdapat di web browser kita yang gunanya untuk menerjemahkan source code JavaScript tersebut.

KELEBIHAN DAN KEKURANGAN COMPILER & INTERPRETER

KELEBIHAN COMPILER :
	1. Siap untuk dijalankan
	Program compiled (file executable) siap dijalankan oleh user serta ,
	2. Lebih cepat
	program cenderung lebih cepat dibanding interpreter karena setelah dicompile sudah teroptimasi ke bahasa mesin.
	3. Source code tidak dapat dilihat
	Source cenderung lebih aman karena tidak dapat diakses oleh user, user hanya melihat hasil compiled nya, bukan source code nya. 
    Source code tetap ada di programmer nya.
	
KEKURANGAN COMPILER :
	1. Tidak lintas platform
	Maksudnya adalah tidak dapat lintas sistem operasi karena begitu dicompile hasil compile nya hanya compatible untuk OS tertentu. 
    Bahkan, ketika OS sama, tetapi prosesor(CPU) berbeda ada kemungkinan program tidak berjalan.
	2. Tidak Fleksibel
	Karena ketika ada kesalahan dan user ingin memodifikasi program, maka perlu compile ulang source code (compile adalah langkah 
    tambahan setelah coding).
	3. Perlu Langkah Tambahan setelah coding Jika ada modifikasi program

KELEBIHAN INTERPRETER :
	1. Lintas Platform
	Kebalikan pada Compiler, Interpreter tidak peduli OS dan CPU nya apa asalkan user punya Interpreter nya maka source code dapat 
    dijalankan,
	2. Lebih Fleksibel
	Tidak perlu compile ulang, sehingga mudah untuk dimodifikasi
	3. Mudah untuk diuji

KEKURANGAN INTERPRETER :
	1. User memerlukan Interpreter
	Misalnya tadi pada website, maka user perlu web browser sehingga source code dapat dijalankan.
	2. Lebih lambat 
	Karena setiap membuka program maka perlu interpretasi dulu menggunakan Interpreter
	3. Source code mudah diakses
	Karena yang diberikan berupa source code maka mudah diakses orang lain.



Hybrid
Adalah metode yang dimiliki oleh beberapa bahasa pemrograman yang disebut sebagai intermediate language yang menggabungkan kelebihan 
Compiler dan Interpreter 

Pada hybrid, user A melakukan compiling, tetapi hasil compiling bukan berupa executable file, melainkan intermediate language (IL) / 
bytecode yang bedanya dengan Interpreter adalah bytecode ini sudah teroptimasi dengan bahasa mesin yang sama seperti executable, 
kemudian bytecode dijalankan secara just in time(JIT) compilation yang artinya compiling sambil menjalankan program sekaligus.


Sebenarnya secara teori, semua bahasa pemrograman dapat dijalankan dengan ketiga cara tersebut, tetapi pada tiap-tiap bahasa 
pemrograman hanya digunakan 1 metode saja yang disesuaikan dengan kebutuhan dan jenis/model programnya.


*/


//Mengapa belajar JS dan Sejarah JS (Title)


//Environment JS (TITLE)




