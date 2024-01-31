//Object    (TITLE)
/*
Jika array merupakan kumpulan nilai yang memiliki indeks(key & value) serta array dikatakan sebagai variabel sakti, maka
Object adalah array yang lebih sakti. Object dapat menyimpan variabel, function, array, serta object lagi.

"In JavaScript, object are king.
If u understand object, u understand JavaScript."

Object pada bahasa pemrograman lain memiliki penyebutan yg berbeda-beda,
-PHP        : Associative Array
-Python     : Dictionary
-C          : Hash Tables
-Java       : Hash Maps
-Ruby&Perl  : Hashes
*/

//Kenapa harus object ?
//Jika kita sebelumnya membuat program  seperti berikut,
var namaMhs = 'Mohamad Abdillah'
var umurMhs = '19'
var lulus   = true
var IPSemester = [3.11, 3.0 , 3.11, ]
function    IPKumulatif(IPSemester) {
    var total = 0;
    for( var i = 0; i < IPSemester.length; i++) {
        total += IPSemester[i];
    }
    return total/IPSemester.length;
}
console.log(IPKumulatif(IPSemester))

//Maka mulai sekarang pakailah object. Gimana cara buat object? next dulu aja
/*
var mhs = {}; //jika kosong, kita dapat membuat object secara manual melalui terminal code editor/console browser.

mhs.name = "Abdillah"; //maka akan muncul "Abdillah" jika kita panggil dengan mhs.name
mhs.umur = 19;  //maka akan muncul integer 19 jika kita panggil dengan mhs.umur
dst...Akan tetapi, data ini tidak permanen menjadi object, jika kita clear terminal/console, maka dirun ulang menjadi undefined.

Jadi, supaya permanen, berikut caranya.
*/

//membuat object dengan cara pendahuluan hehe
var diri = {
    nama : "Mohamad Abdillah",
    umur : "27",
    ips  : [3.11 , 3.0, 3.1],
    alamat : {
        jalan   : "Hamburg, Number 7",
        city    : "Hamburg",
    },
    IPKumulatif : function    IPKumulatif(IPSemester) {
        var total = 0;
        for( var i = 0; i < IPSemester.length; i++) {
            total += IPSemester[i];
        }
        return total/IPSemester.length;
    }
};

//Pada Object, elemen-elemen variabel disebut properti, sedangkan elemen-elemen function disebut method.


//memanggil elemen pada object
console.log("Nama diri : " + diri.nama)
console.log("Nama diri : " + diri["nama"]) //bisa juga seperti ini, senyamannya aja
console.log("Usia : " + diri.umur + " year old")
console.log("IPS : " + diri.ips)
console.log("IPS Semester 2 : " + diri.ips[1]) //jika ingin memanggil elemen object dari elemen array
console.log("Alamat : " + diri.alamat)
console.log(diri.alamat.city) //jika ingin memanggil elemen object dari elemen variabel
console.log("Alamat Jalan : " + diri.alamat["jalan"])


//Membuat Object pada JS
console.log("\n\n===== Mari Membuat Object dengan JS =====")

/*
terdapat beberapa metode berdasarkan prosedur membuat object pada JS,
-Object Literal
-Function Declaration
-Constructor Function (keyword new)
-object.create()
*/

//Object Literal

var diri = {
    nama : "Mohamad Abdillah",
    umur : "27",
    ips  : [3.11 , 3.0, 3.1],
    alamat : {
        jalan   : "Hamburg, Number 7",
        city    : "Hamburg",
    }
}; //console.log("Menggunakan Object Literal : " + diri) //Manggil kek gini gabakal muncul di terminal vscode wkwkwk.
console.log("\n ===== Menggunakan Object Literal : ")
console.log(diri)

//Function Declaration
function    buatObjectMahasiwa(nama, npm, email, jurusan, kampus)   {
    var mhs   = {};

    mhs.nama    = nama;
    mhs.npm     = npm ;
    mhs.email   = email;
    mhs.jurusan = jurusan;
    mhs.kampus  = kampus

    return mhs;
    
}

var mhs1 = buatObjectMahasiwa("Mohamad Abdillah", "2x06050296", "abdillahyudli@gmail.com", "Fisika", "Universitas Indonesia") //gini pemanggilannya untuk pembuatannya
//console.log("\n\nMenggunakan Function Declaration : \n " + mhs1) // manggil kek gini ga tampil di terminal vscode awkoawkaok
console.log("\n\n===== Menggunakan Function Declaration :")
console.log(mhs1)

//constructor

function    Mahasiswa(nama, npm, email, jurusan, kampus)   { //komitmen dari awal : nama identifier fungsi berawal huruf kapital sebagai tanda pembuatann object menggunakan constructor(perjanjian saya aja yaa ini hehe).
    //var mhs   = {};  //nah, kalau di constructor, dua ini ga perlu yaa, kita pakai variabel this di elemen objeknya aja, dan pakai keyword new pemanggilan template program.

    this.nama    = nama;
    this.npm     = npm ;
    this.email   = email;
    this.jurusan = jurusan;
    this.kampus  = kampus;

    //return mhs; //nah, kalau di constructor, dua ini ga perlu yaa, kita pakai variabel this di elemen objeknya aja, dan pakai keyword new pemanggilan template program.
    
}

var mhs3 = new Mahasiswa("Bedill", "2x06050296", "abdillahyudli@gmail.com", "Fisika", "Universitas Indonesia")
//console.log("\n\nMenggunakan Constructor : \n" + mhs3) //plis jangan manggil kek gini, entah kenapa ga tampil di terminal vscode.
console.log("\n\n===== Menggunakan Constructor : ")
console.log(mhs3)



//Tentang variabel this dan window
console.log("\n\n ===== Apa itu this? apa itu window? =====\n\n")

// var a = this
// console.log(a) ; //jika dirun di console browser, maka akan muncul window, dan juga detail variabel global

// var b = window
// console.log(window); //jika dirun di console browser, maka akan muncul hal yg sama seperti this.

// console.log(this === window) //jika dijalankan pada console browser, hasilnya true.


/*Rangkuman pembuatan object dengan 3 metode yang telah kita pelajari

//cara 1 : object literal

var obj = {};
obj.halo = function()   {
    console.log('halo!');
}
obj.halo();

//cara 2 : function declaration
function halo() {
    console.log('halo!')
}
halo();

//cara 3 :
function Halo() {
    console.log('Halo!!!')
}
new Halo();
*/



//Mari kita terapkan this dan window pada masing-masing metode pembuatan objek, apakah hasilnya

//cara 1 : object literal

var obj = {};
obj.halo = function()   {
    console.log(this);
    console.log('halo!');
}
obj.halo(); //pada object dengan metode object literal, this mengembalikan object yang bersangkutan.

//cara 2 : function declaration
function halo() {
    console.log(this);
    console.log('halo!')
}
this.halo(); //pada object dengan metode function declaration, this mengembalikan object global
window.halo(); //pemanggilan seperti ini juga bisa yaa

//cara 3 : constructor
function Halo() {
    console.log(this);
    console.log('Halo!!!')
}
var  obj1   = new Halo();
var  obj2   = new Halo();
//pada object dengan metode constructor, this mengembalikan object yang baru dibuat.








