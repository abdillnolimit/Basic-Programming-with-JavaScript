//Variabel pada JS (TITLE
/*
Variabel adalah sebuah tempat/wadah yang memiliki nama yang digunakan untuk menyimpan nilai(tipe data tertentu).

Dalam membuat sebuah variabel, terdapat 3 tahap, yaitu
1. deklarasi
mendaftarkan variabel ke dalam lingkup yang sesuai.
2. inisialisasi
menyediakan memori untuk variabel.
3. assignment
menetapkan nilai yang spesifik ke dalam variabel.

*/
// var x; //deklarasi & inisialisasi
//x = 20; // assignment

/* deklarasi variabel yang biasa digunakan pada JS : var, let, const

Kaidah penulisan :
-tidak boleh menggunakan spasi pada nama variabel,
-nama variabel tidak boleh diawali dengan angka,
-spasi lebih baik digantikan dengan underscore,
-boleh menggunakan simbol,
-tanpa spasi juga gapapa,
-nama variabel yang sama meliputi penulisan kapitalnya juga (lowercase atau uppercase),
-programmer biasnnya menggunakan format camel case,
-ADA BEBERAPA KATA YANG TIDAK BOLEH DIGUNAKAN SEBAGAI VARIABEL JS (keyword & reserved word 'search aja di browser apa saja'),
-disarankan menggunakan format shorthand

var nama;
var umur;
var lulus;

nama = "Abdill";
umur = 20;
lulus = true;

#shorthand
var nama    = "Abdill",
    umur    = 20,
    lulus   = true;


Pada variabel, ada yang dinamakan variable scope, next dijelasinnya yaa!!! (setelah belajar function dan object)

*/
console.log("===== Variabel =====")





//Menuliskan source code JavaScript (TITLE)
console.log("\n\n===== Menulisan Source Code JS =====")
/*
Source code JS pada dasarnya dapat dituliskan dengan metode yang sama seperti menuliskan
source code CSS. Terdapat 3 metode yang biasa digunakan.

*/




//Popup box / dialog box (TITLE)
console.log("\n\n===== Popup box / dialog box =====")
/*
Popup box biasa digunakan untuk berinteraksi dengan user.
Terdapat 3 popup box / dialog yang biasa digunakan : alert, prompt, confirm.

alert("hello world!")
biasa digunakan untuk menyampaikan pesan kepada user. Hanya terdapat button 'ok' saja.

prompt("Siapa nama Anda?" + prompt)
Prompt menyampaikan pesan sekaligus mengambil data dari user. Pada prompt, tipe data yang diambil bermacam-macam.
Pada prompt, terdapat 2 button, yaitu 'ok' atau 'cancel', selain itu ada filling the blank (words).
Supaya data yang diinput oleh user dapat digunakan, kita buat prompt dalam sebuah variabel!



confirm("Are you sure ?")
hampir sama dengan prompt, confirm tidak ada filling the blank, melainkan hanya button 'ok' atau 'cancel' saja, dan juga
tipe data yang diperoleh dari user berupa boolean. 'ok' bermakna true, sedangkan 'cancel' bermakna false.


*/

//Menyampaikan pesan ke user menggunakan alert
console.log("\n\n===== alert =====")
var x = alert('Hello World!');
    console.log(x) //jalankan program ini di browser(apapun) melalui inspect dan di tab console.

//prompt
console.log("\n\n===== prompt =====")
var nama = prompt("Siapakah nama Anda ?")
    alert(nama)

//confirm
console.log("\n\n===== confirm =====")
var tes = confirm("Kamu yakin ??")
    alert(tes)

//example
console.log("\n\n===== example =====")
alert("Welcome!")
var lagi = true;

while(lagi)    {
    var nama = prompt('masukan nama :');
    alert('halo ' + nama);

    lagi = confirm("coba lagi?");
}
alert("terima kasih!")



//control flow / alur kendali pada JS (TITLE)
console.log("\n\n===== control flow / alur kendali pada JS =====")
/*
Pada pemrograman, umumnya memiliki control flow. Apabila program kita memiliki lebih dari satu statement, maka statement tersebut
akan dieksekusi dari atas ke bawah atau dari kiri ke kanan.

Namun, bisa saja kita membuat control flow nya tidak lurus seperti biasanya.
Pada control flow, ada dua hal bernama pengulangan(loop/iteration) dan pengondisian(percabangan).

*/

//Pengulangan (loop/iteration) : for, while, do while
alert("mulai")
for(var i = 0; i < 5; i++)  {
    alert("Hello World!");
}
alert("Selesai.");

//Pengondisian(percabangan) : if, if...else... , if....else if.... , switch
var angka = prompt("Masukan angka :");
if (angka%2 === 0)  {
    alert(angka + "adalah bilangan genap");
}
else {
    alert(angka + "adalah bilangan ganjil");
}



