//Function intro (TITLE)
/*
Objektivitas belajar function
-User-Defined Function
-Function Declaration vs Function Expression
-Parameter / Argument
-Return Value
-Scope
-Refactoring
-Hoisting
-Closure
-Recursion
*/


/*
Function adalah kunci utama pada javascript, yang membuat javascript sangat powerfull.

Jika kalian sudah pernah belajar bahasa pemrograman lain selain JS, pasti kalian telah mendengar/menggunakan
method, class, constructor, module, dsb..., nah itu adalah sebutan lain untuk function. Pada JS, kita cukup sebut sebagai function.

Apa itu function?
-sebuah sub-program/sub-routine yang dapat 'dipanggil' di bagian lain pada program,
-merupakan struktur dasar pembentuk dari JS,
-disebut juga sebagai prosedur(kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai),
-Untuk dapat menggunakannya, kita harus 'membuat' terlebih dahulu function tersebut, lalu 'memanggil'nya,
atau kita menggunakan function yang sudah tersedia pada JS sehingga cukup memanggilnya saja,
-Termasuk ke dalam First-Class Object.


Function dibagi menjadi 2 jenis berdasarkan cara penggunaannya, yaitu Built-In Function dan User-Defined Function.
1. Built-In Function
-fungsi yang sudah disediakan/dibuat oleh JS itu sendiri.
-kita cukup memanggilnya saja,
contoh alert(); prompt(); confirm(); praseInt(); praseFloat(); dan masih banyak lainnya...
bisa check di https://www.w3schools.com/jsref_obj_string.asp 

*/
console.log("===== Contoh Built-In Function =====")
/*  charAt() ; slice() ; split() ; toString() ; toLowerCase() ; toUpperCase() ; ...
*/
var nama = "Mohamad Abdillah"
console.log(nama.charAt(8)) //btw indeksnya mulai dari nol, dan perhitungan termasuk karakter spasi.

/*
2. User-defined Function
-Fungsi yang kita buat sendiri
-menggunakan keyword function (optional)
-parameter/argument : disimpan di dalam() ; boleh ada atau tidak, jika ada boleh lebih dari 1 serta dipisahkan oleh koma (,);
-Function body, 'dibungkus' dengan {}
-dapat mengembalikan nilai(return value) atau tidak.


Membuat User-Defined Function
- dengan deklarasi/Function Declaration
- dengan ekspresi/Function Expression

Contoh
1. Function Declaration
function jumlahDuaBilangan(a,b) {
    var total;
    total = a + b

    return total;
}

keterangan :
-kata 'function' adalah keyword function, untuk memberitahu interpreter javascript bahwa kita akan mulai menulis sebuah fungsi,
-jumlahDuaBilangan adalah nama fungsi.
-(a,b) yang di samping nama fungsi adalah parameter, anggap sebagai variabel khusus untuk function.
Selain itu, adalah data yang dikirim dari luar saat pemanggilan function, untuk digunakan di dalam function.
-semua yang ada di dalam {} adalah function body untuk menandai awal dan akhir sebuah fungsi.
-return adalah nilai kembalian/return value, sebuah function biasanya mengembalikan sebuah nilai dengan menggunakan
keyword return lalu diikuti dengan nilai kembaliannya. Kegunaannya adalah untuk memberitahu interpreter bahwa kita telah
selesai mengerjakan sesuatu dan inilah hasilnya.


2. Function Expression
var jumlahDuaBilangan = function(a,b)   {
    var total;
    total = a + b;

    return total;
}


Prinsipnya adalah :
input -> Function -> Output

Function yang baik hanya mengerjakan 1 hal saja karena sejatinya fungsi adalah :
-blok kode yang dibuat untuk melakukan tugas spesifik,
-dapat dipanggil berulang kali,
-memudahkan penelusuran,
-reusability.

*/

console.log("\n\n===== Contoh Function : Menentukan volume kubus =====")
function jumlahVolumeDuaKubus(a,b)  {
    var volumeA;
    var volumeB;
    var total;
//dengan a adalah panjang rusuk dari kubus A, dan b adalah panjang rusuk dari kubus B dalam satuan cm.
    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;


    return total;
}
//jumlahVolumeDuaKubus(); //kalau manggil seperti ini saja, maka tidak akan muncul apa-apa wkkwwkk, karena blm ada input fungsi.
//jumlahVolumeDuaKubus(2,3) //ini juga sama wkwkwk, tapi fungsinya sudah bekerja dan outputnya sudah disimpan di dalam memori.
console.log("Jumlah volume dari 2 buah kubus adalah " + jumlahVolumeDuaKubus(2,3));

//Perbedaan Parameter (a,b) dan Argument (nilai1 , nilai2)
/*
-Parameter adalah variabel yang ditulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan
saat function dipanggil.
-Argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil (ini dibuat diluar fungsi sebagai penginput nilai)
*/

/*
function tambah(a,b)   {
    return a + b ;
}

var a = prompt("Masukkan nilai pertama : ");
var b = prompt("Masukkan nilai kedua : ");
var hasil = tambah(a,b);
console (hasil)
*/

//Bagaimana jika parameter dan argument-nya tidak sesuai?

//pertama : Jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan. contoh
function tambah(a,b)    {
    return a + b ;
}
var coba = tambah(5,10,20) ; console.log(coba) //nilai input 20 akan diabaikan kan? hehehe

//kedua : jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined.
function tambah(a,b,c)    {
    return a + b + c;
}
var coba = tambah(5,10) ; console.log(coba) //undefined kan? heheh

//Arguments : adalah array yang berisi nilai yang dikirimkan saat fungsi dipanggil (begitulah yaa summary nya). coba saja
function tambah()   {
    return arguments;
}
var coba = tambah(5,10,20,"hi", false); console.log(coba) //nanti akan ditampilkan array arguments nya.


//Bisa saja kita membuat fungsi tanpa parameter, begini caranya
console.log("\n\n===== Membuat fungsi tanpa parameter =====")
function tambah()   {
    var hasil = 0 ;
    for(var i = 0; i < arguments.length; i++)   {
        hasil += arguments[i]
    }
    return hasil
}

var coba = tambah(1,2,3,4); console.log(coba) //bisa kan?hehe


//Scope atau lingkup Variabel (TITLE)
console.log("\n\n===== Scope =====")
/*
Secara sederhana, scope ini adalah konsep tentang cara mengakses suatu variabel global dan variabel lokal di antara
sebuah fungsi. Scope menjadi perhatian utama para programmers pemula karena cukup membingungkan.
Scope sendiri di pemrograman ada 2 macam, yaitu block scope & function scope.
Contoh block scope ini digunakan pada bahasa pemrograman C dan Java.

Contoh Block Scope (Menggunakan bahasa C)
int i = 2;
if(i % 2 == 0)  {
    bool genap = true;
}

if(genap)   {
    printf("genap!");
}

Nah, jika dijalankan, seharusnya muncul "genap" pada terminal, tetapi nyatanya tidak, bahkan eror yang menyatakan bahwa
"genap" in undeclared.
Jika diperhatikan, eror terjadi karena variabel: bool genap = true; tidak dapat diakses di luar tanda kurung kurawal {},
sehingga variabel tersebut hanya dapat diakses oleh program yang ada di dalam {} juga dan variabel ini disebut sebagai variabel lokal.
Jadi, pengondisian if yang di bawahnya/setelahnya, tidak dapat memanggil variabel tsb.


*/
console.log("\n===== Contoh Pendahuluan Scope JS =====")
var i = 2;

if(i % 2 == 0)  {
    var genap = true;
}

if(genap)   {
    console.log("Genap!");
} //program succeed
//Nah..., JS menggunakan function scope!


console.log("===== memulai =====")

//Kasus Global dan Local Scoping
var a = 1 //ini namanya global variable, dapat diakses oleh variabel lokal/program lokal


function tes()  {
    var b = 2;
    console.log(b); // ini namanya local scoping
}

tes();
//console.log(b); //Jika dijalankan, b is not defined hehe. Ini karena variabel b adalah variabel lokal, dan hanya bisa local scoping.
//console.log(a) // Ini bisa, karena a merupakan variabel global, dan dapat dilakukan global scoping.


//Kasus name conflict antara variabel lokal dan global

/*var a = 1 //ini namanya global variable, dapat diakses oleh variabel lokal/program lokal


function tes()  {
    var a = 2;
    //console.log("Pemanggilan dari dalam : " + a); //akan mengakses variabel lokal , apakah bisa akses variabel global?bisa dong (global scoping)!
    console.log(window.a); //btw ini jalaninnya di browser yak, blm tau knp kalau di vscode malah window is not defined
}

tes();
console.log("Pemanggilan dari luar : " + a) // variabel yang diakses adalah variabel global! apakah a lokal terakses? tidak sama sekali!
*/

//contoh kasus lain


console.log("\n\n===== Contoh Kasus lain =====")
var a = 1 //ini namanya global variable, dapat diakses oleh variabel lokal/program lokal


function tes()  {
    a = 2; //ini membuat fungsi mencari keberadaan variabel a terlebih dahulu di luarnya, jika ada maka datanya akan ditimpa/diupdate.
    /*Jika di luar function tidak ada variabel a, maka JS secara otomatis membuat a (tanpa keyword variabel)
    yang ada di dlm fungsi menjadi variabel global. Perlu hati-hati!Maka dari itu untuk membuat variabel lokal, 
    harus ditambahkan keyword variabelnya!
    */
    
}

tes();
console.log("Pemanggilan dari luar : " + a)

//untuk mencegah a tanpa keyword di dlm fungsi menjadi variabel global, dapat kita gunakan keyword "use strict" sebelum fungsi/di atas fungsinya

console.log("\n===== use strict =====")
var a = 1 //ini namanya global variable, dapat diakses oleh variabel lokal/program lokal

"use strict"; //dengan demikian, JS akan membuat a menjadi variabel lokal
function tes()  {
     a = 2;
    
}

tes();
console.log("Pemanggilan dari luar : " + a) // variabel yang diakses adalah variabel global! apakah a lokal terakses? tidak sama sekali!


//contoh kasus lain
console.log("\n\n===== Contoh Kasus Lain =====")
var a = 1

function tes(a) {
    console.log(a);
}

tes(2); //hasilnya adalah 2, ini karena JS konsisten jika terdapat argument pada  fungsi, maka lngsng dibuat menjadi local scoping

//sekarang, bagaimana jika seperti ini (terdapat pemanggilan fungsi berargumen yang sama dengan pemanggilan global oleh console.log)
var a = 1

function tes(a) {
    console.log("Pemanggilan dari dalam : " + a);
}

tes("Pemanggilan dari luar : " + a); 
console.log("Pemanggilan dari luar : " + a); //nah, kedua pemanggilan ini akan mengacu pada variabel global.



//Recursive atau rekursif atau rekursi atau recursion (TITLE)
console.log("\n\n===== Fungsi Rekursif =====")
/*
Rekursi adalah sebuah fungsi yang memanggil dirinya sendiri.
Kita tahu bahwa prinsip kerja fungsi ialah : input -> fungsi -> output

nah, tetapi kalau di fungsi rekursi, terdapat baris kode yang memanggil function-nya sendiri, kapan output? sampai berhenti!
Akan tetapi, ada kemungkinan menjadi looping yang tidak berakhir! Di sini sejatinya fungsi rekursif ialah pasti menghasilkan output
walaupun mengalami looping sebanyak n kali.
*/
//contoh awal fungsi rekursi
/*function tes()  {
    return tes();
}

tes();

pliss jangan dirun woakoakwoako, bakalan jadi looping forever.
*/

console.log("\n===== Membuat Fungsi Rekursif yang mirip dengan Looping For =====")
// for(var i = 10; i >= 1; i--)    {
//     console.log(i);
// }

// console.log("Fungsi Rekursifnya")
// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10); //nah, ini awalnya bener dari 10 sampai 1, tapi malah looping forever di minus tak hingga.

//kita perlu menaruh base case : kondisi akhir dari rekursif yang menghasilkan nilai.
for(var i = 10; i >= 1; i--)    {
    console.log(i);
}

console.log("Fungsi Rekursifnya")
function tampilAngka(n) {
    if( n === 0 )   {
        return; //artinya : Jika memang nanti pada akhirnya n === 0, maka return. 
    }
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10); //nah ini baru works HAHAA

//Penulisan base case yang lainnya
function tampilAngka(n) {
    if( n === 0 ) return; //artinya : Jika memang nanti pada akhirnya n === 0, maka return. 
    
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10); 

//Aplikasi fungsi rekursi : faktorial
function faktorial(n)   {
    if(n === 0) return 1;
    return n * faktorial(n-1);
}
var x = faktorial(5); console.log("5! = " + x)

console.log("Looping faktorialnya")
// function    faktorial(n)    {
//     var hasil = 1;
//     for(var i = n; i>0 ; i--)   {
//         hasil *= i;
//     }
// }
// var y = faktorial(5) ; console.log("5! = " + y);

//note : semua looping bisa dibuat rekursif, tetapi tidak sebaliknya !!!

/*Implementasi Rekursi
-Menggantikan looping
-fibonacci
-pencarian dan penelusuran pada struktur data list dan tree
-pembuatan game
-AI
-bahasa pemrograman yangtidak memiliki looping/pengulangan :haskell, Erlang, Prolog, dll...
*/


//Function Declaration vs Function Expression (TITLE)

/*
format function declaration :
function    identifier(parameterlist 'optional')    {FunctionBody}

format function expression :
function    identifier'optional'(parameterlist 'optional)   {FunctionBody}

*/

//contoh Function Declaration
console.log("\n\n===== Contoh Function Declaration =====")
function    tampilPesan(nama)   {
    console.log("Halo " + nama)
}
tampilPesan("Abdillah!")

//contoh Function Expression
console.log("\n===== Contoh Function Expression =====")
var tampilanPesan = function    (nama)  {
    console.log("Halo " + nama)
}
tampilanPesan("Semuanya!")


/* Summary
Function Declaration :
-lebih fleksibel (dapat ditulis dimanapun), maksudnya adalah kita bisa memanggil dulu baru buat fungsi, dan sebaliknya.
Ini bisa karena pada JS ada konsep hoisting.
-lebih mudah dipahami oleh pemula
-

Function Expression :
-Harus didefinisikan terlebih dahulu, baru bisa dipanggil
-lebih powerfull : sebagai closure, sebagai argumen untuk function lain,
IIFE (Immediately Invoked Function Expression).

PILIH YANG MANA??
Pada dasarnya, sama saja.
Namun, pada pemrograman JS lebih lanjut, dan juga di functional programming. 
Selain itu, pada framework JQuery, dll...memakai function expression.
Jadi, jika sudah biasa menggunakan function, gunakanlah function expression!
*/