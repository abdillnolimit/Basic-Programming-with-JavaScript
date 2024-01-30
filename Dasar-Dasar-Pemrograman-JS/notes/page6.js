//Array (TITLE)
console.log("===== Array =====")
/*
Objektivitas belajar array :
-Mengelola isi array;
-Menelusuri array dengan looping;
-Method pada array;
-Studi Kasus;

Array secara sederhana merupakan susunan sistematis dari objek-objek yang serupa.
Definisi lain, array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel),
yang tiap-tiap elemennya memiliki index. Setiap elemen memiliki pasangan key dan value.

Programmers sebagian menyebutkan array sebagai variabel yang lebih sakti karena elemen-elemennya bisa berupa tipe data apapun,
termaasuk menyimpan variabel, fungsi, serta array lagi.


Array diciptakan untuk membuat program lebih efisien. Misalnya kita ingin membuat data list nama-nama mahasiswa,
tanpa array :
var mhs1    = udin
var mhs2    = Aguero
var mhs 3   = Alexa
...
var mhs99999= valerie 

Hal ini membuat programmer lelah dan juga boros pemakaian memori. Ingat!tiap kali kita membuat variabel itu memakai memori.

array :
var mahasiswa = [ 'Udin' , 'Aguero' , 'Alexa' , 'Valerie'];

Selain itu, array membantu programmer mengklasifikasikan data-data yang tersimpan dengan data-data lain.

Kenapa array?
-mempermudah pengelolaan value/data (penelusuran, pencarian, pengklasifikasian);
-manajemen memori

karakteristik array :
-variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama;
-kumpulan pasangan key dan value / key and value pair
-key adalah indeks pada array dengan tipe integer yang dimulai dari 0;
-array pada js bertipe object, sedangkan beberapa bahasa pemrograman lain array-nya bukan bertipe object;
-array pada js memiliki fungsi/method length untuk menghitung jumlah elemen di dalamnya;
-elemen pada array boleh memiliki tipe data yang berbeda.

note : function pada objek dinamakanya sebagai method.
*/

//Mengakses elemen pada array (identifikasi indeks ke-n, identifikasi tipe array, identifikasi banyak elemen array)
console.log("\n\n===== Mengakses Elemen Array =====")
var binatang = ['kucing', 'anjing', 'sapi', 'kambing', 'domba']
console.log(binatang)
console.log("Apa nama binatang kelima pada array ? " + binatang[4])
console.log("Apa tipe data array binatang tersebut ? " + typeof(binatang))
console.log("Ada berapakah binatangnya ? " + binatang.length + " binatang.")


var myFunc = function() {
    console.log("Hi Abdill!!!");
}

var randomElement =  ['Abdill', 1 , true, myFunc, [1,2,3]];
console.log(randomElement.length)
//cara memanggil dan menampilkan angka 2 pada randomElement gimana ?  gini caranya console.log(randomElement[indeks luar][indeks dalam])
console.log(randomElement[4][1])



//Memanipulasi Array (TITLE)
console.log("\n\n===== Memanipulasi Array =====")

//  1. Menggantikan atau update isi elemen array
var arr = ["a", 1, true]
console.log(arr) //manggil array
arr[0]  = "Abdill"
arr[1]  = "Ganteng"
console.log(arr) //setelah diupdate

// 2. Menambahkan isi elemen array
var array = []
array[0]    = "Bedill"
array[1]    = true
array[2]    = [2,3,4]
array[4]    = myFunc // nah jangan kyk gini! karena indeks ke-3 akan menjadi undefined atau <1 empty item>.

console.log(array)


//  3. Menghapus isi array
array[1] = undefined; //ini salah satu cara, tapi di terminal jadi tertulis undefined atau <1 empty item>.
console.log(arr);

// 4. Menampilkan isi array menggunakan looping
for(var i = 0; i<3; i++)    {
    console.log(arr[i]);
}

for(var i = 0; i <= 4; i++) {
    console.log("Binatang ke-" + (i+1) + " : " + binatang[i])
}


//Method Pada Array (TITLE)
console.log("\n\n===== Method pada Array =====")
//  1. join (untuk menampilkan array dalam format ke samping dan menentukan pemisahan antar elemennya.)
console.log(binatang.join(' - '))

//  2. length (menghitung banyak elemen array sudah termasuk indeks ke-0 sampai dengan indeks ke-n)
console.log(binatang.length)

//  3. push, pop, shift, unshift
//push : method untuk memaksakan masuk elemen baru ke dalam array, secara otomatis menambahkan ke indeks paling belakang.
binatang.push("Budi", "Marsel"); console.log(binatang.join(' - '))

//pop : method untuk menghilangkan sebuah elemen dari array, secara otomatis menghilangkan dari indeks yang paling belakang.
binatang.pop(); console.log(binatang) //jika dibuatkan method pop terus-menerus sebanyak m kali, maka tersisa indeks (n-m).


//unshift : method yg hampir sama seperti push, bedanya unshift menambahkan ke indeks yang paling awal.
binatang.unshift("Raisa", "Udin"); console.log(binatang.join(' - '))

//shift : method yang hampir sama dengan pop, bedanya shift ini menghilangkan dari indeks yang paling awal.
binatang.shift(); console.log(binatang.join(' - '))

//  4. slice dan splice
//slice : method yang digunakan untuk memotong elemen array dari indeks ke-n hingga indeks ke-(m-1). slice(awalIkutSerta,akhirTetapiTidakIkutSerta)
console.log(binatang.join(' - '))
var binatangSlice = binatang.slice(1,5) ; console.log("Setelah di-slice : " + binatangSlice)

//splice : method yang digunakan untuk menghilangkan bagian ujung-ujung elemen dari elmen baru yang ditambahkan. splice(indekYangDitujuSebagaiAwalanPenambahan, mauDiHapusBerapa, elemenBaru1, elemenBaru2, ....)
console.log("Array awal binatang : " + binatang) 
binatang.splice(2,4,"Yaya", "Tiara") ; //btw entah kenapa kalau splice gabisa ditampung ke dalam variabel baru huhuhuhu :", beda sama slice jadinya.
console.log("Setelah di-splice : " + binatang)


// 5. forEach dan map
//foreach
var angka = [3,20,1,4,5,6,7,8];
//Misal memanggil tiap elemen array dengan looping
// for(var i = 0; i < angka.length; i++ )  {
//     console.log(angka[i]);
// } 

//menggunakan forEach untuk kasus yang sama seperti memanggil menggunakan looping
angka.forEach(function(e)   {
    console.log(e);
}) //penulisan function expression langsung digabung kek gini gapapa, dipisah juga gapapa.

var cetak = function(e) {
    console.log(e);
}
console.log("kyk gini juga bisa")
angka.forEach(cetak); //gini juga bisa

console.log("Array awal Binatang : " + binatang.join(' - '))
binatang.forEach(function(e,i) {
    console.log('Binatang ke-' + (i+1) + ' adalah : ' + e)
})

//map : sama seperti forEach, perbedaanya adalah map mereturn dalam bentuk array, sedangkan forEach bukan array sehingga forEach tidak bisa diberikan method array lagi, misal seperti method join.
console.log("\nMenggunakan method map")
angka.map(function(e)   {
    console.log(e);
})
angka2 = angka.map(function(e) {
    return e * 2
})
console.log("Setelah dikalikan 2 : ", angka2.join(' - '))

//  6. sort atau mengurutkan atau menyusun
angka.sort();
console.log("angka setelah sorted : " + angka) //tapi kurang akurat, rancu jika bilangan bukan satuan.

angka.sort(function(a,b)    {
    return a-b;
})
console.log("nah, ini sorting yang benernya : " + angka)

// 7. filter & find
//find : mengembalika 1 nilai


//filter : mengembalikan banyak nilai
var Pakaifilter = angka.filter(function(x,y)  {
    return x == 5;
}) 
console.log("Apakah pada array angka terdapat elemen ber-value 5 ? " + Pakaifilter) //btw output nya arrah juga yaa!

var Pakaifilter = angka.filter(function(x,y)  {
    return x >= 5;
})
console.log(Pakaifilter)

//find : hanya menemukan 1 nilai dan itu yang pertama kali ia temukan.
var Pakaifilter = angka.find(function(x,y)  {
    return x >= 5;
})
console.log(Pakaifilter) //btw output nya bukan array, tapi cuma 1 value saja (non array)

// referensi method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
