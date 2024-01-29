//Pengulangan : while (TITLE)
/*
while adalah salah satu metode pengulangan pada pemrograman JS. While membuat program berjalan selama kondisi bernilai true.

while(kondisi)  {
    aksi
}

*/

//infinite loop atau looping forever

while(true) {
    console.log("Hi Ganteng!");
} //jangan lupa klik ctrl+c untuk stop the program using VSCode wkwkwkwkk




while(false)    {
    console.log("Program tidak akan berjalan.")
}

/*Pada pengulangan, berdasarkan cara menghentikan program dibagi menjadi 2, yaitu dihentikan melalui user atau program itu sendiri.
*/


//dihentikan oleh user

console.log("\n\n===== stopped by user =====")
var ulang = true;
while(ulang)    {
    console.log("Hai Ganteng, Hai cantik!");
    ulang = confirm("lagi ?");
}


//dihentikan oleh program
console.log("\n\n===== stopped with program =====")
/*
nilai-nilai awal
while(kondisi terminasi)    {
    aksi

    increment(penambahan)/decrement(pengurangan)
}

var nilaiawal = 1;
while(nilaiawal <= 5)   {
    console.log("Hello World!" + nilaiawal + "x");
    nilaiawal = nilaiawal + 1 //atau penulisan kerennya nilaiawal++
}

//Tugas : Misalkan kalian adalah juragan angkot, buatlah pernyataan setiap angkotnya beroperasi dengan baik!
console.log("\n\n===== Tugas Juragan Angkot Menggunakan While =====")
var jumlahAngkot = 10
var nilaiAwal = 1
while(nilaiAwal <= jumlahAngkot) {
    console.log("Angkot " + nilaiAwal + "beroperasi dengan baik.");
nilaiAwal++;
}


//Pengulangan : for (TITLE)
console.log("\n\n===== Pengulangan/Looping : for =====")
/*
Sebenarnya jika kalian sudah paham cara kerja looping dari while, maka pasti bisa memahami looping dari for.

for(kondisi)    {
    aksi;
    aksi;

increment/decrement
}

kondisi pada for seminimal mungkin terdapat statement dan juga increment/decrement.
for(var x = 1; x <= 10; x++)    {
    aksi;
} //btw ikutin sintaks ini aja hehe, gw gatau kenapa ini lebih banyak worked dibanding syntax di bawa ini.

atau
var y = nilaitertentu
for(x < y; x++;) {
    aksi;
}

bedakan wajib penulisan ; pada akhir kondisinya!
*/
for(let i = 0; i <= 10; i++)   {
    console.log('I say "I Love You" for ' + i + "x");
}
//jika diperhatikan, for lebih ringkas daripada while.


//Tugas (Juragan Angkot) : Buatkan keterangan bahwa angkot 1 s.d. 6 beroperasi dengan baik, sedangkan angkot 7 s.d. 10 sedang tidak beroperasi.
//Gunakan pernyataan 1 s.d. 6 menggunakan while, sedangkan pernyataan 7 s.d. 10 menggunakan for.
console.log("\n\n ===== Tugas Juragan Angkot ke-2 =====")
var jumlahAngkot = 10
var noAngkot = 1
angkotBeroperasi = 6
while(noAngkot <= angkotBeroperasi)   {
    console.log("Angkot No."+noAngkot+" beroperasi dengan baik.");
noAngkot++;
}
for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++)    {
    console.log("Angkot No."+noAngkot+" sedang tidak beroperasi.")
}


//Pengondisian : if else pada JS (TITLE)
console.log("\n\n===== Pengondisian : if else =====")
/*
if(kondisi) {
    aksi;
}
...
aksi akan terjalani jika kondisi terpenuhi, sedangkan jika kondisi tidak terpenuhi maka aksi tidak dilakukan/dilewatkan(keluar dari blok if).
*/
var angka = 1
if(angka === 1) {
    console.log("Anda memasukkan angka 1.")
} //aksi terjalani.


var angka = prompt("Untuk memeriksa status angka, silakan masukkan angka : ") //btw janlup, prompt hasilnya string!
if(angka % 2 == 0)  {
    alert("Angka "+ angka+" adalah angka genap.")
}
else    {
    alert("Angka "+ angka + " adalah angka ganjil.")
}


//TUGAS (Juragan Angkot ke-3)
/*Buatkan program untuk kasus yang sama dengan tugas juragan angkot ke-2, tetapi dengan menggunakan
1 pengulangan (for) saja! Selain itu diperbolehkan menggunakan pengondisian.
*/
console.log("\n\n===== Tugas Juragan Angkot ke-3 =====")
for(var i = 1; i <= 10; i++)    {
    if(i<=6)    {
        console.log("Angkot nomor "+i+" beroperasi dengan baik.")
    }
    else   {
        console.log("Angkot nomor "+i+" sedang tidak beroperasi.")
    }
}

//Pengondisian : else if (TITLE)
/*
else if dapat digunakan di antara if dan else.

if(kondisi) {
    aksi 1;
}
else if ke-n(kondisi)   {
    aksi ke-n;
}
else    {
    aksi else;
}

contoh penggunaan else if, yaitu pada pengklasifikasian angka genap/ganjil sebelumnya. Jika kita perhatika,
jika user memberikan input prompt berupa data string, pasti yang dijalankan ialah else(data yang dimasukkan user adalah bilangan ganjil).
Aneh kan? that's why kita pakai else if.
*/


var angka = prompt("Untuk memeriksa status angka, silakan masukkan angka : ") //btw janlup, prompt hasilnya string!
if(angka % 2 == 0)  {
    alert("Angka "+ angka+" adalah angka genap.")
}
else if(angka % 2 == 1) {
    alert("Angka "+angka+" adalah bilangan ganjil.")
}
else    {
    alert("Data yang Anda masukkan bukan angka!")
}



//TUGAS : Juragan Angkot ke-4
/*
Sekarang, misalkan angkot 1 s.d. 6 beroperasi dengan baik, sedangkan angkot 7 sedang tidak beroperasi,
angkot 8 sedang lembur, angkot 9 s.d. 10 sedang tidak beroperasi.

*/
console.log("\n\n===== Tugas Juragan Angkot ke-4 =====")
var jumlahAngkot = 10
var noAngkot    = 1
var angkotBeroperasi = 6

for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)  {
    if(noAngkot <= angkotBeroperasi) {
        console.log("Angkot "+noAngkot+" beroperasi dengan baik.")
    }
    else if(noAngkot === 8) {
        console.log("Angkot "+noAngkot+" sedang lembur.")
    }
    else    {
        console.log("Angkot "+noAngkot+" sedang tidak beroperasi.")
    }
}
//btw dari sini w mengonfirmasi, syntax for yang benar kyk gini hehe.


//sekarang, bagaimana jika angkot 8 dan 10 lembur?
console.log("\n\n===== Angkot 8 dan 10 lembur gess =====")
/*
Jika kalian menggunakan 2 else if untuk menyatakan angkot 8 dan 10 lembur pada masing-masingnya, yaa ga salah!
tetapi kurang simple aja penulisan code nya.
Kalau mau lebih simple, pakai operator logika.
*/
for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)  {
    if(noAngkot <= angkotBeroperasi) {
        console.log("Angkot "+noAngkot+" beroperasi dengan baik.")
    }
    else if(noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot "+noAngkot+" sedang lembur.")
    }
    else    {
        console.log("Angkot "+noAngkot+" sedang tidak beroperasi.")
    }
}

//Sekarang, bagaimana nyatanya angkot 5 juga ingin lembur?
/*Jika kalian menambahkan lagi operator logika untuk angkot 5, fix kalian salah! wwkwwkkw,
Karena pada pengondisian if, masih <= angkotBeroperasi wlwlwllkwkw.
Jadi, yang perlu kita lakukan adalah menambahkan operator logika untuk kondisi pada if -nya juga lah! wkkwkw.
*/
for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++)  {
    if(noAngkot <= angkotBeroperasi && noAngkot!==5) {
        console.log("Angkot "+noAngkot+" beroperasi dengan baik.")
    }
    else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("Angkot "+noAngkot+" sedang lembur.")
    }
    else    {
        console.log("Angkot "+noAngkot+" sedang tidak beroperasi.")
    }
}

//Pengondisian : switch (TITLE)
/*Mirip dengan if dan else,

if(kondisi 1)   {
    aksi 1
}
else if(kondisi 2)  {
    aksi 2
}
else if(kondisi n)  {
    aksi n
}
else    {
    aksi default
}
end program.

        sedangkan,

switch(ekspresi)    {
    case "nilai 1":
        aksi 1
        [break;]
    case "nilai n":
        aksi n
        [break;]
    default:
        aksi default
        [break;]
}
Jadi, pada switch ini, hanya memiliki beberapa kondisi saja. Ekspresi pada switch menghasilkan nilai yang selanjutnya
dikonfirmasi oleh setiap case di dalam block code -nya.
*/

/*
var angka = parseInt(prompt('masukkan angka : ')) //btw parse_ ini adalah salah satu fungsi yang mengonversi tipe data pada JS.

if(angka === 1) {
    alert("Anda memasukkan angka 1.")
}
else if(angka === 2)    {
    alert("Anda memasukkan angka 2.")
}
else if(angka === 3)    {
    alert("Anda memasukkan angka 3.")
}
else {
    alert("Angka yang Anda masukkan salah!")
}
*/

//Menggunakan switch case

console.log("\n\n===== Penggunaan Switch =====")
var angka = prompt("Masukkan angka = ") //nah, ini outputnya adalah string, hati-hati di case !
switch( angka)  {
    case '1' :
        alert("Anda memasukkan angka 1.")
        break
    case '2' :
        alert("Anda memasukkan angka 2.")
        break
    case '3':
        alert("Anda memasukkan angka 3.")
        break
    default :
    alert("Angka yang Anda masukkan salah!")
    break
}


console.log("\n\n===== Contoh lain penggunaan switch =====")
var item = prompt("Masukkan nama makanan/minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)")
switch(item)    {
    case 'nasi' :
        alert("Nasi adalah makanan sehat!")
        break
    case 'daging' :
        alert("Daging adalah makanan sehat!")
        break
    case 'susu' :
        alert("Susu adalah minuman sehat!")
        break
    case 'hamburger' :
        alert("Hamburger adalah makanan tidak sehat!")
    case 'softdrink' :
        alert("Softdrink adalah minuman tidak sehat!")
    default :
    alert("Mohon masukkan nama makanan/minuman yang tertera pada contoh!")
    break
}

//CATATAN!!! kita tidak perlu menuliskan break jika aksi yang di bawah-bawah nya sama sebanyak n kali.
console.log("===== Penulisan lebih rapihnya =====")
var item = prompt("Masukkan nama makanan/minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)")
switch(item)    {
    case 'nasi' :
    case 'daging' :
        alert("makanan sehat!")
        break
    case 'susu' :
        alert("Susu adalah minuman sehat!")
        break
    case 'hamburger' :
        alert("Hamburger adalah makanan tidak sehat!")
    case 'softdrink' :
        alert("Softdrink adalah minuman tidak sehat!")
    default :
    alert("Mohon masukkan nama makanan/minuman yang tertera pada contoh!")
    break
}



//Looping & Conditional Bersarang (TITLE)
console.log("\n\n===== Looping & Conditional Bersarang =====")
/*Pada bagian ini, kita mempelajari secara langsung pada contoh kasus.
Maksudnya bersarang ialah terdapat 3 keadaan yang mungkin kita bisa lakukan, yaitu
-Conditional di dalam Looping,
-Looping di dalam Conditional, atau
-Looping di dalam looping.
*/

//Membuat susunan simbol sebanyak 5 kali ke samping dan memiliki 10 baris.
console.log("\n\n===== Susunan simbol sebanyak n kali ke samping dan memiliki m baris ke bawah. =====")
var space = ''
for(var i = 0; i<10; i++)   {
    space += '*****';
    space += '\n'
}
console.log(space)

        console.log("Cara lain")
var s = ''
for(var i = 0; i < 10; i++) {
    for(var j = 0;j < 5; j++)   {
        s += '*' ;
    }
    s += "\n"
}
console.log(s)

//Membuat segitiga siku-siku Berdiri
console.log("Segitiga Siku-Siku berdiri")
var s = ''
for(var i = 0; i < 10; i++) {
    for(var j = 0;j < i; j++)   {
        s += '*' ;
    }
    s += "\n"
}
console.log(s)

//Membuat Segitiga Siku-Siku Terbalik
console.log("Segitiga Siku-Siku Terbalik")
console.log("Segitiga Siku-Siku berdiri")
var s = ''
for(var i = 10; i > 0; i--) {
    for(var j = 0;j <= i; j++)   {
        s += '*' ;
    }
    s += "\n"
}
console.log(s) //Mengapa paling bawah tidak berupa 1 simbol dan juga paling atas terdapat 11 simbol? Ini diluar ekspektasi...

console.log("Troubleshooting")
var s = ''
for(var i = 10; i > 0; i--) {
    for(var j = 0;j < i; j++)   {
        s += '*' ;
    }
    s += "\n"
}
console.log(s)

//TUGAS : Buat segitiga Pascal; Buat segitiga sama kaki & sama sisi; buat belah ketupat; Buat Papan Catur menggunakan 1 simbol dan space kosong (ibaratkan hitam/putih)