// Value dan Tipe Data JS (TITLE)

/*
Sebenarnya jika kita meninjau komputer lebih dalam, itu hanya ada data. Kita bisa membaca, memodifikasi, membuat baru, dan menghapus data. 
Semua data ini tersimpan ke dalam serangkaian yang dinamakan bit. Semua data yang ada di komputer direpresentasikan dalam bilangan biner.

Bit adalah satuan terkecil dari data yang ada di dalam komputer kita. Nama lain dari bit adalah digit biner/binary digit. 
Setiap digit biner tersusun dari bilangan biner saja (High = 1 atau Low = 0). Untuk mempelajari lebih jauh, dapat dipelajari pada elektronika, 
di mana komponen komputer yang berpengaruh ialah transistor. Selain itu, pada elektronika juga dipelajari sistem bilangan digital, 
termasuk jenis-jenis dan pengoperasiannya, sertan konversi antaranya.


Di dalam komputer ada banyak sekali bit. Kumpulan bit tertentu disebut sebagai value/nilai. Value/nilai ini tersusun dari beberapa bit. 
Value/nilai satu dengan yang lainnya bisa saja memiliki peran yang berbeda, dan perannya inilah yang selanjutnya dinamakan sebagai 
tipe data/data type.

Tipe data yang ada di JavaScript ialah:
	1. Number (termasuk int negatif dan positif, serta desimal),
	2. String,
	3. Boolean,
	4. Object,
	5. Function,
	6. Undefined.

Untuk menggunakan sebuah nilai/peran tertentu yang perlu kita lakukan hanya memanggilnya.

Setiap nilai/tipe data yang kita buat akan tersimpan di sebuah tempat komputer yang dinamakan memori atau RAM. Jika kita ingin membuat 
atau membutuhkan nilai yang sangat besar dalam suatu waktu tertentu, mungkin saja kita kehabisan bit karena memori ada kapasitasnya. 
Itu terjadi ketika kita membutuhkan bit yang banyak dan secara simultan, dan itu hampir tidak mungkin. Tidak perlu khawatir kehabisan 
memori karena semakin berkembangnya era pasti sudah semakin canggih.

Bit jika sudah tidak terpakai dapat dihapus sehingga mereset menjadi bit kosong dan dapat digunakan kembali.


*/


//Tipe Data : Number (TITLE)
/*
"Numbers in JavaScript are double-precision floating point 64-but format IEEE 754 values."
Maksudnya adalah di dalam JavaScript tidak ada integer, yang hanya adalah floating point(desimal/pecahan). Jika kita menggunakan integer 
pada JS, sebenarnya JS memprosesnya tetap dalam bentuk  floating(desimal). 
Selain itu, maksudnya adalah JavaScript hanya dapat menampung tipe data hingga 64 bit atau 2⁶⁴. 
Namun, kita tidak bisa pakai semua karena di dalam 64 bit ini terdapat penanda yang harus kita gunakan untuk menampung tipe data tertentu. 

Terdapat jenis number yang dapat disimpan pada JavaScript, yaitu
	1. Angka tanpa desimal dan dengan desimal (termasuk bilangan negatif)
	Contoh
	10; -1500; 123456; 1.2 ; dsb...dengan catatan tingkat akurasinya hanya sampai 15 digit/bit.
	Perlu diperhatikan pada JS jika kita membuat lebih dari 15 bit, maka akan dibulatkan menjadi 16 digit dengan pembulatan ke atas. 
    Karena yang sebelumnya dibahas, JavaScript memprosesnya sebagai bilangan pecahan/desimal sehingga terjadi pembulatan. 
    Bagaimana jika pas 15 bit? Tidak masalah.
	Tenang aja, kita hampir tidak mungkin melakukan kalkulasi sedetail itu.
	Selain itu, hati-hati dalam mengoperasikan menggunakan JS ini, misalkan menjumlahkan, bilangan desimal, hasilnya kadang-kadang 
    berupa aproksimasi/mendekati.
	Misal, 0.3 + 0.7, ketika di-enter harusnya menjadi 1.0, tetapi
	0.2 + 0.1 = 0.30000000000000004. hehehe

	2. Eksponen
	123e5 = 12300000
	123e-5 = 0.00123
	
	Selain itu, pada JS terdapat aturan penulisan bilangan negatif, eksponen, dan angka sebenarnya. Maksudnya apa? Dari 64 bit, 
    terdapat pembagian,
	1 bit digunakan sebagai penanda bilangan negatif, 11 bit sebagai eksponensial, dan 52 bit sebagai angka sebenarnya, 
    termasuk penulisan titik untuk desimal.
	
	3. Jangan mengawali tipe data angka dengan 0... atau 0x....
	Misal 022, JS secara otomatis merepresentasikan sebagai 18, karena JS mengira 022 dalam format oktal (basis 8). 
	Sama halnya dengan menuliskan angka dengan diawali 0x...., misal 0xFF karena JS mengira dalam format hexadesimal/hex (basis 16), 0xFF = 255 btw.
	
	4. Angka spesial
	Contoh 
	infinity; -infinity; NaN (not a number) ; number/string = number.
	Misalkan,
	2/0 = infinity ; -2/0 = -infinity ; 0/0 = NaN ; number/string = NaN;
	Nah hati-hati nih, di JS penulisan angka dalam format string akan membaca string tsb dalam number, 100/"10= 10.


*/

var x = 9999999999999999;
    console.log(x); //akan dibulatkan ke  jadi 17 digit karena lebih dari 15 digit juga lebih mendekati ke atas.
var a = 1000000000000000;
    console.log(a); //akan dibulatkan ke bawah serta tetap jadi 16 digit karena lebih dari 15 digit dan juga lebih mendekati ke bawah.
var b = 5000000000000000;
    console.log(b); //dibulatkan ke bawah serta 16 digit
var c = 5000000000000001; //utuh
    console.log(c);
var d = 9000000000000000; //utuh
    console.log(d);
var e = 9000000000000009; //utuh
    console.log(e);

//eksponen
console.log("\n\n===== Exponential =====")

var y = 12e5;
    console.log("nilai y = ", y);
var z = 12e-5;
    console.log("nilai z = ", z);
var x = -12e-5;
    console.log("nilai x = ", x);
var p = 3^3; //bagaimana cara mendeklarasikan pangkat dan akar di JS??
    console.log("nilai p = ", p);
var q = (3)/(3^3); //kenapa hasilnya infinity??
    console.log("nilai q = ", q);

//special numbers
console.log("\n\n===== Special Numbers =====")

var a = 2/0 //infinity
    console.log("nilai a = ", a)
var b = -2/0 // -infinity
    console.log("nilai b = ", b)
var c = 0/0 // NaN
    console.log("nilai c = ", c)
var d = 10/"2"
    console.log("nilai d = ", d)


//Operator pada JavaScript (TITLE)
/*
Operator dalam JavaScript adalah sebuah simbol yang digunakan untuk melakukan operasi.

Operator pada JS antara lain :
aritmatika, penugasan, perbandingan, logika, string, kondisional, typeof. Operator-operator ini juga
dibagi menjadi 3 jenis, yaitu
-Operator Binary : aritmatika, penugasan, perbandingan, logika, string.
-Operator ternary : kondisional.
-Operator Unary : typeof.

Operator Binary
adalah operator yang membutuhkan 2 operand.
form : operand_1 OPERATOR operand_2


Operator Unary
adalah operator yang membutuhkan 1 operand.
form : OPERATOR operand,  atau
operand OPERATOR


Operator Ternary
adalah operator yang membutuhkan 3 operand.
form :

*/


//Operator aritmatika
console.log("\n\n\n===== Operator Aritmatika =====")
/* tambah (+), kurang (-), perkalian (*), pembagian (/), modulo/modulus atau sisa bagi (%) 
dengan urutan operasinya adalah kurung>perkalian>pembagian>pengurangan dan penambahan > modulo.
*/

var a = 5 + 10
    console.log("5 + 10 = ", a)
var b = (7 + 5) / 2 % 3 // jika hasilnya 0, artinya tidak ada modulo atau habis dibagi oleh 3.
    console.log("b = ", b)


//Operator Penugasan / Assignment (=)
/* assign(=), menambah (+=), mengurang (-=), mengalikan (*=), membagi (/=), memodulokan (%=)
*/
console.log("\n\n===== Operator Assignment =====") 
var x
x = 10
    console.log("x = ", x) //diambil dari assignment paling akhir.
x += 5
    console.log(" x += 5 = ", x)

//Operator Perbandingan / Comparison
/* 
sama dengan (==) atau (===) untuk memastikan hingga kesamaan tipe datanya/ strict sama dengan / operator identitas, tidak sama dengan (!=),
strict tidak sama dengan (!==), lebih besar dari (>), lebih kecil dari (<), lebih besar sama dengan (>=), lebih kecil sama dengan (<=).

Hasil dari operator perbandingan berupa tipe data boolean (true, false)
*/
console.log("\n\n===== Operator Perbandingan =====")
    console.log("Apakah 10 == 10? ", 10 == 10)
    console.log("Apakah 10 == 15? ", 10 == 15)
    console.log("Apakah 10 != 15? ", 10 != 15)
    console.log("Apakah 10 != 10? ", 10 != 10)
    console.log("Apakah 10 === \"10\"? ", 10 === "10")


//Operator Logika
/* and (&&) ; or (||) ; not (!)
*/
console.log("\n\n===== Operator Logika =====")
var x = 12
    console.log("misalkan x = 12, maka")
    console.log("Apakah x % 2 == 0 ? ", (x%2)== 0) //btw (x % 2) bisa digunakan untuk memeriksa apakah x genap atau bukan. 
    console.log("Apakah (x % 2 == 0) dan (x > 12) bernilai benar ? ", (x % 2 == 0) && (x > 12)) //jawabannya adalah false
    console.log("Apakah (x % 2 == 0) atau (x > 12) bernilai benar ? ", (x % 2 == 0) || (x > 12)) //jawabannya adalah true
    console.log("Apakah not (x % 2 == 0) or (x > 12) bernilai benar ? ", !(x % 2 == 0) || (x > 12)) //jawabannya adalah false

//Operator String
/*Tipe data string dalam JS digunakan untuk merepresentasikan data textual atau bisa dikenal sebagai plain text.
*/
console.log("\n\n===== Operator String =====")
var a = "apple";
var b = "pen";
console.log('"apple" + "pen" = ', a + b) //hasilnya applepen, btw ini operasi string + ini disebut konkatenasi.
console.log(10 + "10") //hasilnya 1010
console.log("10" + 10) //hasilnya 1010
console.log("10" + 10 + 10) //hasilnya 101010
console.log(10 + 10 + "10") //hasilnya 2010

/* Penulisan String
-kaidah pertama : "value"
-kaidah kedua : 'value'
-kaidah ketiga : "Hari ini adalah hari Jum'at."
-kaidah keempat : 'Terdapat slogan "Gerakan Pungut Sampah" pada papan reklame di sana.'
-kaidah kelima : gunakan \' atau \"  (escape character) jika sangat kompleks. Contohnya
    'Slogan "Gerakan Pungut Sampah" dipasang pada hari Jum\'at."

Escape Character :
\'  hasilnya '
\"  hasilnya "
\\  hasilnya \
\n  hasilnya new line atau baris baru
\t  hasilnya tab
\b  hasilnya backspace
\uXXXX  hasilnya simbol-simbol unicode yang bergantung apa itu masing-masing X-nya (contohnya simbol copyright u00A9, u2122 simbpol TM, dsb...)
\0  hasilnya karakter NULL
*/
console.log('Slogan "Gerakan Pungut Sampah" itu dipasang sejak hari Jum\'at.')

var x = "Abdill sangat ganteng, no doubt!"
    console.log("Berapakah panjang atau jumlah karakter dari value x yang berupa string(termasuk spasi) ? ", x.length, "karakter")

/* Pada string juga dapat diterapkan operator logika dan perbandingan untuk memeriksa/mengidentifikasi valuenya.*/

//Operator typeof(operand)
/* Operator ini termasuk operator unary. Fungsi Operator ini untuk memeriksa jenis tipe data dari sebuah value/variabel.
*/
console.log("\n\n===== Operator Typeof =====")
var x = "10"
    console.log("Misalkan x '10', \njenis tipe data apakah x itu ? ", typeof(x)) //jawabannya adalah string




//Operator Kondisional
/*Operator ini termasuk jenis operator ternary. Operator ini digunakan untuk melakukan pengecekan pada sebuah kondisi
dan menentukan nilai yang dihasilkan ketika kondisinya bernilai true atau false.
form : (kondisi) ? benar : salah
*/
console.log("\n\n===== Operator Kondisional =====")
    console.log((x%2 == 0) ? "genap" : "ganjil"); //hasilnya kondisinya true, maka yg diambil adalah pernyataan "genap".
    


//Boolean
console.log("\n\n===== Boolean =====")
/*adalah sebuah tipe data yang digunakan untuk merepresentasikan logika true dan false.
Pada pemrograman, tipe data boolean ini digunakan pada statement pengondisian, untuk menentukan aksi yang berbeda, dan
mengatur alur kendali program.

value tipe data boolean : true, false.

*/
var x = 10;
    console.log("Misalkan x = 10,\nApakah x<20? ",x<20) //hasilnya true
    console.log("Abdill" == "abdill")
    console.log(Boolean("Abdill")) //true
    console.log(Boolean(-1)) //true
    console.log(Boolean(0)) //false

/*Truthy(menghasilkan nilai true) dan Falsy (menghasilkan nilai false)
Sebenarnya pada tipe data Boolean JS, terdapat ketetapan, yaitu
1. non-zero number (true), sedangkan 0 (false)
2. "string" (true), sedangkan ""(false)
3. object(true), sedangkan undefined(false)
4. arrays(true), sedangkan null(false)
5. functions(true), sedangkan NaN(false). 
*/
